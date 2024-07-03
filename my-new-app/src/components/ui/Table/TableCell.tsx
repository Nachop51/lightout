import React from 'react'

interface TableProps {
  children: React.ReactNode
}

const TableCell: React.FC<TableProps> = ({ children }) => {
  return (
    <td>
      {children}
    </td>
  )
}

export default TableCell
