import clsx from "clsx"

interface Props {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

const Box = ({children, className, style}: Props) => {
  return (
    <div className={clsx(['p-6 flex items-center justify-center border-2 border-main rounded-full aspect-square', className])} style={style}>
      <div>{children}</div>
    </div>
  )
}

export default Box