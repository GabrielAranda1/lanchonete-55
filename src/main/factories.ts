import { container } from 'tsyringe'
import { CreateClientController } from '../presentation/controllers/CreateCustomerController'

container.registerSingleton('CreateClientController', CreateClientController)