import { PlusIcon } from '../../assets/Icons'
import { useRequests } from '../../stores/requests'
import Input from '../ui/Input'
import RequestList from './RequestList'

const Manager = () => {
  const requests = useRequests((s) => s.requests)
  const addRequest = useRequests((s) => s.addRequest)
  const handleNewRequest = () => {
    addRequest()
  }

  return (
    <div className='[grid-area:nav] border-r border-[var(--border)] flex flex-col max-h-[calc(100vh-41px) px-2 pt-2'>
      <div className='flex items-center p-2 pr-0 gap-1.5'>
        <Input placeholder='Search' />
        <button className='hover:bg-gray-200/10 transition-colors' onClick={handleNewRequest}>
          <PlusIcon className='text-[#6c6c6c]' />
        </button>
      </div>
      <RequestList requests={requests} />
    </div>
  )
}

export default Manager
