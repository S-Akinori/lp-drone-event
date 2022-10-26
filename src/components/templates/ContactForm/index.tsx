import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "src/components/atoms/Button";
import Spinner from "src/components/atoms/Icons/Spinner";
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
  const [state, setState] = useState<'ready' | 'sending' | 'success' | 'error'>('ready')
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setState('sending')
    try {
      const res = await fetch('/api/contactMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      setState('success')
    } catch (e) {
      setState('ready')
    }
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
            {errors[item.name] && <div className="text-red-400">{errors[item.name]?.message}</div>}
          </div>
        </div>
      ))}
      <div className="text-center mb-4">確認画面はございませんので、もう一度入力内容をご確認ください。</div>
      {state == 'success' && <div className="mb-4 p-4 border border-main">お問い合わせを受け付けました。contact@impre.jpよりメールが送信されるのでご確認お願いします。メールが届かない場合、お手数ですがcontact@impre.jpまたはLINEよりお問い合わせください。</div>}
      {state == 'error' && <div className="mb-4 p-4 border border-main">エラーが発生しました。お手数ですが、お時間を空けて再度お申込みください</div>}
      <div className="text-center"><Button type="submit" disabled={state !== 'ready'}>{state == 'ready' && '申し込む'}{state == 'sending' && <Spinner />}{state == 'success' && '申し込み完了'}</Button></div>
    </form>
  )
}

export default ContactForm  