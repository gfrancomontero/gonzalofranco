// pages/index.js
import React from 'react';
import ExperienceCard from './cards/experienceCard';
import data from '/content/jobs/data.js';

const Intro = ({selected}) => {
  // Sort the data by the value of position in ascending order
  const sortedData = data.sort((a, b) => a.position - b.position);

  return (
    <>
      {sortedData.map((exp, index) => (
        <ExperienceCard key={index} experience={exp} />
      ))}
    </>
  );
};

export default Intro;
