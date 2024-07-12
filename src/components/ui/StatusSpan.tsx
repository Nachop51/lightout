import { getStatusMeaning } from '../../utils'

interface StatusSpanProps {
  status: number
}

const StatusSpan = ({ status }: StatusSpanProps) => {
  let className = ''
  const text = getStatusMeaning(status)

  if (status >= 400) {
    className = 'text-red-600'
  } else if (status >= 300) {
    className = 'text-yellow-600'
  } else {
    className = 'text-green-300'
  }

  return (
    <span className={className}>{status} {text}</span>
  )
}

export default StatusSpan
