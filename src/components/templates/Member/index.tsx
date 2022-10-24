import Image from "next/image"
import { CommonImageObject } from "src/types/CommonProps"

interface Props {
  children: React.ReactNode
  image: CommonImageObject
  name: string
  kana: string
  info: string
}
const Member = ({children, image, name, kana, info}: Props) => {
  return (
    <>
      <style jsx>{`
        .textContainer::before {
          content: '';
          display: block;
          position: absolute;
          top: -0.1rem;
          left: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
          width: 40px;
          height: 40px;
          border-left: 2px solid var(--main-color);
          border-top: 2px solid var(--main-color);
          background: #FFF;
        }
        @media screen and (min-width: 768px) {
          .textContainer::before {
            top: 4rem;
            left: -1.3rem;
            transform: rotate(-45deg);
            border-left: 2px solid var(--main-color);
            border-top: 2px solid var(--main-color);
            background: #FFF;
          }
        }
      `}</style>
      <div className="md:flex">
        <div className="p-4 w-80 mx-auto aspect-square shrink-0"><Image className="rounded-full" {...image} /></div>
        <div className="textContainer relative p-6 mt-8 md:ml-8 border-2 border-main rounded-lg">
          <div className="border-b border-main mb-4 pb-4">
            <div className="text-xl font-bold">{name}</div>
            <div className="text-sm">{kana}</div>
            <div>{info}</div>
          </div>
          <div className="whitespace-pre-wrap">{children}</div>
        </div>
      </div>
    </>
  )
}

export default Member