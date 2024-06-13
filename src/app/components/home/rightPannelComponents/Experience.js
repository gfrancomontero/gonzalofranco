import React from 'react';
import Link from 'next/link';
import { Chip } from "@nextui-org/chip";
import Card from './experienceCard'

const Intro = () => {

  let experience = "rabano"

  return (
    <div className="text-lg w-full text-center md:text-left leading-normal text-slate-400">
      <Card experience={experience} />
    </div>
  );
};

export default Intro;
