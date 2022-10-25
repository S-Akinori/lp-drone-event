import { UseFormRegister } from "react-hook-form"
import { CommonProps } from "src/types/CommonProps"

interface Validation {
  [key: string]: any
}

interface Props extends CommonProps {
  id: string
  name: string
  options?: {
    id: string
    title: string
    value: string
  }[]
  register?: UseFormRegister<any>
  validation?: Validation
}
const Select = ({id, name, options, className, style, register, validation}: Props) => {
  return (
    <>
      {register && (
        <select id={id} className={className} {...register(name, validation)}>
          {options && options.map(option => (
              <option key={option.id} value={option.value}>{option.title}</option>
            ))}
        </select> 
      )}
      {!register && (
        <select name={name} id={id} className={className}>
          {options && options.map(option => (
              <option key={option.id} value={option.value}>{option.title}</option>
            ))}
        </select> 
      )}
    </>
  )
}

export default Select