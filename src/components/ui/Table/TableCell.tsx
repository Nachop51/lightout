import { cn } from '../../../utils'
import React, { useState } from 'react'

interface TableProps {
  children: React.ReactNode
  className?: string
}

const TableCell: React.FC<TableProps> = ({ children, className }) => {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive((prev) => !prev)
  }

  const handleInputClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation()
  }

  return (
    <td className={cn('p-2 align-middle font-normal', className)} onClick={handleClick}>
      {
        isActive === false
          ? <span className='border border-transparent px-1 py-1'>{children}</span>
          : (
            <input type='text' value={children as string} onChange={(e) => e.target.value} className={cn('px-1 py-0.5 leading-none w-full border border-[var(--border)] outline-none', '')} readOnly onClick={handleInputClick} />
            )
      }
    </td>
  )
}

export default TableCell
