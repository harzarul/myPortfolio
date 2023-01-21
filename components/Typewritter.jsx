
'use client'

import React from 'react'
import Typewriter from "typewriter-effect";

const Typewritter = ({data}) => {
  return (
    <Typewriter
      options={{
        strings: data,
        autoStart: true,
        loop: true,
      }}
    />
  )
}

export default Typewritter