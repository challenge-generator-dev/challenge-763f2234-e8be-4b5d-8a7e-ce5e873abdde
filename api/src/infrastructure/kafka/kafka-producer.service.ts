// TODO(reto): archivo stubbeado; implementa los cuerpos.
// TODO(reto): Implementar la publicación de eventos en Kafka
import { Injectable } from '@nestjs/common';
import { Kafka, Producer, ProducerRecord } from 'kafkajs';
import { OrderEvent } from '../../domain/order-event';

@Injectable()
export class KafkaProducerService {
  private producer: Producer;

  constructor() {
    const kafka = new Kafka({
      clientId: 'order-service',
      brokers: [process.env.KAFKA_BROKERS || 'localhost:9092'],
    });
    this.producer = kafka.producer();
  }

  async connect(): Promise<void> {
    throw new Error('TODO(reto): connect');
  }

  async disconnect(): Promise<void> {
    throw new Error('TODO(reto): disconnect');
  }

  async publishOrderEvent(topic: string, event: OrderEvent): Promise<void> {
    throw new Error('TODO(reto): publishOrderEvent');
  }
}