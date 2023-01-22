
'use client';

import React, { useState } from 'react'

import { FaqData } from '../constant';
import { AiFillLock, AiFillUnlock } from "react-icons/ai";
import { motion } from "framer-motion";
import { staggerContainer, zoomIn } from "../styles/motion";



const Faq = () => {
  const [isActive, setIsActive] = useState("");
  
  return (
    <motion.section className='flex flex-col items-center justify-start my-[3rem]'
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0.25}}>
      <h1 className='mb-[1.2rem] px-[1rem] text-white border-l-2 border-yellow font-nunito font-semibold md:text-[2rem] text-[1.2rem]'>
        FAQ
      </h1>

      <div className='flex flex-col items-center justify-start ss:w-[40rem] w-[23rem]'>
        {FaqData.map((data, index) => (
          <div className='flex flex-col items-center justify-start w-full mb-1'
            key={data.id}>
            <div className='flex justify-between items-center py-2 px-3 w-full bg-dimWhite'>
              <h1 className='text-[1.3rem] text-white font-nunito font-semibold'>
                {data.question}
              </h1>
              <div className='text-[1.3rem] cursor-pointer'
                onClick={() => { isActive === data.id ? setIsActive("") : setIsActive(data.id)}}>
                {isActive === data.id ? <AiFillUnlock className='text-lightBlue'/> : <AiFillLock className='text-red'/>}
              </div>
            </div>
            <div className={`${ isActive === data.id ? "flex" : "hidden"} justify-start items-center w-full px-3 py-2 border-2 border-lightBlue`}>
              <motion.p className='text-[1rem] font-nunito text-yellow'
                variants={zoomIn(0,1)}>
                {data.answer}
              </motion.p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  )
}

export default Faq