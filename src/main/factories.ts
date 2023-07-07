import { container } from 'tsyringe'
import { CreateCustomerUseCase, CreateOrderUseCase, CreateProductUseCase, GetOrderByIdUseCase, ICreateCustomerUseCase, ICreateOrderUseCase, ICreateProductUseCase, IGetOrderByIdUseCase, IListOrdersUseCase, IListProductsUseCase, IUpdateOrderStatusUseCase, IUpdateProductUseCase, ListOrdersUseCase, ListProductsUseCase, UpdateOrderStatusUseCase, UpdateProductUseCase } from '../domain/usecases'
import { KnexConnection } from '../infra/database/knex'
import { CustomerRepository, OrderRepository, ProductRepository } from '../infra/repositories'

container.registerInstance('MySqlDatabase', new KnexConnection().getConnection())

container.registerSingleton('ICustomerRepository', CustomerRepository)
container.registerSingleton('IProductRepository', ProductRepository)
container.registerSingleton('IOrderRepository', OrderRepository)

container.register<ICreateCustomerUseCase>('ICreateCustomerUseCase', CreateCustomerUseCase)
container.register<ICreateProductUseCase>('ICreateProductUseCase', CreateProductUseCase)
container.register<IListProductsUseCase>('IListProductsUseCase', ListProductsUseCase)
container.register<ICreateOrderUseCase>('ICreateOrderUseCase', CreateOrderUseCase)
container.register<IGetOrderByIdUseCase>('IGetOrderByIdUseCase', GetOrderByIdUseCase)
container.register<IListOrdersUseCase>('IListOrdersUseCase', ListOrdersUseCase)
container.register<IUpdateOrderStatusUseCase>('IUpdateOrderStatusUseCase', UpdateOrderStatusUseCase)
container.register<IUpdateProductUseCase>('IUpdateProductUseCase', UpdateProductUseCase)
