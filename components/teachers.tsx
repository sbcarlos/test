import type { NextPage } from "next";
import Box from "./box";
import styles from "./teachers.module.css";

export type TeachersType = {
  className?: string;
};

const Teachers: NextPage<TeachersType> = ({ className = "" }) => {
  return (
    <section className={[styles.teachers, className].join(" ")}>
      <div className={styles.teachersSection}>
        <div className={styles.teachersContent}>
          <div className={styles.teachersDescription}>
            <h1 className={styles.meetOurLeading}>Meet our Leading Teachers</h1>
            <div className={styles.loremIpsumDolor}>
              Your Child’s Success is our Success
            </div>
          </div>
        </div>
        <div className={styles.teacherProfiles}>
          <Box
            profilePic="/profile-pic@2x.png"
            miwakoSakabayashi="Miwako Sakabayashi"
            loremIpsumDolorSitAmetConsect={`Teacher & Founder`}
            loremIpsumDolorSitAmetConsect1="Lovingly known as Sensei Miwako (‘sensei’ means ‘teacher’ in Japanese), Miwako grew..."
          />
          <div className={styles.box2}>
            <div className={styles.box2Inner}>
              <div className={styles.profilePicWrapper}>
                <img
                  className={styles.profilePicIcon}
                  alt=""
                  src="/profile-pic-1@2x.png"
                />
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.mikaComeauxParent}>
                <b className={styles.mikaComeaux}>Mika Comeaux</b>
                <div className={styles.loremIpsumDolorContainer}>
                  <p className={styles.parentCoordinatorAnd}>
                    Parent Coordinator and
                  </p>
                  <p className={styles.parentCoordinatorAnd}>
                    Assistant Teacher
                  </p>
                </div>
              </div>
              <div className={styles.loremIpsumDolor1}>
                Mika was born and raised in Japan. She came to the U.S. to
                attend college...
              </div>
              <div className={styles.frameChild} />
              <div className={styles.socialWrapper}>
                <div className={styles.social}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector-39.svg"
                  />
                  <div className={styles.vectorWrapper}>
                    <img
                      className={styles.vectorIcon1}
                      alt=""
                      src="/vector-40.svg"
                    />
                  </div>
                  <div className={styles.vectorContainer}>
                    <img
                      className={styles.vectorIcon2}
                      alt=""
                      src="/vector-41.svg"
                    />
                  </div>
                  <img
                    className={styles.vectorIcon3}
                    alt=""
                    src="/vector-42.svg"
                  />
                  <img
                    className={styles.vectorIcon4}
                    alt=""
                    src="/vector-43.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <Box
            profilePic="/profile-pic-2@2x.png"
            miwakoSakabayashi="Mai Bukres"
            loremIpsumDolorSitAmetConsect="Assistant Teacher"
            loremIpsumDolorSitAmetConsect1="Mai Bukres is a third-year undergraduate student at Portland State University majoring in..."
          />
          <Box
            profilePic="/profile-pic-3@2x.png"
            miwakoSakabayashi="Carol"
            loremIpsumDolorSitAmetConsect="Teacher"
            loremIpsumDolorSitAmetConsect1={`Carol grew up in Taiwan & came to the U.S. for college. During her childhood, she learned the abacus...`}
          />
        </div>
        <img
          className={styles.arrowRightIcon}
          loading="lazy"
          alt=""
          src="/arrow-right.svg"
        />
        <img
          className={styles.arrowLeftIcon}
          loading="lazy"
          alt=""
          src="/arrow-left.svg"
        />
      </div>
    </section>
  );
};

export default Teachers;
