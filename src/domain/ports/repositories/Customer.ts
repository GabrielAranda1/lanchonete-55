import { Customer } from "../../entities/Customer";

export interface ICustomerRepository {
  create: (customer: Customer) => Promise<boolean>
  getById: (id: string) => Promise<Customer>
}