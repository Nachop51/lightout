import React from 'react'

interface TableProps {
  children: React.ReactNode
}

const TableRow: React.FC<TableProps> = ({ children }) => {
  return (
    <tr>
      {children}
    </tr>
  )
}

export default TableRow
