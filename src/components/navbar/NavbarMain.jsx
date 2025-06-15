import React from 'react'
import NavbarLogo from './NavbarLogo'
import NavbarLinks from './NavbarLinks'
import NavbarBtn from './NavbarBtn'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="max-w-[1300px] mx-auto w-full  px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-4">
        <div className="flex justify-between w-full max-w-[1200px] mx-auto  bg-black items-center px-4 py-2 rounded-r-full rounded-l-full border-orange border-[0.5px] ">
            <NavbarLogo/>
            <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
              <NavbarLinks/>
            </div>
            <NavbarBtn/>
        </div>
        <div className='flex lg:hidden sm:block px-4 py-2 bg-black items-center justify-center rounded-full border-[0.5px] border-orange'>
          <button className='text-2xl p-3 border border-orange rounded-full text-white' onClick={toggleMenu}>
            <GiHamburgerMenu />
          </button>
        </div>
    </nav>
  );
};

export default NavbarMain;