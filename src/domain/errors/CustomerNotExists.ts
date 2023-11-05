import { BusinessError, BusinessErrorType } from "./BusinessError"

export class CustomerNotExistsError extends BusinessError {
    constructor(message?: string) {
        super(BusinessErrorType.AlreadyExists)

        this.name = 'CustomerNotExistsError'
        this.message = message ?? 'Customer not exists.'
    }
}