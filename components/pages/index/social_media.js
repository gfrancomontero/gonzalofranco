import styles from "./social_media.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
    faTwitter,
  } from "@fortawesome/free-brands-svg-icons";

const SocialMedia = (props) => {
  return (
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
  );
};

export default SocialMedia;
