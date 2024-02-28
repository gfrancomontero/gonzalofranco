import dynamic from "next/dynamic";
import styles from "./portfolio_item.module.scss";
import { ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

// Dynamic import for Animator component
const Animator = dynamic(() => import("react-scroll-motion").then((mod) => mod.Animator), { ssr: false });

const PortfolioItem = ({ fadeUp, companyName, date, description, technologyList, businessKPIs }) => {
  return (
    <ScrollPage>
      <Animator animation={fadeUp}>
        <div className={`${styles.workCard} ${styles.rb}`}>
          <div className={`${styles.content} ${styles.flexCol} ${styles.jca}`}>
            <div className={`${styles.textContainer} ${styles.flexCol} ${styles.jcc}`}>
              <h1>{companyName}</h1>
              <h6>{date}</h6>
              <h2>{description}</h2>
              <ul>
                {technologyList.map((item, index) => (
                  <li key={index}><strong>{item.title}</strong>: {item.description}</li>
                ))}
              </ul>
              <ul>
                {businessKPIs.map((item, index) => (
                  <li key={index}><strong>{item.title}</strong>: {item.description}</li>
                ))}
              </ul>
            </div>
          </div>
        </div> 
      </Animator>
    </ScrollPage>
  );
};

export default PortfolioItem;
