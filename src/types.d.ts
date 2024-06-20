export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS' | 'HEAD' | 'CONNECT' | 'TRACE'

export interface LightoutRequest {
  id: string
  name?: string
  host: string
  method: Method
  response?: Response
  request?: Request
}
