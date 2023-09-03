import { Router } from 'express'
import { container } from 'tsyringe'
import { adaptRoute } from '../../adapters/ExpressRouteAdapter'
import { GetPaymentByOrderIdController } from '../../controllers/GetPaymentByOrderIdController'
import { UpdatePaymentStatusController } from '../../controllers/UpdatePaymentStatusController'

const paymentRoutes = Router()

paymentRoutes.get('/payments/:orderId', adaptRoute(container.resolve(GetPaymentByOrderIdController)))
paymentRoutes.patch('/payments/:id', adaptRoute(container.resolve(UpdatePaymentStatusController)))

export { paymentRoutes }