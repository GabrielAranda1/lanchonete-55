import { Router } from 'express'
import { customerRoutes } from './CustomerRoutes'
import { orderRoutes } from './OrderRoutes'
import { productRoutes } from './ProductRoutes'
import { utilRoutes } from './UtilsRoutes'

const routes = Router()

routes.use(customerRoutes)
routes.use(productRoutes)
routes.use(orderRoutes)
routes.use(utilRoutes)

export { routes }