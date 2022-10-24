import Link from 'next/link';
import React, { createContext, useState } from 'react';
import Button from 'src/components/atoms/Button';
import MenuIcon from 'src/components/atoms/Icons/Menu';
import Nav from 'src/components/parts/Nav';
import NavSP from 'src/components/parts/Nav/NavSP';
import { gnav } from 'src/contents/nav';

const Header = () => {
  const [open, setOpen] = useState<boolean | undefined>(undefined)
  return (
    <>
      <header className="flex items-center fixed top-0 z-40 px-4 w-full h-16">
        <div className='flex justify-between items-center w-full'>
          <div>logo</div>
          {/* <Nav className='hidden lg:block' nav={gnav} /> */}
          <div className='flex items-center'>
            <div className='pr-2'><Button href="#contact" shape='rounded'>申し込む</Button></div>
            {/* <div className='lg:hidden cursor-pointer' onClick={() => setOpen(!open)}><MenuIcon /></div> */}
          </div>
        </div>
        {/* <NavSP open={open} setOpen={setOpen} nav={gnav} /> */}
      </header>
    </>
  )
}

export default Header;