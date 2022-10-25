import clsx from "clsx"
import Image from "next/image"
import { CommonImageObject } from "src/types/CommonProps"

interface Props {
  children: React.ReactNode
  title: string
  image: CommonImageObject
  direction?: 'row' | 'row-reverse' | 'col' | 'col-reverse'
  reverse?: boolean
}

const directionClass = {
  row: 'flex-row',
  'row-reverse': 'flex-row-reverse',
  'col': 'flex-col',
  'col-reverse': 'flex-col-reverses',
}

const TextImage = ({children, title, image, direction = 'row'}: Props) => {
  return (
    <>
      <style jsx>{`
        h3::before {
          content: '';
          display: block;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2.5px;
          background: linear-gradient(
            to right, 
            var(--main-color), var(--main-color) 3rem,
            transparent 3rem, transparent 5rem,
            var(--main-color) 5rem
          );
        }
        h3::after {
          content: '';
          display: block;
          position: absolute;
          bottom: -0.75rem;
          left: 3.3rem;
          width: 1.5rem;
          height: 1.5rem;
          border-right: 3px solid var(--main-color);
          transform: rotate(45deg);
        }  
      `}</style>
      <div className={clsx(['md:flex mb-8', directionClass[direction]])}>
        <div className={clsx(['py-4 md:px-4', direction == "row" || direction == 'row-reverse' ? 'md:w-1/2' : ''])}>
          <Image {...image} />
        </div>
        <div className={clsx(['py-4 md:px-4', direction == "row" || direction == 'row-reverse' ? 'md:w-1/2' : ''])}>
          <h3 className="relative text-xl font-bold mb-4 whitespace-pre-wrap">{title}</h3>
          <div className="whitespace-pre-wrap">{children}</div>
        </div>
      </div>
    </>
  )
}
export default TextImage