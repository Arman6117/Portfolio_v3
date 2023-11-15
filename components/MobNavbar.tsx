'use client'
import { useState } from 'react';
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';
import NavLink from './NavLink';

const MobNavbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="relative">
      <div
        onClick={() => setShowNav(!showNav)}
        className="relative transition-all top-0 right-0 z-50"
      >
          
        {!showNav ? (<RxHamburgerMenu
            className="text-[#ff6a69] cursor-pointer mt-2  left"
            size={35}
          />):<RxCross1 className="text-neutral-100 cursor-pointer mt-2  left"
          size={35}/> }
      </div>
      <div
        className={`fixed bg-[#ff6a69]  top-0 right-0 h-screen w-10/12  z-40 transform transition-transform ${
          showNav ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col space-y-20 h-full mt-24 items-center">
          <NavLink>Home</NavLink>
          <NavLink>Skills</NavLink>
          <NavLink>Projects</NavLink>
          <button className="bg-[#ff6a69] text-white font-semibold px-2 py-1 text-3xl rounded-full w-40  hover:bg-white border-[2px] border-white transition-all hover:text-neutral-600 ">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobNavbar;