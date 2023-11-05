import { inject, injectable } from 'tsyringe'
import { IController } from '../interfaces/IController'
import { IHttpRequest } from '../interfaces/IHttpRequest'
import { IAuthenticateCustomerUseCase } from '../../domain/usecases/AuthenticateCustomer/IAuthenticateCustomer'

@injectable()
export class AuthenticateCustomerController implements IController {
    constructor(
        @inject('IAuthenticateCustomer')
        readonly authenticateCustomerUseCase: IAuthenticateCustomerUseCase
    ) { }
    async handle(httpRequest: IHttpRequest): Promise<any> {
        const { name, email, documentNumber } = httpRequest.body

        const result = await this.authenticateCustomerUseCase.get({ name, email, documentNumber })

        console.log('oi')
    }
} 