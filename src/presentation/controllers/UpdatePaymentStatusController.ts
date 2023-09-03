import { inject, injectable } from 'tsyringe'
import { IController } from '../interfaces/IController'
import { IHttpRequest } from '../interfaces/IHttpRequest'
import { ok } from '../adapters/HttpResponseAdapter'
import { IHttpResponse } from '../interfaces/IHttpResponse'
import { UpdatePaymentStatusUseCase } from '../../domain/usecases/UpdatePaymentStatus/UpdatePaymentStatus'

@injectable()
export class UpdatePaymentStatusController implements IController {
    constructor(
        @inject('IUpdatePaymentStatusUseCase')
        readonly updatePaymentStatusUseCase: UpdatePaymentStatusUseCase
    ) { }
    async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
        const { id } = httpRequest.params
        const { status } = httpRequest.body

        const result = await this.updatePaymentStatusUseCase.update({ status, id })

        return ok(result)
    }
} 