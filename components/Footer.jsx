
'use client';

import React from 'react'
import {Contacts} from '../constant';
import { Map } from "../components";
import { FaCopyright } from "react-icons/fa";
import { motion } from "framer-motion";
import { footerVariants, staggerContainer } from '../styles/motion';

const Footer = () => {
  return (
    <motion.footer className='flex flex-col items-center justify-start'
      id='contact'
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0.25}}>
      <div className='border-t-2 border-yellow relative w-[80%]'>
        <div className='flex flex-col justify-start items-center pt-[2rem] absolute md:top-[-7rem] ss:top-[-5.5rem] top-[-4rem] left-[70%] md:w-[14rem] ss:w-[11rem] w-[8rem] md:h-[14rem] ss:h-[11rem] h-[8rem] border-yellow border-4 rounded-full bg-blue'>
          <h1 className='text-white font-nunito font-semibold text-[1.2rem] ss:flex hidden'>
            Get in Touch
          </h1>
          <motion.div className='flex justify-center items-center ss:mt-[2.5rem] mt-[1rem]'
            variants={footerVariants}>
            {Contacts.map((data,index) => (
              <a href={data.link}
                key={data.id}
                target="_blank">
                <h1 className={`md:text-[1.5rem] text-[1.1rem] text-white hover:text-yellow hover:text-[2rem] ss:px-2 px-1`}>
                  {data.icon}
                </h1>
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      <div className='flex justify-start items-center w-[80%] my-[1rem]'>
        <div className='h-[15rem] w-[15rem]'>
          <Map/>
        </div>
      </div>

      <div className='flex justify-start items-center pb-[1rem] pt-[1rem] w-[80%]'>
        <div className='border-t-2 border-yellow w-[40%] flex justify-start sm:items-center items-start'>
          <FaCopyright className='mr-2 sm:pt-0 pt-2 text-white'/>
          <h1 className='text-white text-[1rem] font-Nunito font-semibold'>
            Design and Inspired by Zarul
          </h1>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer