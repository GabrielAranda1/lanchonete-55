import { injectable } from 'tsyringe'
import { IController } from '../interfaces/IController'
import { IHttpRequest } from '../interfaces/IHttpRequest'
import { ok } from '../adapters/HttpResponseAdapter'

@injectable()
export class CreateCustomerController implements IController {
  async handle(httpRequest: IHttpRequest): Promise<any> {
    return ok(undefined, 'Customer created')
  }
}