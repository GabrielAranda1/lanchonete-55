import { Entity } from "./Entity";

export class Customer extends Entity {
  constructor(
    public name: string,
    public email: string,
    public documentNumber: string,
  ) {
    super()
  }

}