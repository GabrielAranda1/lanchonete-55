import { Order } from "../../entities/Order";

export interface IOrderRepository {
  create: (order: Order) => Promise<boolean>
  list: (filters: Partial<Order>) => Promise<Order[]>
  getById: (id: string) => Promise<Order | null>
  update: (order: Partial<Order>) => Promise<boolean>
}