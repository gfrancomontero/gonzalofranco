import React from 'react'
import styles from './leftPannelComponents/leftPannel.module.scss'
import Link from 'next/link'
import Nav from './leftPannelComponents/Nav'
import Intro from './leftPannelComponents/Intro'
import ContactIcons from './leftPannelComponents/ContactIcons'

const leftPannel = () => {
  return (
    <div className="  w-full h-full
                      flex flex-col justify-between
                      md:p-18 md:pr-4 p-14
                      ">
      <div className="w-full mb-8 md:mb-0">
        <Intro />
        <Nav />
      </div>
      <ContactIcons />
    </div>
  )
}

export default leftPannel