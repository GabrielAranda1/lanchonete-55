export class MissingNameError extends Error {
  constructor(message?: string) {
    super()

    this.name = 'MissingNameError'
    this.message = message ?? 'Name is required'
  }
}