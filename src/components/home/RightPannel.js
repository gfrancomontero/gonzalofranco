import React from 'react'
import styles from './rightPannelComponents/rightPannel.module.scss'
import Nav from './leftPannelComponents/Nav.js'
import Intro from './rightPannelComponents/Intro.tsx'
import Experience from './rightPannelComponents/Experience.js'
import ContactIcons from './leftPannelComponents/ContactIcons.js'

const leftPannel = () => {
  return (
    <div className="flex flex-col lg:overflow-y-scroll  h-full">
      <div className="  w-full
                        flex flex-col justify-between
                        md:p-18 md:pl-4 sm:p-14 p-4
                        ">
                          <Intro />
      </div>
      <div className="  w-full
                        flex flex-col justify-between
                        md:p-18 md:pl-4 sm:p-14 p-4
                        ">
                          <Experience />
      </div>
    </div>
  )
}

export default leftPannel
