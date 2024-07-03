import React from 'react'

interface TableProps {
  children: React.ReactNode
}

const TableHeader: React.FC<TableProps> = ({ children }) => {
  return (
    <thead>
      {children}
    </thead>
  )
}

export default TableHeader
