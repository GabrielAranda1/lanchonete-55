import { inject, injectable } from 'tsyringe'
import { IController } from '../interfaces/IController'
import { IHttpRequest } from '../interfaces/IHttpRequest'
import { ok } from '../adapters/HttpResponseAdapter'
import { IGetOrderByIdUseCase } from '../../domain/usecases/GetOrderById/IGetOrderById'

@injectable()
export class GetOrderByIdController implements IController {
  constructor(
    @inject('IGetOrderByIdUseCase')
    readonly getOrderByIdUseCase: IGetOrderByIdUseCase
  ) { }
  async handle(httpRequest: IHttpRequest): Promise<any> {
    const { orderId } = httpRequest.params

    const result = await this.getOrderByIdUseCase.get({ orderId })

    return ok(result)
  }
} 