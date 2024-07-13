import { cn } from '../../../utils'
import React from 'react'

interface TableProps {
  children: React.ReactNode
  className?: string
  tableFixed?: boolean
}

const Table: React.FC<TableProps> = ({ children, className, tableFixed: fixed }) => {
  return (
    <table className={cn('w-full border-collapse border-spacing-0 text-sm indent-0', { 'table-fixed': fixed }, className)}>
      {children}
    </table>
  )
}

export default Table
