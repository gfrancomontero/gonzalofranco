// React and Next.js components
import Head from "next/head";
import dynamic from "next/dynamic";

// Styles
import styles from "../styles/Work.module.scss";
import PortfolioItem from "../components/pages/work/portfolio_item";



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

export default function Work() {
  // Animation batches
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <div>
      <Head>
        <title>Gonzalo Franco</title>
        <meta name="description" content="Gonzalo Franco's Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={`${styles.fullScreenDiv} ${styles.w100} ${styles.flexCol} ${styles.jca}`}>
        
        <ScrollContainer>
          <PortfolioItem
            fadeUp={FadeUp}
            companyName="openbroker.com"
            date="2020 - Present"
            description="Marketplace for Real Estate Agents"
            listName="Tech"
          />
          <PortfolioItem
            fadeUp={FadeUp}
          />
             
          
          <ScrollPage>
            <Animator animation={batch(Fade(), Sticky())}>
              <span style={{ fontSize: "40px" }}>Gonzalo Franco</span>
              <br/>
              <span style={{ fontSize: "30px" }}>
                26 Leroy Street,<br />
                New York, NY, 10021<br />
                hey@gonzalofranco.com
              </span>
            </Animator>
          </ScrollPage>
        </ScrollContainer>
      </main>
    </div>
  );
}
