import { Test, TestingModule } from '@nestjs/testing';
import { OrderEventController } from './order-event.controller';
import { OrderEventPublisherService } from '../../application/order-event-publisher.service';
import { Observable, of } from 'rxjs';
import { MessageEvent } from '@nestjs/common';
import { OrderEvent } from '../../domain/order-event';

describe('OrderEventController', () => {
  let controller: OrderEventController;
  let publisherService: OrderEventPublisherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderEventController],
      providers: [
        {
          provide: OrderEventPublisherService,
          useValue: {
            getRecentEvents: jest.fn().mockReturnValue([
              new OrderEvent('order-1', 'CREATED', new Date()),
              new OrderEvent('order-2', 'PROCESSING', new Date()),
            ]),
          },
        },
      ],
    }).compile();

    controller = module.get<OrderEventController>(OrderEventController);
    publisherService = module.get<OrderEventPublisherService>(OrderEventPublisherService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('streamOrders', () => {
    it('should return an Observable of MessageEvent', (done) => {
      const result: Observable<MessageEvent> = controller.streamOrders();
      result.subscribe({
        next: (event) => {
          expect(event.data).toBeDefined();
          const data = JSON.parse(event.data as string);
          expect(data.orderId).toBeDefined();
          expect(data.status).toBeDefined();
          expect(data.timestamp).toBeDefined();
        },
        complete: () => done(),
      });
    });

    it('should emit recent events initially', (done) => {
      const mockEvents = [
        new OrderEvent('order-1', 'CREATED', new Date()),
        new OrderEvent('order-2', 'PROCESSING', new Date()),
      ];
      jest.spyOn(publisherService, 'getRecentEvents').mockReturnValue(mockEvents);

      const result: Observable<MessageEvent> = controller.streamOrders();
      let emittedCount = 0;
      result.subscribe({
        next: (event) => {
          emittedCount++;
          if (emittedCount === mockEvents.length) {
            expect(emittedCount).toBe(mockEvents.length);
            done();
          }
        },
        error: done,
      });
    });
  });
});