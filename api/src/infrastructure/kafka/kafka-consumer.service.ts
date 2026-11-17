import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { Kafka, Consumer, EachMessagePayload } from 'kafkajs';
import { OrderEvent } from '../../domain/order-event';
import { OrderEventPublisherService } from '../../application/order-event-publisher.service';

@Injectable()
export class KafkaConsumerService implements OnModuleInit, OnModuleDestroy {
  private consumer: Consumer;
  private readonly kafka: Kafka;

  constructor(private readonly publisherService: OrderEventPublisherService) {
    this.kafka = new Kafka({
      clientId: 'order-consumer',
      brokers: (process.env.KAFKA_BROKERS || 'localhost:9092').split(','),
    });
    this.consumer = this.kafka.consumer({ groupId: 'order-group' });
  }

  async onModuleInit(): Promise<void> {
    await this.connect();
    await this.subscribeToTopic();
    await this.startConsuming();
  }

  private async connect(): Promise<void> {
    try {
      await this.consumer.connect();
    } catch (error) {
      console.error('Failed to connect Kafka consumer:', error);
      throw error;
    }
  }

  private async subscribeToTopic(): Promise<void> {
    const topic = process.env.KAFKA_TOPIC || 'orders';
    await this.consumer.subscribe({
      topic,
      fromBeginning: false,
    });
  }

  private async startConsuming(): Promise<void> {
    await this.consumer.run({
      eachMessage: async (payload: EachMessagePayload) => {
        await this.processMessage(payload);
      },
    });
  }

  private async processMessage(payload: EachMessagePayload): Promise<void> {
    try {
      const messageValue = payload.message.value?.toString();
      
      if (!messageValue) {
        console.warn('Received empty message');
        return;
      }

      const eventData = JSON.parse(messageValue);
      
      const orderEvent = new OrderEvent(
        eventData.orderId,
        eventData.status,
        new Date(eventData.timestamp),
      );

      await this.publisherService.publishOrderEvent(orderEvent);
      
      console.log(`Processed order event: ${orderEvent.orderId} - ${orderEvent.status}`);
    } catch (error) {
      console.error('Error processing message:', error);
      this.handleProcessingError(error, payload);
    }
  }

  private handleProcessingError(error: unknown, payload: EachMessagePayload): void {
    const topic = payload.topic;
    const partition = payload.partition;
    const messageOffset = payload.message.offset;
    
    console.error(`Error processing message at ${topic}[${partition}]@${messageOffset}:`, error);
  }

  async onModuleDestroy(): Promise<void> {
    await this.disconnect();
  }

  private async disconnect(): Promise<void> {
    try {
      await this.consumer.disconnect();
      console.log('Kafka consumer disconnected');
    } catch (error) {
      console.error('Error disconnecting Kafka consumer:', error);
      throw error;
    }
  }
}