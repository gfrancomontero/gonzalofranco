// React and Next.js components
import Head from "next/head";
import dynamic from "next/dynamic";
import Link from "next/link";

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
          fadeUp={batch(Fade(-2), Sticky())}
          companyName="OpenBroker S.L."
          date="2021-present"
          description="SaaS Marketplace for B2B Real Estate"
          technologyList={[
            { title: "🤖 Back-end", description: "Ruby on Rails" },
            { title: "🎨 Front-end", description: "React / StimulusJS" },
            { title: "👨‍💻 Infra", description: "Docker, Circle CI, Heroku, AWS (Lambdas)" },
            { title: "⚙️  APIs", description: "Stripe, OpenAI, AWS" },
          ]}
          businessKPIs={[
            { title: "💡 MVP", description: "Self-built" },
            { title: "💰 Raised capital", description: "at 3.2m EUR valuation in 2021" },
            { title: "👨‍💻 User base", description: "400+ real estate agents use OpenBroker daily" },
            { title: "🏡 Listings", description: "10.000+ properties on database" },
          ]}
        />

        <PortfolioItem
          fadeUp={batch(Fade(-2), Sticky())}
          companyName="Cleanhero LLC"
          date="2019-2021"
          description="Cleaning your Airbnbs on Autopilot"
          technologyList={[
            { title: "🐍 Back-end", description: "Django (Python)" },
            { title: "🎨 Front-end", description: "Headless" },
            { title: "👨‍💻 Infra", description: "Docker, Circle CI, Heroku" },
            { title: "⚙️  APIs", description: "Twilio, Square" },
          ]}
          businessKPIs={[
            { title: "💡 MVP", description: "Self-built" },
            { title: "💰 Funding", description: "Profitable" },
            { title: "👨‍💻 User base", description: "120+ apartment cleans in NYC" },
            { title: "🏡 Listings", description: "10.000+ properties on database" },
          ]}
        />
             
        <PortfolioItem
          fadeUp={batch(Fade(-2), Sticky())}
          companyName="Supercharge Productions LLC"
          date="2016-2021"
          description="Media production house"
          technologyList={[
            { title: "🤖 Role", description: "CEO / Co Founder" },
            { title: "🎨 Base", description: "234 5th Avenue, Suite 302, 10001, New York, NY" },
          ]}
          businessKPIs={[
            { title: "💡 Self-built MVP", description: "" },
            { title: "💰 Funding", description: "Bootstraped" },
            { title: "👨‍💻 Customer Base", description: "Fortune 500s" },
            { title: "🏡 Revenue", description: "600k$ / y" },
          ]}
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
              <br />
              <br />
              <Link href="/">BACK HOME</Link>
            </Animator>
          </ScrollPage>
        </ScrollContainer>
      </main>
    </div>
  );
}
