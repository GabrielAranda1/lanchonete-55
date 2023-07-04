import { Category, Product } from "../../entities/Product";

export interface IProductRepository {
  create: (category: Product) => Promise<boolean>
  list: (filters: Partial<Product>) => Promise<Product[]>
  getById: (id: string) => Promise<Product | null>
}