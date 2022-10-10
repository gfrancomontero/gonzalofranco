import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import profilePic from "../public/gonzalofranco.jpg";
import Link from "next/link";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import axios from "axios";

export default function Home() {
  const callAPI = async () => {
    try {
      const res = await fetch("http://localhost:3001/users");
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
    // axios
    //   .get("http://localhost:3001/users")
    //   .then((response) => console.log(response.data));
  };

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
          <div className={`${styles.flexRow} ${styles.socialMedia}`}>
            <Link href="https://www.linkedin.com/in/gfrancomontero">
              <a target="_blank">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className={styles.fontAwesome}
                />
              </a>
            </Link>
            <Link href="https://github.com/gfrancomontero/">
              <a target="_blank">
                <FontAwesomeIcon
                  icon={faGithub}
                  className={styles.fontAwesome}
                />
              </a>
            </Link>
            <Link href="https://www.twitter.com/gfrancomontero">
              <a target="_blank">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className={styles.fontAwesome}
                />
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.credit}>
          Built with ❤️ in Marbella, on NextJS.
        </div>
      </main>
    </div>
  );
}
