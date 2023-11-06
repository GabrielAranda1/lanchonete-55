import { Router } from 'express'
import { container } from 'tsyringe'
import { adaptRoute } from '../../adapters/ExpressRouteAdapter'
import { GetCustomerController } from '../../controllers/GetCustomerController'
import { CreateCustomerController } from '../../controllers/CreateCustomerController'

const customerRoutes = Router()

customerRoutes.post('/customers', adaptRoute(container.resolve(CreateCustomerController)))
customerRoutes.get('/customers', adaptRoute(container.resolve(GetCustomerController)))

export { customerRoutes }