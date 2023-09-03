import { Payment } from "../../entities/Payment";
import { UpdatePaymentStatusDTO } from "./UpdatePaymentStatusDTO";

export interface IUpdatePaymentStatusUseCase {
    update: (params: UpdatePaymentStatusDTO) => Promise<Payment>
}