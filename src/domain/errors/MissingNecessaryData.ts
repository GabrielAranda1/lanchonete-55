export class MissingNecessaryDataError extends Error {
  constructor(message?: string) {
    super()

    this.name = 'MissingNecessaryDataError'
    this.message = message ?? 'Missing necessary data'
  }
}