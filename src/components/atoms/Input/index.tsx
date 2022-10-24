import clsx from "clsx"
import { CommonProps } from "src/types/CommonProps"

interface Props extends CommonProps {
  id: string
  name: string
  type?: string
  placeholder?: string
}

const Input = ({id, name, type = 'text', placeholder, className}: Props) => {
  return (
    <input 
      type={type}
      id={id}
      placeholder={placeholder} 
      className={clsx(["border border-base-cont rounded", className])} 
    />
  )
}

export default Input