export const formTitleContent = {
  title: '参加申し込み'
}

type FormInputName = 'name' | 'kana' | 'email' | 'grade' | 'date' | 'question';

export interface ContactInputs {
  name: string
  kana: string
  email: string
  grade: string
  date: string
  question: string
}

interface FormContents {
  id: string
  name: FormInputName
  label: string
  type: string
  validation?: {
    [key: string]: any
  }
  options?: {
    id: string
    title: string
    value: string
  }[]
}

export const formContents: FormContents[] = [
  {
    id: 'name',
    name: 'name',
    label: 'お名前',
    type: 'text',
    validation: {
      required: '入力してください'
    }
  },
  {
    id: 'kana',
    name: 'kana',
    label: 'ふりがな',
    type: 'text',
    validation: {
      required: '入力してください'
    }
  },
  {
    id: 'email',
    name: 'email',
    label: 'メールアドレス',
    type: 'text',
    validation: {
      required: '入力してください'
    }
  },
  {
    id: 'grade',
    name: 'grade',
    label: '学年',
    type: 'select',
    options: [
      {
        id:'grade_1',
        title: '小1年',
        value: '小1年',
      },
      {
        id:'grade_2',
        title: '小2年',
        value: '小2年',
      },
      {
        id:'grade_3',
        title: '小3年',
        value: '小3年',
      },
      {
        id:'grade_4',
        title: '小4年',
        value: '小4年',
      },
      {
        id:'grade_5',
        title: '小5年',
        value: '小5年',
      },
      {
        id:'grade_6',
        title: '小6年',
        value: '小6年',
      },
      {
        id:'grade_7',
        title: '中1年',
        value: '中1年',
      },
      {
        id:'grade_8',
        title: '中2年',
        value: '中2年',
      },
      {
        id:'grade_9',
        title: '中3年',
        value: '中3年',
      },
      {
        id:'grade_10',
        title: '高1年',
        value: '高1年',
      },
      {
        id:'grade_11',
        title: '高2年',
        value: '高2年',
      },
      {
        id:'grade_12',
        title: '高3年',
        value: '高3年',
      },
    ]
  },
  {
    id: 'date',
    name: 'date',
    label: 'ご希望日程',
    type: 'select',
    options: [
      {
        id:'date_1',
        title: '第1部 : 10:00～12:00',
        value: '第1部 : 10:00～12:00'
      },
      {
        id:'date_2',
        title: '第2部 : 13:00～15:00',
        value: '第2部 : 13:00～15:00'
      },
    ]
  },
  {
    id: 'question',
    name: 'question',
    label: 'ご質問',
    type: 'textarea',
  },
]