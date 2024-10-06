import type { NextPage } from "next";
import TopSection from "../components/top-section";
import BannerSection from "../components/banner-section";
import FrameComponent from "../components/frame-component";
import BottomContent from "../components/bottom-content";
import FrameComponent1 from "../components/frame-component1";
import Teachers from "../components/teachers";
import FrameComponent2 from "../components/frame-component2";
import Review1 from "../components/review1";
import Review from "../components/review";
import Review2 from "../components/review2";
import Review3 from "../components/review3";
import FooterContent from "../components/footer-content";
import CopyrightText from "../components/copyright-text";
import styles from "./index.module.css";

const ClassesPage: NextPage = () => {
  return (
    <div className={styles.classesPage}>
      <section className={styles.headerSectionWrapper}>
        <div className={styles.headerSection}>
          <TopSection />
          <BannerSection />
        </div>
      </section>
      <FrameComponent />
      <BottomContent />
      <FrameComponent1 />
      <Teachers />
      <FrameComponent2 />
      <section className={styles.reviews}>
        <div className={styles.reviewsContainer}>
          <div className={styles.reviewsContent}>
            <h1 className={styles.theJamsReviews}>The JAMS Reviews</h1>
            <div className={styles.loremIpsumDolor}>
              You’ve heard that old saying… hard-work pays back. Well, it’s also
              proven to be truth for our JAMS Abacus students.
            </div>
          </div>
          <div className={styles.arrows}>
            <img
              className={styles.arrowLeftIcon}
              alt=""
              src="/arrow-left.svg"
            />
            <img
              className={styles.arrowRightIcon}
              alt=""
              src="/arrow-right-1.svg"
            />
          </div>
        </div>
        <div className={styles.reviewBox}>
          <Review1 />
          <Review />
          <Review2 />
          <Review3 />
        </div>
        <div className={styles.googleRatingScore50OfContainer}>
          <span>
            <b className={styles.google}>Google</b>
            <span className={styles.ratingScore}>{` rating score: `}</span>
            <b className={styles.google}>5.0</b>
            <span className={styles.of5Based}> of 5, based on </span>
          </span>
          <b className={styles.reviews1}>56 reviews</b>
        </div>
        <img className={styles.ratingIcon} alt="" src="/vector-88.svg" />
      </section>
      <footer className={styles.footer}>
        <FooterContent />
        <div className={styles.line} />
        <CopyrightText />
      </footer>
    </div>
  );
};

export default ClassesPage;
