// TODO(reto): archivo stubbeado; implementa los cuerpos.
// TODO(reto): Implementar el endpoint SSE para streaming de eventos
import { Controller, Get, Sse } from '@nestjs/common';
import { Observable } from 'rxjs';
import { OrderEvent } from '../../domain/order-event';
import { OrderEventPublisherService } from '../../../src/application/order-event-publisher.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('orders')
@Controller('orders')
export class OrderEventController {
  constructor(private readonly publisherService: OrderEventPublisherService) {}

  @Get('stream')
  @Sse()
  @ApiOperation({ summary: 'Stream de eventos de órdenes en tiempo real' })
  @ApiResponse({
    status: 200,
    description: 'Stream de eventos Server-Sent Events',
  })
  streamOrders(): Observable<MessageEvent> {
    throw new Error('TODO(reto): streamOrders');
  }
}