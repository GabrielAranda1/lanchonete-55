import { inject, injectable } from "tsyringe";
import { ICustomerRepository } from "../../domain/ports/repositories/Customer";
import { Knex } from "knex";
import { Customer } from "../../domain/entities/Customer";

@injectable()
export class CustomerRepository implements ICustomerRepository {
  constructor(
    @inject('MySqlDatabase') protected readonly database: Knex
  ) { }
  async create(customer: Customer): Promise<Customer> {
    const [createdCustomer] = await this.database('customers').insert(customer).returning('*');

    return createdCustomer as Customer
  }
}