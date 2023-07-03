import { Router } from 'express'
import { customerRoutes } from './CustomerRoutes'

const routes = Router()

routes.use(customerRoutes)

export { routes }