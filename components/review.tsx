import type { NextPage } from "next";
import styles from "./review.module.css";

export type ReviewType = {
  className?: string;
};

const Review: NextPage<ReviewType> = ({ className = "" }) => {
  return (
    <div className={[styles.review2, className].join(" ")}>
      <div className={styles.stars}>
        <img className={styles.vectorIcon} alt="" src="/vector-68.svg" />
        <img className={styles.vectorIcon} alt="" src="/vector-69.svg" />
        <img className={styles.vectorIcon} alt="" src="/vector-70.svg" />
        <img className={styles.vectorIcon} alt="" src="/vector-71.svg" />
        <img className={styles.vectorIcon} alt="" src="/vector-72.svg" />
      </div>
      <div className={styles.ourBriefExperienceAtJamsWrapper}>
        <div className={styles.ourBriefExperienceContainer}>
          <p className={styles.ourBriefExperience}>
            Our brief experience at JAMS...
          </p>
          <p className={styles.weStartedAs}>
            We started as a joke by enrolling our then 5-year-old son at JAMS.
            Despite the fact that it's not the easiest commute week after week
            (Vancouver,WA - Bethany,OR)
          </p>
          <p className={styles.ourBriefExperience}>We have been attending...</p>
        </div>
      </div>
      <div className={styles.line} />
      <div className={styles.reviewTimestamp}>
        <b className={styles.alexandruLeanca}>Alexandru Leanca</b>
        <div className={styles.reviewTimestamp1}>
          <div className={styles.monthsAgo}>6 months ago</div>
          <img className={styles.googleIcon} alt="" src="/google-icon.svg" />
        </div>
      </div>
    </div>
  );
};

export default Review;
