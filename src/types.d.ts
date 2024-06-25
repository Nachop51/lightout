import { methods } from './constants'

export type Method = typeof methods[number];

export interface LightoutRequest {
  id: string
  name?: string
  host: string
  method: Method
  params?: Record<string, string>
  headers?: Record<string, string>
  cookies?: Record<string, string>
  body?: string
}

export interface LightoutResponse {
  status: number
  statusText: string
  headers: Record<string, string>
  body: string
  cookies: Record<string, string>
}
