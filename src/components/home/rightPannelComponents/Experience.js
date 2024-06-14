// pages/index.js
import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import ExperienceCard from './cards/card';

const Intro = () => {
  // Define the path to the directory
  const experienceDirectory = path.join(process.cwd(), 'content/jobs');

  // Retrieve and process all experience data
  const getAllExperienceData = () => {
    const companyDirectories = fs.readdirSync(experienceDirectory);
    console.log('Company Directories:', companyDirectories); // Debug log

    const allExperienceData = companyDirectories.map(companyDir => {
      const filePath = path.join(experienceDirectory, companyDir, 'index.md');
      console.log('Reading file:', filePath); // Debug log

      if (fs.existsSync(filePath)) {
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContents);
        console.log('File Contents:', data, content); // Debug log

        return {
          frontmatter: data,
          content,
        };
      } else {
        console.warn(`index.md not found in ${companyDir}`);
        return null;
      }
    }).filter(data => data !== null); // Filter out any null entries
    allExperienceData.sort((a, b) => (a.frontmatter.position > b.frontmatter.position) ? 1 : -1);

    return allExperienceData;
  };

  // Fetch and store the experience data
  const experience = getAllExperienceData();

  return (
    <div className="text-lg w-full text-center md:text-left leading-normal text-slate-400">
      {experience.map((exp, index) => (
        <ExperienceCard key={index} experience={exp} />
      ))}
    </div>
  );
};

export default Intro;
