import { Component, Input, ChangeDetectionStrategy, computed } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { OrderEvent } from '../../../core/services/order.service';

@Component({
  selector: 'app-order-status',
  standalone: true,
  imports: [CommonModule, DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './order-status.component.html',
  styleUrl: './order-status.component.scss'
})
export class OrderStatusComponent {
  @Input({ required: true }) orderEvent!: OrderEvent;

  readonly statusClass = computed(() => {
    const status = this.orderEvent?.status?.toLowerCase() ?? '';
    if (status.includes('complet') || status.includes('success') || status.includes('entreg')) {
      return 'status-completed';
    }
    if (status.includes('pending') || status.includes('process') || status.includes('espera')) {
      return 'status-pending';
    }
    if (status.includes('cancel') || status.includes('fail') || status.includes('error')) {
      return 'status-cancelled';
    }
    return 'status-default';
  });

  readonly statusIcon = computed(() => {
    const status = this.orderEvent?.status?.toLowerCase() ?? '';
    if (status.includes('complet') || status.includes('success') || status.includes('entreg')) {
      return '✓';
    }
    if (status.includes('pending') || status.includes('process') || status.includes('espera')) {
      return '⟳';
    }
    if (status.includes('cancel') || status.includes('fail') || status.includes('error')) {
      return '✕';
    }
    return '○';
  });

  readonly formattedTimestamp = computed(() => {
    if (!this.orderEvent?.timestamp) {
      return '';
    }
    const date = new Date(this.orderEvent.timestamp);
    return date.toLocaleString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  });

  readonly isRecent = computed(() => {
    if (!this.orderEvent?.timestamp) {
      return false;
    }
    const now = new Date().getTime();
    const eventTime = new Date(this.orderEvent.timestamp).getTime();
    const fiveMinutes = 5 * 60 * 1000;
    return (now - eventTime) < fiveMinutes;
  });
}