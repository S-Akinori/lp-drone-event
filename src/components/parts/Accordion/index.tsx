import clsx from "clsx";
import { Children, cloneElement, createContext, MouseEventHandler, useState } from "react"

interface Props {
  children: React.ReactElement[]
}
const AccordionContext = createContext(null);

const Accordion = ({children}: Props) => {
  return (
    <div>{children}</div>
  )
}

interface AccordionItemProps {
  children: React.ReactNode
  title: string
}
export const AccordionItem = ({children, title}: AccordionItemProps) => {
  const [open, setOpen] = useState(Boolean);
  const onClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    setOpen(!open)
  }
  return (
    <>
      <style jsx>{`
        button::after {
          content: '';
          display: block;
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%) rotate(225deg);
          width: 10px;
          aspect-ratio: 1/1;
          border-top: 1px solid var(--base-cont);
          border-left: 1px solid var(--base-cont);
          transition: 300ms;
        }
        button.open::after {
          transform: translateY(-50%) rotate(45deg);
        }
      `}</style>
      <div className="mb-6 border border-main rounded-lg p-4">
        <button className={clsx(["block relative py-2 font-bold text-lg w-full text-left", open ? 'open' : ''])} onClick={onClick}>{title}</button>
        <div className={clsx(['border-t border-base-cont duration-300 overflow-hidden', open ? 'py-2 h-full opacity-100' : 'h-0 opacity-0'])}>{children}</div>
      </div>
    </>
  )
}



export default Accordion