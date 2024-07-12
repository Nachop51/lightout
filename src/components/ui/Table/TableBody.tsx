import { cn } from '../../../utils'
import React from 'react'

interface TableProps {
  children: React.ReactNode
  className?: string
}

const TableBody: React.FC<TableProps> = ({ children, className }) => {
  return (
    <tbody className={cn('[&>tr:last-child]:border-0', className)}>
      {children}
    </tbody>
  )
}

export default TableBody
