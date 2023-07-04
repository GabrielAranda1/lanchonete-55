import { inject, injectable } from "tsyringe";
import { ICustomerRepository } from "../../domain/ports/repositories/Customer";
import { Knex } from "knex";
import { Customer } from "../../domain/entities/Customer";

@injectable()
export class CustomerRepository implements ICustomerRepository {
  constructor(
    @inject('MySqlDatabase') protected readonly database: Knex
  ) { }
  async create(customer: Customer): Promise<boolean> {
    const [createdCustomer] = await this.database('customers')
      .insert({
        id: customer.id,
        name: customer.name,
        email: customer.email,
        document_number: customer.documentNumber
      });

    return createdCustomer === 0
  }

  async getById(id: string): Promise<Customer> {
    const customer = await this.database('customers').where('id', id).first()

    return new Customer({
      createdAt: customer.created_at,
      updatedAt: customer.updated_at,
      id: customer.id,
      name: customer.name,
      email: customer.email,
      documentNumber: customer.document_number
    })
  }
}