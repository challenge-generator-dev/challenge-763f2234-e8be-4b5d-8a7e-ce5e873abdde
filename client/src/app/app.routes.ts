import { Routes } from '@angular/router';
import { OrderListComponent } from './features/orders/order-list/order-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'orders',
    pathMatch: 'full'
  },
  {
    path: 'orders',
    component: OrderListComponent,
    title: 'Órdenes en Tiempo Real'
  },
  {
    path: '**',
    redirectTo: 'orders'
  }
];