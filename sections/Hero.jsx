
'use client';

import { HeroDetails } from "../constant";
import { RadarChart } from "../components";
import { motion } from "framer-motion";
import { zoomIn, staggerContainer } from "../styles/motion";

const Hero = () => {

  return (
    <section className='flex md:flex-row flex-col justify-between items-center'>
      <motion.div className='flex items-start justify-start'
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once: true, amount: 0.25}}>
        <motion.img className='md:w-[12rem] w-[10rem] rounded-full'
          src="/me.jpeg"
          alt="me"
          variants={zoomIn(1.2,2)}/>
        <div className='flex flex-col items-start justify-start ml-[1rem] my-[1rem] '>
          <h1 className='ss:text-[1.8rem] text-[1.2rem] text-white font-semibold font-montserrat border-l-2 border-yellow px-[1rem]'>
            {`Frontend Developer (ReactJS)`}
          </h1>
          <div className='flex flex-col items-start justify-start my-2'>
            {HeroDetails.map((data,index) => (
              <div className="flex justify-center items-center"
                key={data.id}>
                <p className="text-white font-nunito ss:text-[1.2rem] text-[1rem]">
                  <span className="text-yellow">{data.title}</span> : <span className="font-semibold">{data.subtitle}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="flex justify-center items-center md:h-[50vh] h-auto md:w-[30%] ss:w-[70%] w-[100%] bg-gray rounded-2xl my-[2rem]">
        <RadarChart/>
      </div>
    </section>
  )
}

export default Hero