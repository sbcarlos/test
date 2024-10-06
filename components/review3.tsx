import type { NextPage } from "next";
import styles from "./review3.module.css";

export type Review3Type = {
  className?: string;
};

const Review3: NextPage<Review3Type> = ({ className = "" }) => {
  return (
    <div className={[styles.review4, className].join(" ")}>
      <div className={styles.stars}>
        <img className={styles.vectorIcon} alt="" src="/vector-68.svg" />
        <img className={styles.vectorIcon} alt="" src="/vector-69.svg" />
        <img className={styles.vectorIcon} alt="" src="/vector-70.svg" />
        <img className={styles.vectorIcon} alt="" src="/vector-71.svg" />
        <img className={styles.vectorIcon} alt="" src="/vector-72.svg" />
      </div>
      <div className={styles.allTheTeachersInJamsBelieWrapper}>
        <div className={styles.allTheTeachers}>
          All the teachers in JAMS believe in overall development of kids. They
          not only teach abacus and mental math but also teach various life
          lessons like hard work and perseverance that goes a long way in
          shaping kid’s future...
        </div>
      </div>
      <div className={styles.line} />
      <div className={styles.akhileshBanerjeeParent}>
        <b className={styles.akhileshBanerjee}>Akhilesh Banerjee</b>
        <div className={styles.monthsAgo}>7 months ago</div>
      </div>
      <img className={styles.googleIcon} alt="" src="/google-icon.svg" />
    </div>
  );
};

export default Review3;
