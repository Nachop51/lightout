import { methods } from './constants'

declare global {
  export interface Window {
    electronAPI: {
      setTitle: (title: string) => void
    }
  }
}

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
  timeTaken: number
  headers: Record<string, string>
  cookies: Record<string, string>
  body: string
}
