import { Router } from 'express'
import { container } from 'tsyringe'
import { adaptRoute } from '../../adapters/ExpressRouteAdapter'
import { CreateOrderController } from '../../controllers/CreateOrderController'
import { GetOrderByIdController } from '../../controllers/GetOrderByIdController'
import { ListOrdersController } from '../../controllers/ListOrdersController'

const orderRoutes = Router()

orderRoutes.post('/orders', adaptRoute(container.resolve(CreateOrderController)))
orderRoutes.get('/orders/:orderId', adaptRoute(container.resolve(GetOrderByIdController)))
orderRoutes.get('/orders/', adaptRoute(container.resolve(ListOrdersController)))

export { orderRoutes }