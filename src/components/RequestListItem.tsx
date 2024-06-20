import React from 'react'
import { CrossIcon } from '../assets/Icons'
import { LightoutRequest } from '../types'
import MethodTag from './ui/MethodTag'
import { useRequests } from '../stores/requests'

interface RequestListItemProps {
  request: LightoutRequest
}

const RequestListItem = ({ request }: RequestListItemProps) => {
  const selectRequest = useRequests((s) => s.selectRequest)
  const deleteRequest = useRequests((s) => s.deleteRequest)

  const handleClick = () => {
    selectRequest(request)
  }
  const handleDeleteRequest = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()

    deleteRequest(request)
  }

  return (
    <div
      className='group p-2 grid items-center gap-2 rounded cursor-pointer text-sm hover:bg-gray-200/10 overflow-hidden transition-colors' style={{
        gridTemplateColumns: '50px auto 1.5rem'
      }} onClick={handleClick}
    >
      <MethodTag method={request.method} />
      <span className='overflow-hidden whitespace-nowrap text-ellipsis'>
        {request.name ?? request.host}
      </span>
      <button className='group-hover:visible  border-white p-1 rounded hover:text-red-500 transition-colors invisible' onClick={handleDeleteRequest}>
        <CrossIcon />
      </button>
    </div>
  )
}

export default RequestListItem
