import { inject, injectable } from "tsyringe";
import { Customer } from "../../entities/Customer";
import { Order } from "../../entities/Order";
import { IOrderRepository } from "../../ports/repositories/Order";
import { IListOrdersUseCase } from "./IListOrders";
import { ListOrdersDTO } from "./ListOrdersDTO";

@injectable()
export class ListOrdersUseCase implements IListOrdersUseCase {
  constructor(
    @inject('IOrderRepository')
    private readonly orderRepository: IOrderRepository
  ) { }

  async list(params: ListOrdersDTO): Promise<Order[]> {
    const { customerId, status } = params

    return this.orderRepository.list({
      status,
      customer: customerId ? new Customer({ id: customerId }) : undefined
    });
  }
}