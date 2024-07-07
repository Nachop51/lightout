import { cn } from '../../../utils'
import React from 'react'

interface TableProps {
  children: React.ReactNode
  className?: string
}

const TableHead: React.FC<TableProps> = ({ children, className }) => {
  return (
    <th className={cn('h-12 px-4 text-left align-middle font-semibold text-zinc-500', className)}>{children}</th>
  )
}

export default TableHead
