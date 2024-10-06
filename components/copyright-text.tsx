import type { NextPage } from "next";
import styles from "./copyright-text.module.css";

export type CopyrightTextType = {
  className?: string;
};

const CopyrightText: NextPage<CopyrightTextType> = ({ className = "" }) => {
  return (
    <div className={[styles.copyrightText, className].join(" ")}>
      <div className={styles.text}>
        <div className={styles.linkText}>
          © 2024 JAMS Abacus Math School. All Rights Reserved.
        </div>
        <div className={styles.linkText1}>Privacy Policy</div>
        <div className={styles.linkText2}>Terms of Use</div>
      </div>
      <div className={styles.topArrow}>
        <div className={styles.backToTopContainer}>
          <b className={styles.linkText3}>TOP</b>
          <img className={styles.vectorIcon} alt="" src="/vector-95.svg" />
        </div>
      </div>
    </div>
  );
};

export default CopyrightText;
