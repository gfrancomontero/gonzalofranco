import React from 'react';
import Link from 'next/link';
import { Chip } from "@nextui-org/chip";

const Intro: React.FC = () => {
  const skills: string[] = ['JavaScript (ES6+)', 'TypeScript', 'React', 'Ruby', 'Python', 'Solidity', 'Node.js', 'AWS', 'OpenAI Vision', 'GraphQL', 'JWT', '...'];

  return (
    <div className="md:px-10 mt-40 md:mt-0 lg:p-0 text-lg w-full text-left leading-normal text-slate-400">
      <p className="mb-4">
        My journey in software engineering began several years ago when needing to implement custom automation flows to optimize business functionalities with tech. The intricacies of Infra & Backend systems became unveiled — curiosity did the rest.
      </p>
        
      <p className="mb-4">
        Throughout this perpetual journey of discovery, I have perfected an ability that lies in crafting innovative and impeccably modern front-end systems.
      </p>

      <p className="mb-4">
        There is supreme elegance in carrying out a task with such precision and complexity that it remains invisible to the naked eye, yet crucial to the digital experiences of the general population. It&apos;s like building invisible yet essential modern-world marvels upon which millions rely. Some software programs literally demand more time, precision, and collaboration than building projects like the Empire State Building, an Airbus A380, or the Taj Mahal. Passion evolved into hard skills, making me fluent in every HTML, CSS, and JavaScript framework I&apos;ve pursued.
      </p>

      <p className="mb-4">
        I am captivated by the beauty of mesmerizing design and user experience, and this lets me spend hundreds of hours creating the designs I so deeply admire.
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
          <Chip className="mr-2 mb-2 hover:text-slate-600 cursor-default transition" color="secondary" variant="flat" key={i}>{skill}</Chip>
        )}
      </ul>
    </div>
  );
};

export default Intro;
