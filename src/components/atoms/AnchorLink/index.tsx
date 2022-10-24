import { MouseEventHandler } from "react"
import { CommonProps } from "src/types/CommonProps"

interface Props extends CommonProps {
  children: React.ReactNode
  href: string
}
const AnchorLink = ({children, href, className, style}: Props) => {
  const onClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    document.querySelector('html')?.classList.add('scroll-smooth');
    setTimeout(() => {
      document.querySelector('html')?.classList.remove('scroll-smooth');
    }, 1500);
  }

  return (
    <>
      <style jsx>{`
        a {
          box-shadow: 0 6px 0 var(--main-color-dark);
        }
        a:hover {
          box-shadow: none;
          transform: translateY(6px);
        }
      `}</style>
      <a href={href} onClick={onClick} className={className} style={style}>{children}</a>
    </>
  )
}

export default AnchorLink