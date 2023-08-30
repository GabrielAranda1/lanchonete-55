import { inject, injectable } from 'tsyringe'
import { Customer } from '../../entities/Customer'
import { Order, Status } from '../../entities/Order'
import { IOrderRepository } from '../../ports/repositories/Order'
import { IListOrdersUseCase } from './IListOrders'
import { ListOrdersDTO } from './ListOrdersDTO'

@injectable()
export class ListOrdersUseCase implements IListOrdersUseCase {
  constructor(
    @inject('IOrderRepository')
    private readonly orderRepository: IOrderRepository
  ) { }

  async list(params: ListOrdersDTO): Promise<Order[]> {
    const { customerId, status, done = '0' } = params

    const orders = await this.orderRepository.list({
      status,
      customer: customerId ? new Customer({ id: customerId }) : undefined
    })

    const sortedOrders = this.sortOrders(orders)

    if (done === '0') {
      return sortedOrders.filter(order => order.status !== Status.DONE)
    }

    return sortedOrders
  }

  private sortOrders(orders: Order[]): Order[] {  
    return orders.sort((a, b) => {
      const order = {
        [Status.READY]: 1,
        [Status.PREPARING]: 2,
        [Status.RECEIVED]: 3,
        [Status.DONE]: 4,
      }
      
      return order[a.status] - order[b.status]
    })
  
  }
}