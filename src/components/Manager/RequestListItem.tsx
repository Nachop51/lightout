import React from 'react'
import { CrossIcon } from '../../assets/Icons'
import { Method } from '../../types.d'
import MethodTag from '../ui/MethodTag'
import { useRequests } from '../../stores/requests'

interface RequestListItemProps {
  id: string
  host: string
  method: Method
  name?: string
}

const RequestListItem = ({ id, host, name, method }: RequestListItemProps) => {
  const selectRequest = useRequests((s) => s.selectRequest)
  const deleteRequest = useRequests((s) => s.deleteRequest)

  const handleClick = () => {
    selectRequest(id)
  }

  const handleDeleteRequest = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()

    deleteRequest(id)
  }

  return (
    <div
      className='group p-2 grid items-center rounded cursor-pointer text-sm hover:bg-gray-200/10 transition-colors' style={{
        gridTemplateColumns: '50px auto 1.25rem'
      }} onClick={handleClick}
    >
      <MethodTag method={method} />
      <span className='pl-2 overflow-hidden whitespace-nowrap text-ellipsis'>
        {name || host || 'New Request'}
      </span>
      <button className='invisible group-hover:visible hover:text-red-500 transition-colors p-1' onClick={handleDeleteRequest}>
        <CrossIcon />
      </button>
    </div>
  )
}

export default RequestListItem
