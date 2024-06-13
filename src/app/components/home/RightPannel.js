import React from 'react'
import styles from './rightPannelComponents/rightPannel.module.scss'
import Nav from './leftPannelComponents/Nav'
import Intro from './rightPannelComponents/Intro.tsx'
import Experience from './rightPannelComponents/Experience.js'
import ContactIcons from './leftPannelComponents/ContactIcons'

const leftPannel = () => {
  return (
    <div className="  w-full h-full
                      flex flex-col justify-between
                      md:p-18 md:pl-4 p-14 lg:overflow-y-scroll
                      ">
      <div className="w-full text-center md:text-left">
        <Intro />
        <Experience />
      </div>
    </div>
  )
}

export default leftPannel
