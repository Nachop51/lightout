import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../ui/Table'

interface HeadersProps {
  headers: Record<string, string>
}

const Headers = ({ headers }: HeadersProps) => {
  return (
    <Table tableFixed className='[&_td,th]:'>
      <TableHeader className='text-xs'>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Value</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          Object.entries(headers).map(([name, value]) => (
            <TableRow className='[&>td]:whitespace-nowrap' key={name}>
              <TableCell>{name}</TableCell>
              <TableCell className=' overflow-hidden text-ellipsis'>{value}</TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  )
}

export default Headers
