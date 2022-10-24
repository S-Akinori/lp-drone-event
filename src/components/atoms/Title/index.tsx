interface Props {
  children: React.ReactNode
}
const Title = ({children}: Props) => {
  return (
    <>
      <style jsx>{`
        h2 {
          background-color: rgba(var(--main-color-rgb), 0.2);
          background-image: repeating-linear-gradient(-45deg, #fff, #fff 4px,transparent 0, transparent 6px);
        }
      `}</style>
      <h2 className="text-center font-bold mb-8 whitespace-pre-wrap">{children}</h2>
    </>
  )
}

export default Title