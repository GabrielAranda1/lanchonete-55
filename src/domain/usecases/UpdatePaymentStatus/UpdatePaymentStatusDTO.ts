import { Status } from "../../entities/Payment"

export interface UpdatePaymentStatusDTO {
    id: string
    status: Status
}