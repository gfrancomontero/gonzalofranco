import React from 'react'
import Link from 'next/link'

export default function Intro() {

  return (
    <>
      <h1 className=" text-slate-200 tracking-tight font-bold
                      lg:text-6xl md:text-6xl sm: text-4xl xs:text-2xl
                      lg:whitespace-nowrap">
        <Link href="/">Gonzalo Franco</Link>
      </h1>
      <h2 class="     text-slate-300 w-full font-medium
                      text-xl md:text-3xl
                      mt-3">
        Frontend Engineer
      </h2>
      <p class="      text-slate-400 leading-normal
                      mt-4 md:max-w-[500px] sm:max-w-[500px]">
        6 years of hands-on experience in Front-end & Full-stack product development.
        Proven eye for design. Analytical, ever curious & blazingly fast learner. Love working with people. Always ready to learn new tech. Currently building OpenBroker.
      </p>
    </>
  )
}