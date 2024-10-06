import type { NextPage } from "next";
import styles from "./banner-section.module.css";

export type BannerSectionType = {
  className?: string;
};

const BannerSection: NextPage<BannerSectionType> = ({ className = "" }) => {
  return (
    <div className={[styles.bannerSection, className].join(" ")}>
      <h1 className={styles.abacusClasses}>Abacus Classes</h1>
      <div className={styles.loremIpsumDolorSitAmetCoParent}>
        <div className={styles.loremIpsumDolor}>Home</div>
        <img className={styles.frameChild} alt="" src="/rectangle-1-1.svg" />
        <div className={styles.loremIpsumDolor1}>{`Classes & Fees`}</div>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/rectangle-1-1.svg"
        />
        <div className={styles.loremIpsumDolor1}>{`Classes & Camps`}</div>
      </div>
      <img className={styles.updated} alt="" src="/vector-1.svg" />
    </div>
  );
};

export default BannerSection;
