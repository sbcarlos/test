import type { NextPage } from "next";
import styles from "./box.module.css";

export type BoxType = {
  className?: string;
  profilePic?: string;
  miwakoSakabayashi?: string;
  loremIpsumDolorSitAmetConsect?: string;
  loremIpsumDolorSitAmetConsect1?: string;
};

const Box: NextPage<BoxType> = ({
  className = "",
  profilePic,
  miwakoSakabayashi,
  loremIpsumDolorSitAmetConsect,
  loremIpsumDolorSitAmetConsect1,
}) => {
  return (
    <div className={[styles.box1, className].join(" ")}>
      <div className={styles.profileElements}>
        <img
          className={styles.profilePicIcon}
          loading="lazy"
          alt=""
          src={profilePic}
        />
      </div>
      <div className={styles.profileDetails}>
        <div className={styles.profileContent}>
          <b className={styles.miwakoSakabayashi}>{miwakoSakabayashi}</b>
          <div className={styles.loremIpsumDolor}>
            {loremIpsumDolorSitAmetConsect}
          </div>
        </div>
        <div className={styles.loremIpsumDolor1}>
          {loremIpsumDolorSitAmetConsect1}
        </div>
        <div className={styles.profileDetailsChild} />
        <div className={styles.socialLinks}>
          <div className={styles.social}>
            <img className={styles.socialIcons} alt="" src="/vector-34.svg" />
            <div className={styles.socialBackgrounds}>
              <img
                className={styles.socialElementsIcon}
                alt=""
                src="/vector-35.svg"
              />
            </div>
            <div className={styles.socialBackgrounds1}>
              <img
                className={styles.socialElementsIcon1}
                alt=""
                src="/vector-36.svg"
              />
            </div>
            <img className={styles.socialIcons1} alt="" src="/vector-37.svg" />
            <img className={styles.socialIcons2} alt="" src="/vector-38.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
