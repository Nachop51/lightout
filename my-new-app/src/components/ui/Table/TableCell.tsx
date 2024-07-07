import { cn } from '../../../utils'
import React from 'react'

interface TableProps {
  children: React.ReactNode
  className?: string
}

const TableCell: React.FC<TableProps> = ({ children, className }) => {
  return (
    <td className={cn('p-2 align-middle font-normal', className)}>
      {children}
    </td>
  )
}

export default TableCell
