import type { NextPage } from "next";
import CalendarContainer from "./calendar-container";
import styles from "./bottom-content.module.css";

export type BottomContentType = {
  className?: string;
};

const BottomContent: NextPage<BottomContentType> = ({ className = "" }) => {
  return (
    <section className={[styles.bottomContent, className].join(" ")}>
      <div className={styles.howAStudentsSection}>
        <div className={styles.content}>
          <h1 className={styles.howAStudents}>
            How a Student’s Abacus Skill Progresses
          </h1>
          <div className={styles.loremIpsumDolorContainer}>
            <p className={styles.theJamsProgramIsAContinuo}>
              <span className={styles.the}>{`The `}</span>
              <b className={styles.jamsProgram}>JAMS program</b>
              <span
                className={styles.isAContinuous}
              >{` is a continuous year-round program. JAMS conducts lessons in a group setting but individual progress varies. `}</span>
            </p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>
              The student’s progress also needs parental support by maintaining
              a consistent study schedule at home. Other than the regular Abacus
              class session, it is recommended that the child do 10-15 minutes
              of Abacus exercises every day, 5 days a week.
            </p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>
              Each student learns at his/her own pace but teachers are keeping
              an eye on each student’s progress on a weekly basis.
            </p>
          </div>
        </div>
        <div className={styles.section}>
          <CalendarContainer
            jAMSAcademicCalendar="JAMS Academic Calendar"
            layer1="/layer-1@2x.png"
            button="JAMS Academic Calendar"
          />
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <img
            className={styles.calendarGraphicIcon}
            alt=""
            src="/vector-5.svg"
          />
          <CalendarContainer
            jAMSAcademicCalendar="JAMS Level Progress Chart"
            layer1="/image-4@2x.png"
            propHeight="383px"
            button="JAMS Levels"
          />
        </div>
      </div>
    </section>
  );
};

export default BottomContent;
