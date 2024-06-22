import { useRequests } from '../../stores/requests'
import Sender from './Sender'

const Requests = () => {
  const currentReq = useRequests(s => s.selectedRequest)
  const addRequest = useRequests(s => s.addRequest)

  if (currentReq == null) {
    return (
      <div className='[grid-area:main] grid place-items-center'>
        <div className='text-center'>
          <h2 className='text-3xl mb-4'>No request selected</h2>
          <button className='px-4 py-2 border-white border rounded-lg' onClick={() => addRequest()}>
            Create new Request
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className='[grid-area:main]'>
      <div>
        <Sender />
        <h2>Request:</h2>
        <pre>{JSON.stringify(currentReq, null, 2)}</pre>
        <span>some things below</span>
      </div>
    </div>
  )
}

export default Requests
