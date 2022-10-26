import Link from "next/link"
import { CommonProps } from "src/types/CommonProps"
import clsx from 'clsx';
import AnchorLink from "../AnchorLink";

interface Props extends CommonProps {
  href?: string
  target?: '_blank'
  query?: {
    [key: string]: string
  }
  type?: "button" | "submit" | "reset"
  children: React.ReactNode
  color?: 'base' | 'main' | 'accent'
  shape?: 'default' | 'rounded'
  disabled?: boolean
}
const Button = ({href, className = '', style, type = undefined, target, children, query, color = 'main', shape = 'default', disabled}:Props) => {
  const btnClass = `inline-block relative py-4 px-8 duration-300 ${className}`;
  const colorClass = {
    base: 'bg-base-color text-base-cont',
    main: 'bg-main text-main-cont',
    accent: 'bg-accent text-accent-cont',
  }
  const shapeClass = {
    default: 'rounded-lg',
    rounded: 'rounded-full'
  }
  return (
    <>
      <style jsx>{`
        button, a {
          box-shadow: 0 6px 0 var(--main-color-dark);
        }
        button:hover, a:hover {
          box-shadow: none;
          transform: translateY(6px);
        }
      `}</style>
      {href === undefined && <button type={type} disabled={disabled} className={clsx([btnClass, colorClass[color], shapeClass[shape]])} style={style}>{children}</button>}
      {(href !== undefined && href.indexOf('#') == -1) && <Link href={{pathname: href, query: query}} target={target}><a className={clsx([btnClass, colorClass[color], shapeClass[shape]])} style={style}>{children}</a></Link>}
      {(href !== undefined && href.indexOf('#') != -1) && <AnchorLink href={href} className={clsx([btnClass, colorClass[color], shapeClass[shape]])} style={style}>{children}</AnchorLink>}
    </>
  )
}

export default Button