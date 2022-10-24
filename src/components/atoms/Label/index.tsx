import { CommonProps } from "src/types/CommonProps"

interface Props extends CommonProps {
  id: string
  children: React.ReactNode
}
const Label = ({children, id, className}: Props) => {
  return (
    <label htmlFor={id} className={className}>{children}</label>
  )
}

export default Label