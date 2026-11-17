import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface OrderEvent {
  orderId: string;
  status: string;
  timestamp: Date;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private readonly apiUrl = 'http://localhost:3000/orders/stream';
  private ordersSignal = signal<OrderEvent[]>([]);

  constructor(private http: HttpClient) {}

  get orders() {
    return this.ordersSignal.asReadonly();
  }

  // TODO(reto): Implementar la suscripción a eventos SSE para recibir actualizaciones en tiempo real
  // Requisitos:
  // 1. Conectarse al endpoint SSE usando EventSource o HttpClient con la opción 'observe: "events"'
  // 2. Parsear cada evento recibido y actualizar el signal con la nueva orden
  // 3. Manejar errores de conexión y reconexión automática
  // 4. Limpiar la suscripción cuando el servicio sea destruido
  connectToOrderStream(): void {
    // Implementación pendiente para la fase 2 del reto
  }
}