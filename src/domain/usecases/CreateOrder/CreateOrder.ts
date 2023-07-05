import { inject, injectable } from "tsyringe";
import { MissingNecessaryDataError } from "../../errors/MissingNecessaryData";
import { Category, Product } from "../../entities/Product";
import { InvalidParamError } from "../../errors/InvalidParam";
import { IOrderRepository } from "../../ports/repositories/Order";
import { CreateOrderDTO } from "./CreateOrderDTO";
import { ICreateOrderUseCase } from "./ICreateOrder";
import { Order, OrderProduct, Status } from "../../entities/Order";
import { Customer } from "../../entities/Customer";

@injectable()
export class CreateOrderUseCase implements ICreateOrderUseCase {
  constructor(
    @inject('IOrderRepository')
    private readonly orderRepository: IOrderRepository
  ) { }

  async create(params: CreateOrderDTO): Promise<Order> {
    const { products, totalPrice, customerId } = params

    const calculatedTotalPrice = products.reduce((acc, product) => acc + product.price * product.quantity, 0)

    this.validateProducts(products)

    const parsedProducts = products.map(product => new OrderProduct({ id: product.id, price: product.price, quantity: product.quantity }))

    const order = new Order({
      customer: customerId ? new Customer({ id: customerId }) : undefined,
      products: parsedProducts,
      totalPrice: calculatedTotalPrice,
      status: Status.RECEIVED
    })

    const isCreated = await this.orderRepository.create(order);

    if (!isCreated) throw new Error('Order not created')

    const createdProduct = await this.orderRepository.getById(order.id)

    return createdProduct!;
  }

  private validateProducts(products: CreateOrderDTO['products']) {
    if (!products || products.length === 0) throw new MissingNecessaryDataError('Missing necessary data: products')

    const productsAreValid = products.every(product => product.quantity && product.id && product.price)

    if (!productsAreValid) throw new InvalidParamError('Invalid param: products')
  }
}