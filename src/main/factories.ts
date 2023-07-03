import { container } from 'tsyringe'
import { CreateCustomerController } from '../presentation/controllers/CreateCustomerController'
import { CreateCustomerUseCase } from '../domain/usecases/CreateCustomer/CreateCustomer'
import { CustomerRepository } from '../infra/repositories/Customer'
import { KnexConnection } from '../infra/database/knex'

container.registerSingleton('CreateCustomerController', CreateCustomerController)

container.registerSingleton('CreateCustomerUseCase', CreateCustomerUseCase)

container.registerSingleton('ICustomerRepository', CustomerRepository)

container.registerInstance('MySqlDatabase', new KnexConnection().getConnection())