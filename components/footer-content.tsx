import type { NextPage } from "next";
import styles from "./footer-content.module.css";

export type FooterContentType = {
  className?: string;
};

const FooterContent: NextPage<FooterContentType> = ({ className = "" }) => {
  return (
    <div className={[styles.footerContent, className].join(" ")}>
      <div className={styles.logoContent}>
        <img className={styles.footerLogoIcon} alt="" src="/vector-89.svg" />
        <div className={styles.loremIpsumDolor}>
          Founded in 2001, JAMS is proud to be the only math school in the
          Portland and Beaverton area certified by the League for Soroban
          Abacus.
        </div>
      </div>
      <div className={styles.navLinks}>
        <h3 className={styles.links}>Links</h3>
        <div className={styles.footerLinksColumn}>
          <div className={styles.linkText}>Classes</div>
          <div className={styles.linkText1}>About Us</div>
          <div className={styles.linkText1}>Success Stories</div>
          <div className={styles.linkText1}>Resources</div>
          <div className={styles.linkText4}>Contact</div>
        </div>
      </div>
      <div className={styles.contactInfo}>
        <div className={styles.contactContainer}>
          <div className={styles.contactTitleContainer}>
            <h3 className={styles.contact}>Contact</h3>
          </div>
        </div>
        <div className={styles.contactDetails}>
          <div className={styles.nwCentralDrive}>
            15280 NW Central Drive #204 Portland OR 97229
          </div>
          <div className={styles.socialLinks}>
            <img className={styles.socialIcon} alt="" src="/vector-90.svg" />
            <div className={styles.separator}>+503-386-1407</div>
          </div>
          <div className={styles.infojamsportlandcom}>
            info@jamsportland.com
          </div>
          <div className={styles.socialIcons}>
            <img className={styles.vectorIcon} alt="" src="/vector-91.svg" />
            <img className={styles.socialIcon1} alt="" src="/vector-92.svg" />
            <img className={styles.vectorIcon1} alt="" src="/vector-93.svg" />
            <img className={styles.socialIcon2} alt="" src="/vector-94.svg" />
          </div>
        </div>
      </div>
      <div className={styles.trustBadges}>
        <h3 className={styles.links}>Trust badges</h3>
        <div className={styles.trustBadgeContent}>
          <div className={styles.trustBadgeImages}>
            <img
              className={styles.image1Icon}
              loading="lazy"
              alt=""
              src="/image-1@2x.png"
            />
            <img
              className={styles.image2Icon}
              loading="lazy"
              alt=""
              src="/image-2@2x.png"
            />
            <img
              className={styles.image3Icon}
              loading="lazy"
              alt=""
              src="/image-3@2x.png"
            />
          </div>
          <div className={styles.trustBadgeButtons}>
            <div className={styles.button}>
              <div className={styles.button1}>Parent Portal</div>
            </div>
            <div className={styles.button2}>
              <div className={styles.button3}>Parent Resources</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContent;
