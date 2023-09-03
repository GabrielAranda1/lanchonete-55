import { inject, injectable } from "tsyringe";
import { NotFoundError } from "../../errors/NotFoundError";
import { UpdatePaymentStatusDTO } from "./UpdatePaymentStatusDTO";
import { InvalidParamError } from "../../errors/InvalidParam";
import { IPaymentRepository } from "../../ports/repositories/Payment";
import { IUpdatePaymentStatusUseCase } from "./IUpdatePaymentStatus";
import { Payment, Status } from "../../entities/Payment";
import * as Order from "../../entities/Order";
import { IOrderRepository } from "../../ports/repositories/Order";

@injectable()
export class UpdatePaymentStatusUseCase implements IUpdatePaymentStatusUseCase {
    constructor(
        @inject('IPaymentRepository')
        private readonly paymentRepository: IPaymentRepository,
        @inject('IOrderRepository')
        private readonly orderRepository: IOrderRepository
    ) { }

    async update(params: UpdatePaymentStatusDTO): Promise<Payment> {
        const {id, status} = params

        const isValidStatus = [Status.PAID, Status.NOTPAID].includes(status)

        if (!isValidStatus) throw new InvalidParamError('Invalid param: status')

        const isUpdated = await this.paymentRepository.updateStatus(id, status as Status)

        if (!isUpdated) throw new NotFoundError('Payment not found')

        const payment = await this.paymentRepository.getById(id);

        if (!payment) throw new NotFoundError('Payment not found')

        await this.updateOrderStatus(status, payment.orderId)

        return payment;
    }

    private async updateOrderStatus(status: Status, orderId: string){
        const order = this.orderRepository.getById(orderId)

        if(!order) throw new NotFoundError('Order Payment not found')

        if(status === Status.PAID){
            this.orderRepository.updateStatus(orderId, Order.Status.SUCCESSFULPAYMENT)
        }
        else if (status === Status.NOTPAID){
            this.orderRepository.updateStatus(orderId, Order.Status.PAYMENTPROBLEM)
        }
    }
}