import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "src/components/atoms/Button";
import Input from "src/components/atoms/Input"
import Label from "src/components/atoms/Label"
import Select from "src/components/atoms/Select";
import { TextArea } from "src/components/atoms/TextArea";
import { formContents } from "src/contents/form"

interface Inputs {
  name: string
  kana: string
  email: string
  date: string
  grade: string
  question: string
}

const ContactForm = () => {
  const [state, setState] = useState<'ready' | 'sending' | 'success'>('ready')
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {formContents.map(item => (
        <div key={item.id} className="md:flex mb-6">
          <Label id={item.id} className="w-60">{item.label}</Label>
          <div className="w-full">
            {item.type == 'textarea' && <TextArea register={register} validation={item.validation} name={item.name} id={item.id} className="w-full"></TextArea>}
            {item.type == 'select' && <Select register={register} validation={item.validation} name={item.name} id={item.id} options={item.options} className="w-full"></Select>}
            {item.type !== 'textarea' && item.type !== 'select' && <Input register={register} validation={item.validation} type={item.type} name={item.name} id={item.id} className="w-full" />}
            {errors[item.name] && <div>{errors[item.name]?.message}</div>}
          </div>
        </div>
      ))}
      <div className="text-center"><Button type="submit">申し込む</Button></div>
    </form>
  )
}

export default ContactForm  