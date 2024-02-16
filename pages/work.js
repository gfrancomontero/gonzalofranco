/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Work.module.scss";
import profilePic from "../public/gonzalofranco.jpg";
import Link from "next/link";
import axios from "axios";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import dynamic from "next/dynamic";
const Animator = dynamic(
  import("react-scroll-motion").then((it) => it.Animator),
  { ssr: false }
);

import { ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";


export default function Work() {
  // const callAPI = async () => {
  //   try {
  //     const res = await fetch("http://localhost:3001/users");
  //     const data = await res.json();
  //     console.log(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());
  return (
    <div>
      <Head>
        <title>Gonzalo Franco</title>
        <meta name="description" content="Gonzalo Franco's Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={`${styles.fullScreenDiv} ${styles.w100} ${styles.flexCol} ${styles.jca}`}
      >
        <h3>I'm still working on this page. 🥲</h3>
        <h5 className={`${styles.rb}`}>But here are some things I've built:</h5>
      <ScrollContainer>
        <div className={`${styles.backgroundRed} ${styles.w100vw} ${styles.rb}`}>
          <ScrollPage>
            <Animator animation={FadeUp}>
              <span style={{ fontSize: "40px" }}>Supercharge</span>
            </Animator>
          </ScrollPage>
        </div> 
        <div className={`${styles.backgroundBlue} ${styles.w100vw} ${styles.rb}`}>
        <ScrollPage>
          <Animator animation={FadeUp}>
            <span style={{ fontSize: "40px" }}>CleanHero</span>
          </Animator>
        </ScrollPage>
        </div>
        <div className={`${styles.backgroundYellow} ${styles.w100vw} ${styles.rb}`}>
        <ScrollPage>
          <Animator animation={FadeUp}>
            <span className={styles.tac} style={{ fontSize: "30px" }}>OpenBroker</span>
          </Animator>
        </ScrollPage>
        </div>
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
