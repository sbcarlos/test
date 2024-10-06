import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./calendar-container.module.css";

export type CalendarContainerType = {
  className?: string;
  jAMSAcademicCalendar?: string;
  layer1?: string;
  button?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
};

const CalendarContainer: NextPage<CalendarContainerType> = ({
  className = "",
  jAMSAcademicCalendar,
  layer1,
  propHeight,
  button,
}) => {
  const layer1IconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className={[styles.calendarContainer, className].join(" ")}>
      <div className={styles.jamsAcademicCalendarSection}>
        <b className={styles.jamsAcademicCalendar}>{jAMSAcademicCalendar}</b>
        <img
          className={styles.layer1Icon}
          loading="lazy"
          alt=""
          src={layer1}
          style={layer1IconStyle}
        />
      </div>
      <div className={styles.button}>
        <b className={styles.button1}>{button}</b>
        <div className={styles.jamsCalendarButtonIconWrapper}>
          <img
            className={styles.jamsCalendarButtonIcon}
            alt=""
            src="/file-background.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarContainer;
