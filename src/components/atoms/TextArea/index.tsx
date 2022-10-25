import clsx from "clsx"
import { UseFormRegister } from "react-hook-form"
import { CommonProps } from "src/types/CommonProps"

interface Validation {
  [key: string]: any
}

interface Props extends CommonProps {
  id: string
  name: string
  placeholder?: string
  rows?: number
  cols?: number
  register?: UseFormRegister<any>
  validation?: Validation
}

export const TextArea = ({id, name, placeholder, className, rows = 5, cols, validation, register}: Props) => {
  return (
    <>
    {register && (
      <textarea 
        {...register(name, validation)}
        id={id}
        rows={rows}
        cols={cols}
        placeholder={placeholder}
        className={clsx(["rounded", className])}
      >
      </textarea>
    )}
    {!register && (
      <textarea 
        name={name}
        id={id}
        rows={rows}
        cols={cols}
        placeholder={placeholder}
        className={clsx(["rounded", className])}
      >
      </textarea>
    )}
    </>
  )
}