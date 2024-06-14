"use client";
import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './card.module.scss';
import { Chip } from '@nextui-org/react';  // Ensure the import path matches the installed package
import {Image} from "@nextui-org/image";


const ProjectCard = ({ project }) => {

  const { position, title, cover, github, external, tech, description } = project;

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
        threshold: 0.7, // Trigger when 100% of the card is in the viewport
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


  return (
    <div
      ref={cardRef}
      className={`${styles.card} ${isInFocus ? styles.infocus : ''} cursor-default text-slate-400 transition my-6 flex flex-col ${position%2 == 0 ? 'xl:flex-row' : 'xl:flex-row-reverse'} rounded-lg p-6`}
    >
      <div className={`${styles.position} transition uppercase ${position%2 == 0 ? 'mr' : 'ml'}-4 min-w-[160px] mb-4 flex flex-col justify-center	`}>
        <Image width={300} alt="NextUI hero Image" src={`projects/${cover}`} />
      </div>
      <div className={`${styles.content} text-left text-sm flex-1`}>
        <h3 className="text-slate-200 text-lg">
          {title} {' '}
          <Link href={external} target="_blank" className="transition">
            {external}
          </Link>
        </h3>
        <p className="cursor-default text-slate-200 text-md mb-2">{description}</p>
        <div className="flex flex-wrap mt-6">
          {tech &&
            tech.map((skill, index) => (
              <span key={index} className="mr-2 mb-2 font-mono text-green-300 cursor-default transition text-green-300">
                {skill}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
