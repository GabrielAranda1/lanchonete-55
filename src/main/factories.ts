import { container } from 'tsyringe'
import { CreateCustomerUseCase } from '../domain/usecases/CreateCustomer/CreateCustomer'
import { ICreateCustomerUseCase } from '../domain/usecases/CreateCustomer/ICreateCustomer'
import { CreateCustomerController } from '../presentation/controllers/CreateCustomerController'
import { CustomerRepository } from '../infra/repositories/Customer'
import { KnexConnection } from '../infra/database/knex'


container.registerInstance('MySqlDatabase', new KnexConnection().getConnection())

container.registerSingleton('ICustomerRepository', CustomerRepository)

container.register<ICreateCustomerUseCase>('ICreateCustomerUseCase', CreateCustomerUseCase)

container.registerSingleton(CreateCustomerController)