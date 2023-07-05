import { Router } from 'express'
import { container } from 'tsyringe'
import { adaptRoute } from '../../adapters/ExpressRouteAdapter'
import { CreateOrderController } from '../../controllers/CreateOrderController'
import { GetOrderByIdController } from '../../controllers/GetOrderByIdController'

const orderRoutes = Router()

orderRoutes.post('/orders', adaptRoute(container.resolve(CreateOrderController)))
orderRoutes.get('/orders/:orderId', adaptRoute(container.resolve(GetOrderByIdController)))

export { orderRoutes }