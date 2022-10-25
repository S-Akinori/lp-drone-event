import Image from 'next/image';
import Link from 'next/link';
import React, { createContext, useState } from 'react';
import Button from 'src/components/atoms/Button';
import MenuIcon from 'src/components/atoms/Icons/Menu';
import Nav from 'src/components/parts/Nav';
import NavSP from 'src/components/parts/Nav/NavSP';
import { gnav } from 'src/contents/nav';
import { useInView } from 'react-intersection-observer'
import clsx from 'clsx';

interface Props {
  background?: string
}
const Header = ({background = 'none'}: Props) => {
  const [open, setOpen] = useState<boolean | undefined>(undefined)
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  return (
    <>
      <header className={clsx(["flex items-center fixed top-0 z-40 px-4 py-2 w-full duration-300", (inView || (entry && entry.boundingClientRect.bottom < 200)) ? 'bg-base' : 'bg-none'])}>
        <div className='flex justify-between items-center w-full'>
          <div><Image src="/images/logo.png" width={120} height={60} /></div>
          {/* <Nav className='hidden lg:block' nav={gnav} /> */}
          <div className='flex items-center'>
            <div><Button href="#contact" shape='rounded'>申し込む</Button></div>
            {/* <div className='lg:hidden cursor-pointer' onClick={() => setOpen(!open)}><MenuIcon /></div> */}
          </div>
        </div>
        {/* <NavSP open={open} setOpen={setOpen} nav={gnav} /> */}
      </header>
      <div className='headerTrigger absolute -bottom-80' ref={ref}></div>
    </>
  )
}

export default Header;