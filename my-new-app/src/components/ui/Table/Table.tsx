import { cn } from '../../../utils'
import React from 'react'

interface TableProps {
  children: React.ReactNode
  className?: string
}

const Table: React.FC<TableProps> = ({ children, className }) => {
  return (
    <table className={cn('w-full border-collapse border-spacing-0 text-sm indent-0', className)}>
      {children}
    </table>
  )
}

export default Table
