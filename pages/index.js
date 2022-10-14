import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import profilePic from "../public/gonzalofranco.jpg";
import Link from "next/link";
import SocialMedia from "../components/pages/index/social_media";

export default function Home() {
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
        {/* <button onClick={callAPI}>Make API Call</button> */}
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={profilePic}
            alt="Picture of Gonzalo Franco"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <br />
        <br />
        <div
          className={`${styles.textSection} ${styles.w100} ${styles.flexCol} ${styles.jca}`}
        >
          <div className={`${styles.software}`}>Software Engineer</div>
          <Link href="https://www.openbroker.com/">CEO, OpenBroker.com</Link>
          <br />

          <div className={`${styles.jca} ${styles.w100} ${styles.flexRow}`}>
            <div>New York</div>
            <div className={styles.brackets}>|</div>
            <div>Dubai</div>
            <div className={styles.brackets}>|</div>
            <div>Marbella</div>
          </div>
          <br />
          <SocialMedia/>
          <Link href="work">
            <a><h3 className={`${styles.hoverUnderline}`}>See some of my work here</h3></a>
          </Link>
        </div>
        <Link href="https://github.com/gfrancomontero/gonzalofranco">
          <a className={`${styles.credit} ${styles.hoverUnderline}`}>Built with ❤️ in Marbella, on NextJS.</a>
        </Link>
      </main>
    </div>
  );
}
