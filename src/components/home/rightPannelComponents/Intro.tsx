import React, { useState } from 'react';
import Link from 'next/link';
import { Chip } from "@nextui-org/chip";
import Button from '../../../components/layout/Button.js'

const Intro: React.FC = () => {
  const [readMore, setReadMore] = useState(false);
  const skills: string[] = ['JavaScript (ES6+)', 'TypeScript', 'React', 'Ruby', 'Python', 'Solidity', 'Node.js', 'AWS', 'OpenAI Vision', 'GraphQL', 'JWT'];

  return (
    <div className="md:px-10 mt-40 md:mt-0 lg:p-0 text-lg w-full text-left leading-normal text-slate-400">
      {!readMore ? (
        <>
          <p className="mb-4">
            Built in Spain. Assembled in New York City. Fast forward to today, I&apos;ve had the opportunity to work in diverse environments including
            a{' '}<Link href="https://neuehouse.com/" className="text-green-300 opacity-80 hover:opacity-180 transition-opacity font-bold">NYC startup</Link>,{' '}
            a{' '}<Link href="https://supercharge.nyc/" className="text-green-300 opacity-80 hover:opacity-180 transition-opacity font-bold">content agency</Link>,{' '}
            a{' '}<Link href="https://www.ihg.com/" className="text-green-300 opacity-80 hover:opacity-180 transition-opacity font-bold">huge corporation</Link>, and{' '}
            {' '}<Link href="https://linkedin.com/in/gfrancomontero/" className="text-green-300 opacity-80 hover:opacity-180 transition-opacity font-bold">3 of my own startups</Link>.
          </p>
          <p className="mb-4">
            In addition to my engineering work, I&apos;ve successfully led teams of 30+ people, managed multi-million dollar production budgets, product lifecycles,
            and been an integral part in securing venture capital, both for my companies and for others.
          </p>
          <div className="flex flex-col mb-12 mt-12">
            <span className="font-mono text-sm text-green-300 cursor-default transition text-green-300">
              Interested in the full story?
            </span>
            <Button className='mt-2 w-fit-content py-1 text-sm px-2' text={'Read More'} onPress={() => setReadMore(true)} />        
          </div>
          <p className="mb-8">
            Here are a few technologies I&apos;ve been working with recently:
          </p>
          <ul className="flex flex-wrap">
            {skills && skills.map((skill, i) =>
              <Chip className="mr-2 mb-2 hover:text-slate-600 cursor-default transition" color="secondary" variant="flat" key={i}>{skill}</Chip>
            )}
          </ul>
          
        </>
      ) : (
        <>
          <p className="mb-4">
            My journey in software engineering began several years ago when needing to implement custom automation flows to optimize business functionalities with tech. The intricacies of Infra & Backend systems became unveiled — curiosity did the rest.
          </p>
            
          <p className="mb-4">
            Throughout this perpetual journey of discovery, I have perfected an ability that lies in crafting modern, innovative, and impeccable systems.
          </p>

          <p className="mb-4">
            There is supreme elegance in carrying out a task with such precision and complexity that it remains invisible to the naked eye, yet crucial to the digital experiences of the general population. It&apos;s like building invisible yet essential modern-world marvels upon which millions rely. Some software programs demand more time, precision, and collaboration than building projects like the Empire State Building, an Airbus A380, or the Taj Mahal. And that&apos;s fascinating to me. I&apos;m fluent in every HTML, CSS, and JavaScript framework I&apos;ve pursued. Strong product, infra & DB experience as well.
          </p>

          <p className="mb-4">
            I am captivated by the beauty of mesmerizing design and user experience, and this lets me spend hundreds of hours creating the designs I so deeply admire.
          </p>

          <p className="mb-4">
            In addition to my engineering work, I&apos;ve successfully led teams of 30+ people, managed multi-million dollar production budgets, product lifecycles,
            and been an integral part in securing venture capital, both for my companies and for others. My last tech company was {' '}<Link href="https://www.que.madrid/2023/01/19/openbroker-cierra-una-ronda-de-tres-millones-de-euros-encabezada-por-sherry-ventures-391155/" className="text-green-300 opacity-80 hover:opacity-180 transition-opacity font-bold">valued at 3 Million €</Link>.{' '}
          </p>
          <p className="mb-8">
            Here are a few technologies I&apos;ve been working with recently:
          </p>
          <ul className="flex flex-wrap">
            {skills && skills.map((skill, i) =>
              <Chip className="mr-2 mb-2 hover:text-slate-600 cursor-default transition" color="secondary" variant="flat" key={i}>{skill}</Chip>
            )}
          </ul>
        </>
      )}
    </div>
  );
};

export default Intro;
