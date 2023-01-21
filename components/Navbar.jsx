
'use client';

import { useState } from "react";
import { NavLinks } from "../constant";
import { FaBars } from "react-icons/fa";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { motion } from "framer-motion";
import { navVariants } from "../styles/motion";

const Navbar = () => {
  const [active, setActive] = useState("aboutme");
  const [toggle, setToggle] = useState(false);

  return (
    <motion.nav className='flex justify-between items-center p-6'
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{once: true, amount: 0.25}}>
      <div>
        <img className='w-[7rem] h-auto object-contain'
          src="./logo2.1.png" alt="logo" />
      </div>

      <ul className='lg:flex hidden justify-start items-center ml-[25%]'>
        {NavLinks.map((data,index) => (
          <li className={`p-1 mx-[1.6rem] text-[1.3rem] font-montserrat font-semibold cursor-pointer ${active === data.id ? "text-yellow border-b-2" : "text-white"}`}
            key={data.id}
            onClick={() => setActive(data.id)}>
            <a className="flex justify-center items-center"
              href={`#${data.id}`}>
              {data.logo} <span className="mx-1"/>{data.link}
            </a>
          </li>
        ))}
      </ul>

      <div className="lg:hidden flex flex-1 justify-end items-center">
        <div onClick={() => setToggle(!toggle)}>
          {toggle ? <AiOutlineCloseSquare className="w-[2.1rem] h-[2.1rem] text-white"/> : <FaBars className="w-[2.1rem] h-[2.1rem] text-white"/>}
        </div>
        <div className={`${toggle ? "flex" : "hidden"} p-5 mx-4 my-2 min-w-[140px] rounded-xl absolute top-2 right-20 bg-black z-40`}>
          <ul className='flex flex-1 justify-end items-start mr-[2rem]'>
            {NavLinks.map((data,index) => (
              <li className={`p-1 text-[1.4rem] font-montserrat font-semibold cursor-pointer ${active === data.id ? "text-yellow" : "text-white"}`}
                key={data.id}
                onClick={() => (
                 setActive(data.id),
                 setToggle(!toggle) 
                )}>
                <a className="flex justify-center items-center"
                  href={`#${data.id}`}>
                  {data.logo} <span className="mx-1"/> <span className="md:flex hidden">{data.link}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar