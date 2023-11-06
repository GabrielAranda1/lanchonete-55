import { inject, injectable } from 'tsyringe'
import { IController } from '../interfaces/IController'
import { IHttpRequest } from '../interfaces/IHttpRequest'
import { IGetCustomerUseCase } from '../../domain/usecases/GetCustomer/IGetCustomer'
import { ok } from '../adapters/HttpResponseAdapter'

@injectable()
export class GetCustomerController implements IController {
  constructor(
    @inject('IGetCustomerUseCase')
    readonly getCustomerUseCase: IGetCustomerUseCase
  ) { }
  async handle(httpRequest: IHttpRequest): Promise<any> {
    const { name, email, documentNumber } = httpRequest.query

    const result = await this.getCustomerUseCase.get({ name, email, documentNumber })

    return ok(result)
  }
}