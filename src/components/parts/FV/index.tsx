import Image from "next/image"
import css from 'styled-jsx/css'
import { CommonImageObject } from "src/types/CommonProps"

interface Props {
  children: React.ReactNode
  src: string
}

const FV = ({children, src}: Props) => {
  const styles = css`
    .fv-container {
      position: relative;
      height: 80vh;
    }
    .fv-container::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      background: #FFF;
      width: 100%;
      height: 100%;
      opacity: 0.3;
    }
  `;
  return (
    <>
      <div className="fv-container" style={{background: `url(${src}) no-repeat center / cover`}}>{children}</div>
      <style jsx>{styles}</style>
    </>
  )
}

export default FV