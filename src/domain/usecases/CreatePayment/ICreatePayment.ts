import { Payment } from "../../entities/Payment";
import { CreatePaymentDTO } from "./CreateOrderDTO";

export interface ICreatePaymentUseCase {
    create: (params: CreatePaymentDTO) => Promise<Payment>
}