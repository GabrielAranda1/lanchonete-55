import { inject, injectable } from "tsyringe";
import { ICustomerRepository } from "../../ports/repositories/Customer";
import { ICreateCustomerUseCase } from "./ICreateCustomer";
import { CreateCustomerDTO } from "./CreateCustomerDTO";
import { Customer } from "../../entities/Customer";
import { MissingEmailError } from "../../errors/MissingEmail";
import { MissingNameError } from "../../errors/MissingName";
import { MissingNecessaryDataError } from "../../errors/MissingNecessaryData";

@injectable()
export class CreateCustomerUseCase implements ICreateCustomerUseCase {
  constructor(
    @inject('ICustomerRepository')
    private readonly customerRepository: ICustomerRepository
  ) { }

  async create(params: CreateCustomerDTO): Promise<Customer> {
    this.validateParams(params)

    const { name, email, documentNumber } = params

    const customer = new Customer({ name, email, documentNumber })
    console.log(customer)
    const isCreated = await this.customerRepository.create(customer);

    if (!isCreated) throw new Error('Customer not created')

    const createdCostumer = await this.customerRepository.getById(customer.id)

    return createdCostumer;
  }

  private validateParams(params: CreateCustomerDTO) {
    if (params.name && !params.email) throw new MissingEmailError()

    if (params.email && !params.name) throw new MissingNameError()

    if (!params.email && !params.name && !params.documentNumber) throw new MissingNecessaryDataError('Missing necessary data: name and email or documentNumber')
  }
}