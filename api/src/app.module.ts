import { Module } from '@nestjs/common';
import { OrderEventController } from './infrastructure/sse/order-event.controller';
import { OrderEventPublisherService } from './application/order-event-publisher.service';
import { KafkaProducerService } from './infrastructure/kafka/kafka-producer.service';
import { KafkaConsumerService } from './infrastructure/kafka/kafka-consumer.service';

@Module({
  imports: [],
  controllers: [OrderEventController],
  providers: [
    OrderEventPublisherService,
    KafkaProducerService,
    KafkaConsumerService,
  ],
})
export class AppModule {}