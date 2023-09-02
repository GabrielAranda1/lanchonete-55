import { Router } from 'express'
import { container } from 'tsyringe'
import { adaptRoute } from '../../adapters/ExpressRouteAdapter'
import { GetPaymentByOrderIdController } from '../../controllers/GetPaymentByOrderIdController'

const paymentRoutes = Router()

paymentRoutes.get('/payments/:orderId', adaptRoute(container.resolve(GetPaymentByOrderIdController)))

export { paymentRoutes }