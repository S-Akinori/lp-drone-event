import clsx from "clsx"
import { CommonProps } from "src/types/CommonProps"

interface Props extends CommonProps {
  children: React.ReactNode
}

const Table = ({children, className, style}: Props) => {
  return (
    <table className={clsx(['w-full', className])} style={style}><tbody>{children}</tbody></table>
  )
}

export const TableRow = ({children, className, style}: Props) => {
  return (
    <tr className={className} style={style}>{children}</tr>
  )
}

interface TableCellProps extends CommonProps {
  children: React.ReactNode
  th?: boolean
}
export const TableCell = ({children, th = false, className, style}: TableCellProps) => {
  const CellType = th ? 'th' : 'td'
  return (
    <CellType className={clsx(['p-4', className])} style={style}>{children}</CellType>
  )
}

export default Table