import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../../core/services/order.service';
import { OrderStatusComponent } from '../../../shared/components/order-status/order-status.component';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule, OrderStatusComponent],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.scss'
})
export class OrderListComponent implements OnInit, OnDestroy {
  private readonly orderService = inject(OrderService);
  
  // TODO(reto): Implementar la suscripción al stream de órdenes
  // El componente debe:
  // 1. Conectar al stream de eventos cuando se monte el componente
  // 2. Desconectar cuando se destruya el componente
  // 3. Mostrar los eventos de órdenes en tiempo real
  
  ngOnInit(): void {
    // Implementar conexión al stream
  }

  ngOnDestroy(): void {
    // Implementar desconexión del stream
  }
}