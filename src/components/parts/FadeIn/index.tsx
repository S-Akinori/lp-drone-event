import clsx from "clsx";
import { useInView } from "react-intersection-observer";

interface Props {
  children: React.ReactNode
  option?: {
    rootMargin?: string
    threshold?: number,
    triggerOnce?: boolean
  }
  delay?: number
}

const FadeIn = ({children, option = {rootMargin: '0px', threshold: 0.5, triggerOnce: true}, delay = 0}: Props) => {
  const { ref, inView, entry } = useInView(option);
  return (
    <div ref={ref} className={clsx(['duration-500', inView ? 'opacity-100' : 'opacity-0'])} style={{transitionDelay: `${delay}ms`}}>{children}</div>
  )
}

export default FadeIn