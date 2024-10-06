import type { NextPage } from "next";
import styles from "./review1.module.css";

export type Review1Type = {
  className?: string;
};

const Review1: NextPage<Review1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.review1, className].join(" ")}>
      <div className={styles.reviewHeader}>
        <div className={styles.stars}>
          <img className={styles.starIcon} alt="" src="/vector-68.svg" />
          <img className={styles.starIcon} alt="" src="/vector-69.svg" />
          <img className={styles.starIcon} alt="" src="/vector-70.svg" />
          <img className={styles.starIcon} alt="" src="/vector-71.svg" />
          <img className={styles.starIcon} alt="" src="/vector-72.svg" />
        </div>
        <div className={styles.iStartedMy}>
          I started my 5 Year old at JAMS abacus. Lot of challenges in terms of
          class room behavior and attention to teachers. With timely and
          consistent feedback from JAMS's Sensei and Mika, my son continuously
          improving...
        </div>
      </div>
      <div className={styles.line} />
      <div className={styles.reviewDate}>
        <b className={styles.mosesMazloum}>Moses Mazloum</b>
        <div className={styles.reviewTimestamp}>
          <div className={styles.monthsAgo}>3 months ago</div>
          <img
            className={styles.googleIcon}
            loading="lazy"
            alt=""
            src="/google-icon.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Review1;
