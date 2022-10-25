import clsx from "clsx"
import { UseFormRegister } from "react-hook-form"
import { CommonProps } from "src/types/CommonProps"

interface Validation {
  [key: string]: any
}

interface Props extends CommonProps {
  id: string
  name: string
  type?: string
  placeholder?: string
  register?: UseFormRegister<any>
  validation?: Validation
}

const Input = ({id, name, type = 'text', placeholder, className, register, validation}: Props) => {
  return (
    <>
      {register && (
        <input
          {...register(name, validation)}
          type={type}
          id={id}
          placeholder={placeholder} 
          className={clsx(["border border-base-cont rounded", className])} 
        />
      )}
      {!register && (
        <input
          name={name}
          type={type}
          id={id}
          placeholder={placeholder} 
          className={clsx(["border border-base-cont rounded", className])} 
        />
      )}
    </>
  )
}

export default Input