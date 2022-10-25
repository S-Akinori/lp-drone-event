// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import { company } from 'src/contents/common'
import { formContents, ContactInputs } from 'src/contents/form'

type Response = {
  message: string
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT as number | undefined,
  // secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  },
});

const textFooter = `
================
${company.name}
${company.address}
Tel. ${company.tel}
Email. ${company.email}
HP. ${company.url}
================
`

const generateContactMail = (data: ContactInputs) => {
  const header = 'お問い合わせありがとうございます'
  const textHeader = '内容を確認の上折り返しご連絡いたします。予約はまだ確定ではございませんのでご理解願います。\n\n'
  let textMain = '------ご入力内容------\n';
  const keys = Object.keys(data) as (keyof ContactInputs)[]
  keys.forEach((key, index) => {
    textMain += `【${formContents[index].label}】\n ${data[key]}\n\n`
  })

  textMain += '------------------'

  const text = textHeader + textMain + textFooter

  return {header, text}
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  // should check csrf token
  const contactData: ContactInputs = req.body;
  const messageData = generateContactMail(contactData);
  const info = await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to: contactData.email,
    subject: messageData.header,
    text: messageData.text,
  });
  if(info.messageId) {
    const notification = await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_FROM,
      subject: messageData.header,
      text: messageData.text,
    });
  }
  res.status(200).json({ message: 'success'})
}