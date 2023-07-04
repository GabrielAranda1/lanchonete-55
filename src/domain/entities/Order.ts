import { Customer } from "./Customer";
import { Entity } from "./Entity";
import { Product } from "./Product";

export class Order extends Entity<Order> {
  public constructor(props: Partial<Order>) {
    super(props)
  }
  public customer: Customer

  public products: Product[] = []

  public status: Status
}

export enum Status {
  RECEIVED = 'RECEIVED',
  PREPARING = 'PREPARING',
  READY = 'READY',
  DONE = 'DONE',
}
