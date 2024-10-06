import type { NextPage } from "next";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section className={[styles.topContentWrapper, className].join(" ")}>
      <div className={styles.topContent}>
        <div className={styles.imageContent}>
          <img className={styles.bodytopIcon} alt="" src="/vector-2.svg" />
          <img className={styles.imageIcon} alt="" src="/image@2x.png" />
          <img className={styles.menuIcon} alt="" src="/vector-3.svg" />
        </div>
        <div className={styles.imageContentDescription}>
          <h1 className={styles.abacusMathOnlineContainer}>
            <p className={styles.abacusMathOnline}>{`Abacus Math Online `}</p>
            <p
              className={styles.abacusMathOnline}
            >{`Classes and In Person. `}</p>
            <p className={styles.abacusMathOnline}>WHAT SUITS YOUR FAMILY?</p>
          </h1>
          <div className={styles.loremIpsumDolorContainer}>
            <p className={styles.abacusMathOnline}>
              We are pleased to inform you that students of all Abacus levels
              can now chose and enroll in 100% online Abacus classes or in
              person.
            </p>
            <p className={styles.abacusMathOnline}>&nbsp;</p>
            <p className={styles.abacusMathOnline}>
              Online Abacus classes are not new to our JAMS teachers. We’ve been
              offering classes to students at a national level for two years
              now. And that allowed us to quickly extend the offer to all
              students as soon as COVID happened.
            </p>
            <p className={styles.abacusMathOnline}>&nbsp;</p>
            <p className={styles.abacusMathOnline}>
              Online Abacus classes are now a permanent offering. Students
              receive their materials and book by mail and get full access to
              our Abacutor App through iPads.
            </p>
            <p className={styles.abacusMathOnline}>&nbsp;</p>
            <p className={styles.abacusMathOnline}>
              All students must have a functioning camera and a microphone on
              their computers. The Student-Teacher ratio for online classes is 3
              to 6 students per teacher in a group.
            </p>
            <p className={styles.abacusMathOnline}>&nbsp;</p>
            <p className={styles.abacusMathOnline}>
              <span>
                For parents who are choosing in-person classes, we strongly
                suggest you reading our 
              </span>
              <span className={styles.covidGuidelines}>COVID GUIDELINES</span>
              <span className={styles.andLearnWhat}>
                 and learn what measures we are taking to keep our teachers and
                students safe.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
