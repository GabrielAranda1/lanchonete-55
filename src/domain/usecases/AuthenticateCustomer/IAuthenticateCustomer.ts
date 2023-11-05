import { Customer } from "../../entities/Customer";
import { AuthenticateCustomerDTO } from "./AuthenticateCustomerDTO";

export interface IAuthenticateCustomerUseCase {
  get: (params: AuthenticateCustomerDTO) => Promise<Customer | null>
}