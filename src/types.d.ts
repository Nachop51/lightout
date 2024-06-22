import { methods } from './constants'

export type Method = typeof methods[number];

export interface LightoutRequest {
  id: string
  name?: string
  host: string
  method: Method
  response?: Response
  request?: Request
}
