export class OrderEvent {
  constructor(
    public readonly orderId: string,
    public readonly status: string,
    public readonly timestamp: Date,
  ) {
    if (!orderId || orderId.trim().length === 0) {
      throw new Error('orderId is required');
    }
    if (!status || status.trim().length === 0) {
      throw new Error('status is required');
    }
    if (!timestamp) {
      throw new Error('timestamp is required');
    }
  }
}

export type OrderEventDto = {
  orderId: string;
  status: string;
  timestamp: Date;
};