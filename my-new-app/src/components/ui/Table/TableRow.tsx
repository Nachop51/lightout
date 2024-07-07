import { cn } from '../../../utils'
import React from 'react'

interface TableProps {
  children: React.ReactNode
  className?: string
}

const TableRow: React.FC<TableProps> = ({ children, className }) => {
  return (
    <tr className={cn('border-b transition-colors hover:bg-zinc-500/20', className)}>{children}</tr>
  )
}

export default TableRow
