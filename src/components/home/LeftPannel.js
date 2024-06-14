import React from 'react'
import Nav from './leftPannelComponents/Nav'
import Intro from './leftPannelComponents/Intro'
import ContactIcons from './leftPannelComponents/ContactIcons'

const leftPannel = () => {
  return (
    <div className="  w-screen h-full
                      flex flex-col justify-between
                      md:p-18 md:pr-4 sm:p-14 p-4
                      lg:w-screen lg:h-screen lg:pr-[50vw] lg:fixed lg:top-0 lg:left-0">
      <div className="w-full mb-8 md:mb-0">
        <Intro />
        <Nav />
      </div>
      <ContactIcons />
    </div>
  )
}

export default leftPannel
