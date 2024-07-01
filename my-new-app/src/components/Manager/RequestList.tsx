import RequestListItem from './RequestListItem'
import type { LightoutRequest } from '../../types'

interface RequestListProps {
  requests: Record<string, LightoutRequest>
}

const RequestList = ({ requests }: RequestListProps) => {
  return (
    <div className='flex flex-col overflow-auto flex-1'>
      {
        Object.entries(requests).map(([id, request]) => (
          <RequestListItem key={id} id={id} host={request.host} method={request.method} name={request.name} />
        ))
      }
    </div>
  )
}

export default RequestList
