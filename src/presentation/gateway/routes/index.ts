import { Router } from 'express'
import { customerRoutes } from './CustomerRoutes'
import { orderRoutes } from './OrderRoutes'
import { productRoutes } from './ProductRoutes'

const routes = Router()

routes.use(customerRoutes)
routes.use(productRoutes)
routes.use(orderRoutes)

export { routes }