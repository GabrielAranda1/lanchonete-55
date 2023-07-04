export class CustomerAlreadyExistsError extends Error {
  constructor(message?: string) {
    super()

    this.name = 'CustomerAlreadyExistsError'
    this.message = message ?? 'Customer already exists.'
  }
}