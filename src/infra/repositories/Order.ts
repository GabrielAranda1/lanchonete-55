import { Knex } from "knex";
import { inject, injectable } from "tsyringe";
import { v4 } from "uuid";
import { Customer } from "../../domain/entities/Customer";
import { Order, OrderProduct } from "../../domain/entities/Order";
import { Category } from "../../domain/entities/Product";
import { IOrderRepository } from "../../domain/ports/repositories/Order";

@injectable()
export class OrderRepository implements IOrderRepository {
  constructor(
    @inject('MySqlDatabase') protected readonly database: Knex
  ) { }
  list: (filters: Partial<Order>) => Promise<Order[]>;

  update: (order: Partial<Order>) => Promise<boolean>;

  async create(order: Order): Promise<boolean> {
    const { customer, products, totalPrice } = order

    const trx = await this.database.transaction()

    try {
      await trx('orders').insert({
        id: order.id,
        status: order.status,
        customer_id: customer?.id,
        total_price: totalPrice
      })

      const orderProducts = products.map(product => ({
        id: v4(),
        product_id: product.id,
        order_id: order.id,
        quantity: product.quantity
      }))

      await trx('order_products').insert(orderProducts)

      await trx.commit()

      return true
    } catch (error) {
      await trx.rollback()

      return false
    }
  }

  async getById(orderId: string): Promise<Order | null> {
    let customer = null

    const order = await this.database('orders').where('orders.id', orderId).first()

    if (order.customer_id) {
      customer = await this.database('customers').where('customers.id', order.customer_id).first()
    }

    const products = await this.database('order_products')
      .where('order_products.order_id', orderId)
      .join('products', 'products.id', '=', 'order_products.product_id')
      .select('products.*', 'order_products.quantity')

    if (!order) return null

    return new Order({
      id: order.id,
      status: order.status,
      totalPrice: order.total_price,
      createdAt: order.created_at,
      updatedAt: order.updated_at,
      customer: customer ? new Customer({
        id: customer.id,
        name: customer.name,
        email: customer.email,
        documentNumber: customer.document_number,
        createdAt: customer.created_at,
        updatedAt: customer.updated_at
      }) : undefined,
      products: products.map(product => {
        return new OrderProduct({
          id: product.id,
          name: product.name,
          category: product.category as Category,
          price: product.price,
          description: product.description,
          quantity: product.quantity,
          createdAt: product.created_at,
          updatedAt: product.updated_at
        })
      })
    })
  }
}