import type { NextPage } from "next";
import styles from "./top-section.module.css";

export type TopSectionType = {
  className?: string;
};

const TopSection: NextPage<TopSectionType> = ({ className = "" }) => {
  return (
    <header className={[styles.topSection, className].join(" ")}>
      <img className={styles.logoIcon} loading="lazy" alt="" src="/logo.svg" />
      <div className={styles.navLinks}>
        <b className={styles.linkText}>Classes</b>
        <b className={styles.linkText1}>About Us</b>
        <b className={styles.linkText2}>Success Stories</b>
        <b className={styles.linkText3}>Resources</b>
        <img
          className={styles.navLinksChild}
          loading="lazy"
          alt=""
          src="/rectangle-1.svg"
        />
      </div>
      <div className={styles.button}>
        <b className={styles.button1}>Get Started</b>
        <div className={styles.div}>
          <img
            className={styles.fileBackgroundIcon}
            alt=""
            src="/file-background.svg"
          />
        </div>
      </div>
    </header>
  );
};

export default TopSection;
