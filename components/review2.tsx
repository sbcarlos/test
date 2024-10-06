import type { NextPage } from "next";
import styles from "./review2.module.css";

export type Review2Type = {
  className?: string;
};

const Review2: NextPage<Review2Type> = ({ className = "" }) => {
  return (
    <div className={[styles.review3, className].join(" ")}>
      <div className={styles.stars}>
        <img className={styles.vectorIcon} alt="" src="/vector-68.svg" />
        <img className={styles.vectorIcon} alt="" src="/vector-69.svg" />
        <img className={styles.vectorIcon} alt="" src="/vector-70.svg" />
        <img className={styles.vectorIcon} alt="" src="/vector-71.svg" />
        <img className={styles.vectorIcon} alt="" src="/vector-72.svg" />
      </div>
      <div className={styles.weAreThrilledWithJamsOurWrapper}>
        <div className={styles.weAreThrilled}>
          We are thrilled with JAMS! Our 11 year old has been taking online
          classes for 6 months and her mental math ability has significantly
          improved. More importantly, her confidence and attitude toward math
          has made a huge...
        </div>
      </div>
      <div className={styles.line} />
      <div className={styles.erinHufstetlerParent}>
        <b className={styles.erinHufstetler}>Erin Hufstetler</b>
        <div className={styles.monthsAgoParent}>
          <div className={styles.monthsAgo}>4 months ago</div>
          <img className={styles.googleIcon} alt="" src="/google-icon.svg" />
        </div>
      </div>
    </div>
  );
};

export default Review2;
