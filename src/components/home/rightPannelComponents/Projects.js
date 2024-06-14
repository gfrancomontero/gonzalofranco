
"use client"
import React from 'react';
import ProjectCard from './cards/projectCard';
import data from '/content/projects/data.js';

const Intro = () => {
  // Sort the data by the value of position in ascending order
  const sortedData = data.sort((a, b) => a.position - b.position);
  return (
    <>
      {sortedData.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </>
  );
};

export default Intro;
