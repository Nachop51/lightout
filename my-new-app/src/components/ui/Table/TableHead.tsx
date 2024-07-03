import React from 'react'

interface TableProps {
  children: React.ReactNode
}

const TableHead: React.FC<TableProps> = ({ children }) => {
  return (
    <th>{children}</th>
  )
}

export default TableHead
