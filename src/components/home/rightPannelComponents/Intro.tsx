import React from 'react';
import Link from 'next/link';
import { Chip } from "@nextui-org/chip";

const Intro: React.FC = () => {
  const skills: string[] = ['JavaScript (ES6+)', 'TypeScript', 'React', 'Ruby', 'Python', 'Solidity', 'Node.js', 'AWS', 'OpenAI Vision', 'GraphQL', 'JWT', '...'];

  return (
    <div className="md:px-10 lg:p-0 text-lg w-full text-left leading-normal text-slate-400">
      <p className="mb-4">
        My journey in software engineering began several years ago when I started exploring custom automation flows and optimizing business functionalities with tech. The right amount of curiosity taught me many of the intricacies of Infra & Backend systems.
      </p>
        
      <p className="mb-4">
        Through this never-ending learning voyage, I discovered my true calling is creating innovative and impeccably-modern front-end code.
      </p>

      <p className="mb-4">
        There&apos;s something uniquely fulfilling about writing code with such precision and complexity that remains invisible to the non-technical eye, yet integral to every human&apos;s daily digital experiences. It&apos;s basically like building invisible yet essential modern-day world marvels upon which millions rely for their daily routines. There are literally software programs that take longer to produce and require more precision &amp; collaboration than building the Empire State Building, an Airbus A380, or the Taj Mahal. Deep passion turned into sharp skill, I am now fluent in every HTML, CSS, and JavaScript framework I have shown interest for.
      </p>

      <p className="mb-4">
        I find myself captivated by the beauty of mesmerizing design and user experience, and it&apos;s that feeling that drives me to create those designs I admire so much on my own.
      </p>

      <p className="mb-4">
        Fast forward to today, I&apos;ve had the opportunity to work in diverse environments including
        a{' '}<Link href="https://neuehouse.com/" className="text-green-300 opacity-80 hover:opacity-180 transition-opacity font-bold">NYC startup</Link>,{' '}
        a{' '}<Link href="https://supercharge.nyc/" className="text-green-300 opacity-80 hover:opacity-180 transition-opacity font-bold">content agency</Link>,{' '}
        a{' '}<Link href="https://www.ihg.com/" className="text-green-300 opacity-80 hover:opacity-180 transition-opacity font-bold">huge corporation</Link>, and{' '}
        {' '}<Link href="https://openbroker.com/" className="text-green-300 opacity-80 hover:opacity-180 transition-opacity font-bold">3 of my own startups</Link>,{' '}
      </p>
      <p className="mb-4">
        In addition to my development work, I&apos;ve successfully led teams of 30+ people, managed multi-million dollar production budgets, product lifecycles,
        and secured significant funding from investors.
      </p>

      <p className="mb-8">
        Here are a few technologies I&apos;ve been hacking with recently:
      </p>
      <ul className="flex flex-wrap">
        {skills && skills.map((skill, i) =>
          <Chip className="mr-2 mb-2 md:mr-4 md:mb-4 hover:text-slate-600 cursor-default transition" color="secondary" variant="flat" key={i}>{skill}</Chip>
        )}
      </ul>
    </div>
  );
};

export default Intro;
