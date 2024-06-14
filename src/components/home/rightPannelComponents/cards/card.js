// components/ExperienceCard.js
import React from 'react';
import Link from 'next/link';
import styles from './card.module.scss';
import { Chip } from '@nextui-org/react';  // Ensure the import path matches the installed package

const ExperienceCard = ({ experience }) => {
  const { frontmatter, content } = experience;
  const { title, company, location, range, url, skills } = frontmatter;

  // Split the content into lines and filter out empty lines or lines without a dash
  const contentLines = content.split('\n')
                              .filter(line => line.trim().startsWith('-'))
                              .map(line => line.trim().substring(1).trim()); // Remove the dash and extra spaces

  return (
    <Link href={url} targert="_blank" className={`${styles.card} text-slate-400 transition my-6 flex flex-col md:flex-row rounded-lg p-6`}>
      <div className={`${styles.range} transition uppercase mr-4 min-w-[160px] text-sm text-left`}>
        {range}
      </div>
      <div className={`${styles.content} text-left text-sm flex-1`}>
        <h3 className="text-slate-200 text-lg">{title} @ <span className="transition">{company}</span></h3>
        <p className="text-slate-200 text-md mb-2">{location}</p>
        {contentLines.map((line, index) => (
          <p className="mb-3" key={index}>{line}</p>
        ))}
        <div className="flex flex-wrap mt-6">
          {skills && skills.map((skill, index) => (
            <Chip className={`${styles.chip} mr-4 mb-4 cursor-default transition text-green-300`} color="secondary" variant="flat" key={index}>{skill}</Chip>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ExperienceCard;
