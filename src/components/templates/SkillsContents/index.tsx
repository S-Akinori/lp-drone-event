import clsx from "clsx"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import Box from "src/components/parts/Box"
import { skillContents } from "src/contents/skill"

const SkillsContents = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  return (
    <div ref={ref} className='relative flex justify-around flex-wrap md:block md:max-w-screen-sm md:mx-auto md:my-40 md:aspect-square md:border border-base-cont md:rounded-full'>
      <Box className="bg-white hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className='text-lg font-bold text-center'>身につくチカラ</div>
      </Box>
      {skillContents.map((item, index) => (
        <Box 
          key={item.id} 
          className={clsx(['bg-white mb-4 w-60 md:absolute duration-300', inView ? 'opacity-100' : 'opacity-0' , item.className])} 
          style={{transitionDelay: `${300*(index + 1)}ms`}}
        >
          <div className='text-center'><Image {...item.image} /></div>
          <div className='text-lg font-bold text-center'>{item.title}</div>
          <div className='text-center whitespace-pre-wrap'>{item.text}</div>
        </Box>
      ))}
    </div>
  )
}

export default SkillsContents