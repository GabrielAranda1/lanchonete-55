import { Payment, Status } from "../../entities/Payment"

export interface IPaymentRepository {
    create: (payment: Payment) => Promise<boolean>
    getByOrderId: (orderId: string) => Promise<Payment | null>
    getById: (id: string) => Promise<Payment | null>
    updateStatus: (id: string, status: Status) => Promise<boolean>
}