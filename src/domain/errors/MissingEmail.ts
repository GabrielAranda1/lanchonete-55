export class MissingEmailError extends Error {
  constructor(message?: string) {
    super()

    this.name = 'MissingEmailError'
    this.message = message ?? 'Email is required'
  }
}