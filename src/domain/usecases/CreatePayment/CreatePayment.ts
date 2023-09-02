import { Payment, Status } from "../../entities/Payment";
import { IPaymentRepository } from "../../ports/repositories/Payment";
import { CreatePaymentDTO } from "./CreateOrderDTO";
import { ICreatePaymentUseCase } from "./ICreatePayment";
import { inject, injectable } from "tsyringe";

@injectable()
export class CreatePaymentUseCase implements ICreatePaymentUseCase {
    constructor(
        @inject('IPaymentRepository')
        private readonly paymentRepository: IPaymentRepository,
    ) { }

    async create(params: CreatePaymentDTO):Promise<Payment>{
        const payment = new Payment({
            orderId: params.orderId,
            status: Status.RECEIVED
        })

        const isCreated = await this.paymentRepository.create(payment);

        if (!isCreated) throw new Error('Payment not created')

        const createdPayment = await this.paymentRepository.getById(payment.id)

        return createdPayment!;
    }
}