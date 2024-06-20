import { useRequests } from '../stores/requests'
import { PlusIcon } from '../assets/Icons'
import RequestListItem from './RequestListItem'

const RequestList = () => {
  const requests = useRequests((s) => s.requests)
  const addRequest = useRequests((s) => s.addRequest)

  const handleNewRequest = () => {
    addRequest()
  }

  return (
    <div className='[grid-area:nav] border-r border-white flex flex-col'>
      <button className='py-4 px-4 border-b hover:bg-gray-200/10 transition-colors text-lg font-medium text-white flex items-center justify-center gap-1' onClick={handleNewRequest}>
        Create new Request
        <PlusIcon />
      </button>
      <div className='flex flex-col p-2'>
        {
          requests.map((request) => (
            <RequestListItem key={request.id} request={request} />
          ))
        }
      </div>
    </div>
  )
}

export default RequestList
