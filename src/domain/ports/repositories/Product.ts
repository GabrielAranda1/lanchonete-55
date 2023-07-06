import { Product } from "../../entities/Product";

export interface IProductRepository {
  create: (product: Product) => Promise<boolean>
  list: (filters: Partial<Product>) => Promise<Product[]>
  getById: (id: string) => Promise<Product | null>
  update: (product: Partial<Product>) => Promise<boolean>
}