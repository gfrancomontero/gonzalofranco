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
      <h2 className=" text-slate-300 w-full font-medium
                      text-xl md:text-3xl
                      mt-3">
        Software Engineer
      </h2>
      <p className="  text-slate-400 leading-normal
                      mt-4 md:max-w-[500px] sm:max-w-[500px]">
        Software Engineer with 6+ years of hands-on experience in full-cycle product development. United States Green-Card holder. Category: Extraordinary-Abilities.
        Notable startup background. Analytical, ever-curious, and a blazingly fast learner. Fluent in English, German and Spanish.
      </p>
    </>
  )
}