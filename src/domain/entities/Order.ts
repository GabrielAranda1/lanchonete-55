import { Customer } from "./Customer";
import { Entity } from "./Entity";
import { Product } from "./Product";

export class OrderProduct extends Product {
  public constructor(props: Partial<OrderProduct>) {
    super(props)
  }

  public quantity: number
}

export class Order extends Entity<Order> {
  public constructor(props: Partial<Order>) {
    super(props)
  }
  public customer?: Customer

  public products: OrderProduct[]

  public status: Status

  public totalPrice: number
}

export enum Status {
  RECEIVED = 'RECEIVED',
  PREPARING = 'PREPARING',
  READY = 'READY',
  DONE = 'DONE',
}
