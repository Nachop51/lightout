import type { Method } from '../../types.d'

const MethodTag = ({ method }: {method: Method }) => {
  type Output = {
    text: string
    className: string
  }

  const configuration: Record<Method, Output> = {
    GET: { text: 'GET', className: 'bg-green-400/20 text-green-300' },
    POST: { text: 'POST', className: 'bg-blue-400/20 text-blue-300' },
    PUT: { text: 'PUT', className: 'bg-yellow-400/20 text-yellow-300' },
    DELETE: { text: 'DEL', className: 'bg-red-400/20 text-red-300' },
    PATCH: { text: 'PATCH', className: 'bg-purple-400/20 text-purple-300' },
    OPTIONS: { text: 'OPT', className: 'bg-pink-400/20 text-pink-300' },
    HEAD: { text: 'HEAD', className: 'bg-gray-400/20 text-gray-300' },
    CONNECT: { text: 'CONNECT', className: 'bg-gray-400/20 text-gray-300' },
    TRACE: { text: 'TRACE', className: 'bg-gray-400/20 text-gray' }
  }

  const conf = configuration[method]

  return (
    <span className={`p-1 text-xs text-center rounded uppercase ${conf.className}`}>
      {conf.text}
    </span>
  )
}

export default MethodTag
