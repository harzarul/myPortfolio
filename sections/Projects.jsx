
'use client';

import React, { useState} from 'react';
import { motion } from "framer-motion";
import { ProjectsData } from '../constant';
import { ProjectCard } from '../components';

const Projects = () => {
  const [active, setActive] = useState('ebank');
  
  return (
    <section className='flex flex-col items-center justify-start mb-[10rem]'
      id='projects'>
      <h1 className='mb-[1.2rem] px-[1rem] text-white border-l-2 border-yellow font-nunito font-semibold md:text-[2rem] text-[1.2rem]'>
        Projects
      </h1>
      <div className='mt-0 flex lg:flex-row flex-col min-h-[60vh] w-[65%] gap-5'>
        {ProjectsData.map((data, index) => (
          <ProjectCard
            key={data.id}
            {...data}
            index={index}
            active={active}
            handleClick={setActive}/>
        ))}
      </div>
    </section>
  )
}

export default Projects