import { useForm, SubmitHandler } from "react-hook-form";
import Button from "src/components/atoms/Button";
import Input from "src/components/atoms/Input"
import Label from "src/components/atoms/Label"
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
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {formContents.map(item => (
        <div key={item.id} className="md:flex mb-6">
          <Label id={item.id} className="w-60">{item.lable}</Label>
          <div className="w-full">
            <Input type={item.type} name={item.name} id={item.id} className="w-full" />
            {/* {errors[item.name] && <div>{errors[item.name].message}</div>} */}
          </div>
        </div>
      ))}
      <div className="text-center"><Button type="submit">申し込む</Button></div>
    </form>
  )
}

export default ContactForm  