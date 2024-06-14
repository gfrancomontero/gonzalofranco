import React from 'react'
import {Image} from "@nextui-org/image";
import {Code} from "@nextui-org/react";
export default function Footer() {
  return (
    <div className="w-full flex flex-col justify-center items-center align-center text-white mb-18">
      <Image className="mb-8" width={80} alt="NextUI hero Image" src={`/me.png`} />
      <p className="mb-8 max-w-[500px] min-w-[400px] text-slate-400 text-lg text-justify w-full">
        Even though I&amp;m not actively seeking new opportunities right now, my inbox is always open. If you have a question or just want to say hello, I&apos;ll do my best to respond!
      </p>

      <a href="mailto:hey@gonzalofranco.com" target="_blank">
        <Code>mailto:hey@gonzalofranco.com</Code>
      </a>
      <p className="mt-8 text-slate-400 text-sm w-full text-center">
        Built with ♥ on NextJS
      </p>
    </div>
  )
}