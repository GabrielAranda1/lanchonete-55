import { inject, injectable } from "tsyringe";
import { ICustomerRepository } from "../../ports/repositories/Customer";
import { Customer } from "../../entities/Customer";
import { MissingEmailError } from "../../errors/MissingEmail";
import { MissingNameError } from "../../errors/MissingName";
import { IGetCustomerUseCase } from "./IGetCustomer";
import { GetCustomerDTO } from "./GetCustomerDTO";
import { CustomerNotExistsError } from "../../errors/CustomerNotExists";

@injectable()
export class GetCustomerUseCase implements IGetCustomerUseCase {
  constructor(
    @inject('ICustomerRepository')
    private readonly customerRepository: ICustomerRepository
  ) { }

  async get(params: GetCustomerDTO): Promise<Customer | undefined> {
    this.validateParams(params)

    const { name, email, documentNumber } = params
    const customer = new Customer({ name, email, documentNumber })

    if(name && email || documentNumber){
      return await this.checkIfCustomerExists(customer)
    }
    else{
      return undefined
    }
  }

  private validateParams(params: GetCustomerDTO) {
    if (params.name && !params.email) throw new MissingEmailError()

    if (params.email && !params.name) throw new MissingNameError()
  }

  private async checkIfCustomerExists(customer: Customer) {
    var custumerReturn: Customer | null = null
    if (customer.documentNumber) custumerReturn = await this.customerRepository.getByDocumentNumber(customer.documentNumber)

    if (customer.email) custumerReturn = await this.customerRepository.getByEmail(customer.email)

    if(custumerReturn === null) throw new CustomerNotExistsError()

    return custumerReturn
  }
}