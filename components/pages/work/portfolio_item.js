// React and Next.js components
import dynamic from "next/dynamic";
import styles from "./portfolio_item.module.scss";
import Link from "next/link";

// Dynamic import for components without Server-Side Rendering
const Animator = dynamic(
  () => import("react-scroll-motion").then((mod) => mod.Animator),
  { ssr: false }
);

// Scroll motion components
import {
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut
} from "react-scroll-motion";

const PortfolioItem = (props) => {
  const { fadeUp, companyName, date, description, listName } = props;

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
              <li><strong>{listName}</strong></li>
              <li>🤖 Back-end: Ruby on Rails</li>
              <li>🎨 Front-end: React / StimulusJS</li>
              <li>👨‍💻 Infa: Docker, Circle CI, Heroku, AWS (Lambdas)</li>
              <li>⚙️ APIs: Stripe, OpenAI, AWS</li>
            </ul>
            <ul>
              <li><strong>Business KPIs:</strong></li>
              <li>💡 Self-built MVP</li>
              <li>💰 Raised capital at 3.2m EUR valuation in 2021</li>
              <li>👨‍💻 400+ real estate agents use OpenBroker daily</li>
              <li>🏡 10.000+ properties on database</li>
            </ul>
          </div>
        </div>
      </div> 
    </Animator>
  </ScrollPage>
  );
};

export default PortfolioItem;
