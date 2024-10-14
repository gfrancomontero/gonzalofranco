"use client";

import React, { useEffect, useState } from "react";
import styles from "./backgroundEffect.module.scss";

// Array of keywords
const keywords = [
  "Software Engineer", "Lead Engineer", "Full-Stack Developer", "Next.js Developer", 
  "Ruby on Rails Developer", "Web3 Engineer", "App Developer", "CEO and Founder",
  "Decentralized Applications", "Ethereum Developer", "Blockchain Engineer", 
  "Web Development", "Sublet Platform", "Proptech Solutions", "Home-Rental Automation",
  "CleanHero Founder", "Ethereum Roulette", "Blockchain Payments", "MetaMask Integration",
  "Property Listing Portals", "Next.js", "Tailwind CSS", "TypeScript", "Heroku", 
  "GraphQL", "Algolia AI", "Twilio API", "AWS Web Services", "PostgreSQL", 
  "MongoDB", "React.js"
];

// Helper function to generate random values
const getRandomPosition = (max: number) => Math.random() * max;

const BackgroundEffect: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={styles.mainContainer}
      style={{
        "--mouse-x": `${mousePosition.x}px`,
        "--mouse-y": `${mousePosition.y}px`,
      } as React.CSSProperties}
    >
      <div className={styles.keywordContainer}>
        {keywords.map((word, index) => {
          // Generate random top and left positions for each keyword
          const randomTop = getRandomPosition(100); // Random value for top position (0% to 100%)
          const randomLeft = getRandomPosition(100); // Random value for left position (0% to 100%)

          return (
            <span
              key={index}
              className={styles.keyword}
              style={{
                top: `${randomTop}%`,
                left: `${randomLeft}%`,
              }}
            >
              {word}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default BackgroundEffect;
