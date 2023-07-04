import { Router } from 'express'
import { container } from 'tsyringe'
import { adaptRoute } from '../../adapters/ExpressRouteAdapter'
import { CreateProductController } from '../../controllers/CreateProductController'
import { ListProductsController } from '../../controllers/ListProductsController'

const productRoutes = Router()

productRoutes.post('/products', adaptRoute(container.resolve(CreateProductController)))
productRoutes.get('/products', adaptRoute(container.resolve(ListProductsController)))

export { productRoutes }