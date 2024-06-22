import { Method } from './types'

export const methods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS', 'HEAD', 'CONNECT', 'TRACE'] as const

type MethodColor = {
  short: string
  textColor: string
  bgColor: string
}

export const methodsColors: Record<Method, MethodColor> = {
  GET: { short: 'GET', textColor: 'text-green-300', bgColor: 'bg-green-400/20' },
  POST: { short: 'POST', textColor: 'text-blue-300', bgColor: 'bg-blue-400/20' },
  PUT: { short: 'PUT', textColor: 'text-yellow-300', bgColor: 'bg-yellow-400/20' },
  DELETE: { short: 'DEL', textColor: 'text-red-300', bgColor: 'bg-red-400/20' },
  PATCH: { short: 'PATCH', textColor: 'text-purple-300', bgColor: 'bg-purple-400/20' },
  OPTIONS: { short: 'OPT', textColor: 'text-pink-300', bgColor: 'bg-pink-400/20' },
  HEAD: { short: 'HEAD', textColor: 'text-gray-300', bgColor: 'bg-gray-400/20' },
  CONNECT: { short: 'CON', textColor: 'text-gray-300', bgColor: 'bg-gray-400/20' },
  TRACE: { short: 'TRACE', textColor: 'text-gray-300', bgColor: 'bg-gray-400/20' }
}
