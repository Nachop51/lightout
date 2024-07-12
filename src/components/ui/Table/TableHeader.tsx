import { cn } from '../../../utils'
import React from 'react'

interface TableProps {
  children: React.ReactNode
  className?: string
}

const TableHeader: React.FC<TableProps> = ({ children, className }) => {
  return (
    <thead className={cn('[&>tr]:border-b', className)}>
      {children}
    </thead>
  )
}

export default TableHeader
