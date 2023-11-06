import { Customer } from "../../entities/Customer";
import { GetCustomerDTO } from "./GetCustomerDTO";

export interface IGetCustomerUseCase {
  get: (params: GetCustomerDTO) => Promise<Customer | undefined>
}