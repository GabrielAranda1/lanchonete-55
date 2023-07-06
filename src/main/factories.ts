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
import { OrderRepository } from '../infra/repositories/Order'
import { ICreateOrderUseCase } from '../domain/usecases/CreateOrder/ICreateOrder'
import { CreateOrderUseCase } from '../domain/usecases/CreateOrder/CreateOrder'
import { IGetOrderByIdUseCase } from '../domain/usecases/GetOrderById/IGetOrderById'
import { GetOrderByIdUseCase } from '../domain/usecases/GetOrderById/GetOrderById'
import { IListOrdersUseCase } from '../domain/usecases/ListOrders/IListOrders'
import { ListOrdersUseCase } from '../domain/usecases/ListOrders/ListOrders'
import { UpdateOrderStatusUseCase } from '../domain/usecases/UpdateOrderStatus/UpdateOrderStatus'
import { IUpdateOrderStatusUseCase } from '../domain/usecases/UpdateOrderStatus/IUpdateOrderStatus'


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
