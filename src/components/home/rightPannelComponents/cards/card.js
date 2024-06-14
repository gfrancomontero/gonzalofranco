"use client"
import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './card.module.scss';
import { Chip } from '@nextui-org/react';  // Ensure the import path matches the installed package

const ExperienceCard = ({ experience }) => {
  const { frontmatter, content } = experience;
  const { title, company, location, range, url, skills } = frontmatter;

  // State to track if the card is in focus
  const [isInFocus, setIsInFocus] = useState(false);

  // Ref for the card element
  const cardRef = useRef(null);

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInFocus(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 1, // Trigger when 50% of the card is in the viewport
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    // Clean up the observer
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once

  // Split the content into lines and filter out empty lines or lines without a dash
  const contentLines = content.split('\n')
                              .filter(line => line.trim().startsWith('-'))
                              .map(line => line.trim().substring(1).trim()); // Remove the dash and extra spaces

  return (
    <div
      ref={cardRef}
      className={`${styles.card} ${isInFocus ? styles.infocus :  ''} cursor-default text-slate-400 transition my-6 flex flex-col md:flex-row xlg:rounded-lg p-6`}
    >
      <div className={`${styles.range} transition uppercase mr-4 min-w-[160px] text-sm text-left`}>
        {range}
      </div>
      <div className={`${styles.content} text-left text-sm flex-1`}>
        <h3 className="text-slate-200 text-lg">
          {title} @{' '}
          <Link href={url} target="_blank" className="transition">
            {company}
          </Link>
        </h3>
        <p className="cursor-default text-slate-200 text-md mb-2">{location}</p>
        {contentLines.map((line, index) => (
          <p className="cursor-default mb-3" key={index}>
            {line}
          </p>
        ))}
        <div className="flex flex-wrap mt-6">
          {skills &&
            skills.map((skill, index) => (
              <Chip
                className={`${styles.chip} mr-4 mb-4 cursor-default transition text-green-300`}
                color="secondary"
                variant="flat"
                key={index}
              >
                {skill}
              </Chip>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
