import { Table, TableHead, TableHeader, TableRow } from '../../ui/Table'

interface ParamsProps {
  params?: Record<string, string>
}

const Params = ({ params = {} }: ParamsProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Key</TableHead>
          <TableHead>Value</TableHead>
        </TableRow>
      </TableHeader>
      <tbody>
        {
          Object.entries(params).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  )
}

export default Params
