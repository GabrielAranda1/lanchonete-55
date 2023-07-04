import { Router } from 'express'
import { customerRoutes } from './CustomerRoutes'
import { productRoutes } from './ProductRoutes'

const routes = Router()

routes.use(customerRoutes)
routes.use(productRoutes)

export { routes }