import React, { useState } from 'react';
import Link from 'next/link';
import { Chip } from "@nextui-org/chip";
import Button from '../../../components/layout/Button.js'

const Intro: React.FC = () => {
  const [readMore, setReadMore] = useState(false);
  const skills: string[] = ['JavaScript (ES6+)', 'Web3.js', 'PyTorch (AI)', 'TensorFlow (AI)',  'TypeScript', 'React', 'Ruby', 'Python', 'Solidity', 'Node.js', 'AWS', 'OpenAI Vision', 'GraphQL', 'JWT'];

  return (
    <div className="md:px-10 mt-40 md:mt-0 lg:p-0 text-lg w-full text-left leading-normal text-slate-400">
      {!readMore ? (
        <>
          <p className="mb-4">
            Built in Spain. Assembled in New York City. Fast forward — I&apos;ve had the opportunity to work in diverse environments including
            an{' '}<Link href="https://neuehouse.com/" className="text-green-300 opacity-80 hover:opacity-180 transition-opacity font-bold">Incredible NYC startup</Link>,{' '}
            a groundbreaking{' '}<Link href="https://supercharge.nyc/" className="text-green-300 opacity-80 hover:opacity-180 transition-opacity font-bold">content agency</Link>,{' '}
            a{' '}<Link href="https://www.ihg.com/" className="text-green-300 opacity-80 hover:opacity-180 transition-opacity font-bold">huge corporation</Link>, and{' '}
            {' '}<Link href="https://www.crunchbase.com/person/gonzalo-franco" className="text-green-300 opacity-80 hover:opacity-180 transition-opacity font-bold">3 of my own startups</Link>.
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
            My path in engineering started by having to automate business operations for an agency I ran in NYC about 10 years ago, where I quickly uncovered the power of infrastructure, coding, and backend systems — I&apos;ve been ever curious and pushing boundaries since.
          </p>
            
          <p className="mb-4">
            Over time, I&apos;become exceptional at building functional and transformative products. 
          </p>

          <p className="mb-4">
            The beauty of engineering lies in creating solutions that, while invisible, drive critical digital experiences for millions. Whether it&apos;s scalable APIs or entire platforms, my expertise spans the full stack — from mastering HTML, CSS, and JavaScript/Web3 frameworks to deep product and infrastructure knowledge.
          </p>

          <p className="mb-4">
            Beyond code, I&apos;m equally driven by design and user experience, investing hundreds of hours into perfecting the look and feel of every product I build.
          </p>

          <p className="mb-4">
            I&apos;ve built and led teams of 30+, managed multi-million dollar budgets, and helped secure venture capital. Both for others as well as for my own companies. My last company was <Link href="https://www.que.madrid/2023/01/19/openbroker-cierra-una-ronda-de-tres-millones-de-euros-encabezada-por-sherry-ventures-391155/" className="text-green-300 opacity-80 hover:opacity-180 transition-opacity font-bold">valued at 3 million €</Link>.
          </p>

          <p className="mb-8">
            Technologies I&apos;ve been working with recently include:
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
