import { inject, injectable } from "tsyringe";
import { MissingNecessaryDataError } from "../../errors/MissingNecessaryData";
import { InvalidParamError } from "../../errors/InvalidParam";
import { IOrderRepository } from "../../ports/repositories/Order";
import { CreateOrderDTO } from "./CreateOrderDTO";
import { ICreateOrderUseCase } from "./ICreateOrder";
import { Order, OrderProduct, Status } from "../../entities/Order";
import { Customer } from "../../entities/Customer";
import { IProductRepository } from "../../ports/repositories/Product";
import { NotFoundError } from "../../errors/NotFoundError";

@injectable()
export class CreateOrderUseCase implements ICreateOrderUseCase {
  constructor(
    @inject('IOrderRepository')
    private readonly orderRepository: IOrderRepository,
    @inject('IProductRepository')
    private readonly productRepository: IProductRepository
  ) { }

  async create(params: CreateOrderDTO): Promise<Order> {
    const { products, totalPrice, customerId } = params

    const calculatedTotalPrice = products.reduce((acc, product) => acc + product.price * product.quantity, 0)

    this.validateProductsParams(products)
    
    await this.validateProductExist(products)

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

  private validateProductsParams(products: CreateOrderDTO['products']) {
    if (!products || products.length === 0) throw new MissingNecessaryDataError('Missing necessary data: products')

    const productsAreValid = products.every(product => product.quantity && product.id && product.price)

    if (!productsAreValid) throw new InvalidParamError('Invalid param: products')
  }

  private async validateProductExist(products: CreateOrderDTO['products']){
    const productIds = products.map(product => product.id)

    const foundProducts = await this.productRepository.getByIds(productIds)

    if(products.length !== foundProducts.length) throw new NotFoundError('Products not found')
  }
}