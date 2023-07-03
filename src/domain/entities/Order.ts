import { Customer } from "./Customer";
import { Entity } from "./Entity";
import { Product } from "./Product";

export class Order extends Entity {
  public constructor(
    public customer: Customer,
    public products: Product[],
    public status: Status,
  ) {
    super()
  }
}

export enum Status {
  RECEIVED = 'RECEIVED',
  PREPARING = 'PREPARING',
  READY = 'READY',
  DONE = 'DONE',
}
