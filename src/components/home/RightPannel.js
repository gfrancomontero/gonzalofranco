import React from 'react';
import Intro from './rightPannelComponents/Intro.tsx';
import Experience from './rightPannelComponents/Experience.js';

const RightPannel = () => {
  return (
    <div className="flex w-full flex-col lg:overflow-y-scroll h-full relative
                    lg:w-screen lg:h-screen lg:pl-[50vw] lg:fixed lg:top-0 lg:right-0">
      <div className="w-full flex flex-col justify-between md:p-18 md:pl-4 sm:p-14 p-4">
        <Intro />
      </div>
      <div className="w-full flex flex-col justify-between md:p-18 md:pl-4 sm:p-14 p-4">
        <Experience />
      </div>
    </div>
  );
};

export default RightPannel;
