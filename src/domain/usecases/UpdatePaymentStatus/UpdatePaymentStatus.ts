import { inject, injectable } from "tsyringe";
import { NotFoundError } from "../../errors/NotFoundError";
import { UpdatePaymentStatusDTO } from "./UpdatePaymentStatusDTO";
import { InvalidParamError } from "../../errors/InvalidParam";
import { IPaymentRepository } from "../../ports/repositories/Payment";
import { IUpdatePaymentStatusUseCase } from "./IUpdatePaymentStatus";
import { Payment, Status } from "../../entities/Payment";

@injectable()
export class UpdatePaymentStatusUseCase implements IUpdatePaymentStatusUseCase {
    constructor(
        @inject('IPaymentRepository')
        private readonly paymentRepository: IPaymentRepository
    ) { }

    async update(params: UpdatePaymentStatusDTO): Promise<Payment> {
        const {id, status} = params

        const isValidStatus = Object.values(Status).includes(status as Status)

        if (!isValidStatus) throw new InvalidParamError('Invalid param: status')

        const isUpdated = await this.paymentRepository.updateStatus(id, status as Status)

        if (!isUpdated) throw new NotFoundError('Payment not found')

        const payment = await this.paymentRepository.getById(id);

        if (!payment) throw new NotFoundError('Payment not found')

        return payment;
    }
}