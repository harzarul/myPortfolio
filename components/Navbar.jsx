
'use client';

import { useState } from "react";
import { NavLinks } from "../constant";
import { FaBars } from "react-icons/fa";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("aboutme");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='flex justify-between items-center p-6'>
      <div>
        <img className='w-[7rem] h-auto object-contain'
          src="./logo.png" alt="logo" />
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
        <div className={`${toggle ? "flex" : "hidden"} p-5 mx-4 my-2 min-w-[140px] rounded-full absolute top-20 right-0`}>
          <ul className='flex flex-col flex-1 justify-end items-start mr-[2rem]'>
            {NavLinks.map((data,index) => (
              <li className={`p-1 my-[.5rem] text-[1.4rem] font-montserrat font-semibold cursor-pointer ${active === data.id ? "text-yellow border-b-2" : "text-white"}`}
                key={data.id}
                onClick={() => setActive(data.id)}>
                <a className="flex justify-center items-center"
                  href={`#${data.id}`}>
                  {data.logo} <span className="mx-1"/>{data.link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar