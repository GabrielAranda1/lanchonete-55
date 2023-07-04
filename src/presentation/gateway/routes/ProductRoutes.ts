import { Router } from 'express'
import { container } from 'tsyringe'
import { adaptRoute } from '../../adapters/ExpressRouteAdapter'
import { CreateProductController } from '../../controllers/CreateProductController'

const productRoutes = Router()

productRoutes.post('/products', adaptRoute(container.resolve(CreateProductController)))

export { productRoutes }