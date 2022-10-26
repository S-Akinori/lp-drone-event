// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dedent from 'dedent'
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

const textFooter = dedent`
  ================
  ${company.name}
  ${company.address}
  Tel. ${company.tel}
  Email. ${company.email}
  HP. ${company.url}
  ================
`

const generateContactMail = (data: ContactInputs) => {
  const header = 'お申込みありがとうございます'
  let textMain = '';
  const keys = Object.keys(data) as (keyof ContactInputs)[]
  keys.forEach((key, index) => {
    textMain += `【${formContents[index].label}】\n ${data[key]}\n\n`
  })

  const text = dedent`
    ドローン×プログラミングイベントの参加申し込みを受け付けました。以下の当日の情報と注意事項をまとめておりますのでご確認ください。当日お待ちしております！

    ------当日の情報------
    【会場】
    総合学習塾セレクト 久保沢校
    神奈川県相模原市緑区久保沢1-5-15

    【日程】
    2022年12月3日（土）
    ${data.date}

    【参加費】
    3,000円（当日受付にてお支払いいただきます）

    【持ち物】
    筆記用具
    ---------------------

    -------注意事項-------
    ■感染症予防対策への取り組み
    基本的に小規模人数での開催、体験会では参加者同士の間隔をできるだけあけて受講できる体制に致します。
    運営スタッフおよび講師は、マスク着用、講習前に検温・手洗い・手指消毒を実施致します。

    ■参加者へのお願い
    ・37.5度以上の発熱（平熱と比べて高い発熱）や下記の症状があるお客様（入場時に検温致します）
    ・咳、呼吸困難、全身倦怠感、咽頭痛、鼻汁・鼻閉、味覚・嗅覚障害、関節・筋肉痛、下痢、嘔気・嘔吐等の症状
    ・新型コロナウイルス感染症陽性とPCR検査で判定された者との濃厚接触があるお客様

    ■ご来場のお客様へのお願い
    ・ワクチン接種の有無に関わらずマスクを着用されていないお客様はご来場をお断りする場合がございます。
    ・手洗い・手指消毒の徹底をお願い致します。
    ---------------------
    
    ------ご入力内容------
    ${textMain}
    ---------------------

    ${textFooter}
  `

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
    console.log(info.messageId);
    console.log(notification.messageId);
  }
  res.status(200).json({ message: 'success'})
}