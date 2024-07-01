import { useRequests } from '../../stores/requests'
import ViewResponse from './ViewResponse'
import Sender from './Sender'
import { useHistory } from '../../stores/history'

const Requests = () => {
  const currentReq = useRequests(s => s.selectedRequest)
  const responses = useHistory(s => s.responses)
  const addRequest = useRequests(s => s.addRequest)
  const handleAddRequest = () => addRequest()

  if (currentReq == null) {
    return (
      <div className='[grid-area:main] grid place-items-center'>
        <div className='text-center'>
          <h2 className='text-3xl mb-4'>No request selected</h2>
          <button className='px-4 py-2 border-[var(--border)] border rounded-lg' onClick={handleAddRequest}>
            Create new Request
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className='[grid-area:main] requester-layout p-2'>
      <Sender />
      <ViewResponse response={responses[currentReq.id]} />
    </div>
  )
}

export default Requests
