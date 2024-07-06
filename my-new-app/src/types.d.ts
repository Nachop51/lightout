import { methods } from './constants'

export type Method = typeof methods[number];

interface CookieAttributes {
  name: string;
  value: string;
  expires?: string;
  path?: string;
  domain?: string;
  secure?: boolean;
  httponly?: boolean;
  samesite?: string;
  [key: string]: string | boolean | undefined;
}

export interface LightoutRequest {
  id: string
  name?: string
  host: string
  method: Method
  params?: Record<string, string>
  headers?: Record<string, string>
  body?: string
}

export interface LightoutResponse {
  status: number
  statusText: string
  timeTaken: number
  headers: Record<string, string>
  cookies: CookieAttributes[]
  body: string
}

declare global {
  export interface Window {
    electronAPI: {
      makeRequest: (request: LightoutRequest) => Promise<LightoutResponse>
    }
  }
}
