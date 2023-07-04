import { container } from 'tsyringe'
import { CreateCustomerUseCase } from '../domain/usecases/CreateCustomer/CreateCustomer'
import { ICreateCustomerUseCase } from '../domain/usecases/CreateCustomer/ICreateCustomer'
import { CustomerRepository } from '../infra/repositories/Customer'
import { KnexConnection } from '../infra/database/knex'
import { ProductRepository } from '../infra/repositories/Product'
import { ICreateProductUseCase } from '../domain/usecases/CreateProduct/ICreateProduct'
import { CreateProductUseCase } from '../domain/usecases/CreateProduct/CreateProduct'
import { IListProductsUseCase } from '../domain/usecases/ListProducts/IListProducts'
import { ListProductsUseCase } from '../domain/usecases/ListProducts/ListProducts'


container.registerInstance('MySqlDatabase', new KnexConnection().getConnection())

container.registerSingleton('ICustomerRepository', CustomerRepository)
container.registerSingleton('IProductRepository', ProductRepository)

container.register<ICreateCustomerUseCase>('ICreateCustomerUseCase', CreateCustomerUseCase)
container.register<ICreateProductUseCase>('ICreateProductUseCase', CreateProductUseCase)
container.register<IListProductsUseCase>('IListProductsUseCase', ListProductsUseCase)
