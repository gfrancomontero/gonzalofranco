'use client';
import React, { useState, useEffect, useRef } from 'react';
import Intro from './rightPannelComponents/Intro.tsx';
import Experience from './rightPannelComponents/Experience.js';
import Projects from './rightPannelComponents/Projects.js';
import Footer from './rightPannelComponents/Footer.js';
import Nav from './leftPannelComponents/Nav';

const RightPannel = () => {
  const [selected, setSelected] = useState(1);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  const introRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const FooterRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const scrollToSection = (ref) => {
      if (ref.current && windowWidth >= 1024) {
        ref.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (windowWidth >= 1024) {
      switch (selected) {
        case 1:
          scrollToSection(introRef);
          break;
        case 2:
          scrollToSection(experienceRef);
          break;
        case 3:
          scrollToSection(projectsRef);
          break;
        case 4:
          scrollToSection(FooterRef);
          break;
        default:
          scrollToSection(introRef);
          break;
      }
    }
  }, [selected, windowWidth]);

  return (
    <>
      <div className="flex w-full flex-col lg:overflow-y-scroll h-full relative lg:w-screen lg:h-screen lg:pl-[50vw] lg:fixed lg:top-0 lg:right-0">
        <div ref={introRef} className="w-full flex flex-col justify-between md:p-18 md:pl-4 sm:p-14 p-4">
          <Intro />
        </div>
        <div ref={experienceRef} className="w-full flex flex-col justify-between md:p-18 md:pl-0 md:pr-10 sm:p-14 p-4">
          <Experience selected={selected} />
        </div>
        <div ref={projectsRef} className="w-full flex flex-col justify-between md:p-18 md:pl-4 sm:p-14 p-4">
          <Projects selected={selected} />
        </div>
        <div ref={FooterRef} className="w-full flex flex-col justify-between md:p-18 md:pl-4 sm:p-14 p-4">
          <Footer selected={selected} />
        </div>
      </div>
      <Nav selected={selected} setSelected={setSelected} />
    </>
  );
};

export default RightPannel;