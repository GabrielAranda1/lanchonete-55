export const HttpMessages = {
  invalid_params: 'invalid_params',
  unauthorized: 'unauthorized',
  has_no_permission: 'has_no_permission',
  not_found: 'not_found',
  unprocessable_entity: 'unprocessable_entity',
  unexpected_error: 'unexpected_error',
  service_unavailable: 'service_unavailable'
}

type HttpErrorTypes =
  'UNEXPECTED_ERROR' |
  'INVALID_PARAMS' |
  'UNAUTHORIZED' |
  'HAS_NO_PERMISSION' |
  'NOT_FOUND'

export type HttpErrorProperties = { code: number, message: any }
type HttpErrors = Record<HttpErrorTypes, HttpErrorProperties>

export const httpErrors: HttpErrors = {
  UNEXPECTED_ERROR: {
    code: 500,
    message: HttpMessages.unexpected_error
  },

  INVALID_PARAMS: {
    code: 400,
    message: HttpMessages.invalid_params
  },

  UNAUTHORIZED: {
    code: 401,
    message: HttpMessages.unauthorized
  },

  HAS_NO_PERMISSION: {
    code: 403,
    message: HttpMessages.has_no_permission
  },

  NOT_FOUND: {
    code: 404,
    message: HttpMessages.not_found
  },
}
