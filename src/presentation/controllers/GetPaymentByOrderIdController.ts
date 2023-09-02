import { inject, injectable } from 'tsyringe'
import { IController } from '../interfaces/IController'
import { IHttpRequest } from '../interfaces/IHttpRequest'
import { ok } from '../adapters/HttpResponseAdapter'
import { IGetPaymentByOrderIdUseCase } from '../../domain/usecases/GetPaymentByOrderId/IGetPaymentByOrderId'

@injectable()
export class GetPaymentByOrderIdController implements IController {
    constructor(
        @inject('IGetPaymentByOrderIdUseCase')
        readonly getPaymentByOrderIdUseCase: IGetPaymentByOrderIdUseCase
    ) { }
    async handle(httpRequest: IHttpRequest): Promise<any> {
        const { orderId } = httpRequest.params

        const result = await this.getPaymentByOrderIdUseCase.get({ orderId })

        return ok(result)
    }
} 