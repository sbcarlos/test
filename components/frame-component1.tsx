import type { NextPage } from "next";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <section
      className={[styles.comparisonContainerWrapper, className].join(" ")}
    >
      <div className={styles.comparisonContainer}>
        <div className={styles.comparisonContent}>
          <div className={styles.comparisonTitleContainer}>
            <h1 className={styles.makeAJams}>Make a JAMS vs Kumon</h1>
            <div className={styles.loremIpsumDolor}>
              At JAMS, our 31-level program is designed to enhance not only math
              skills but also critical life skills. Students experience improved
              focus, discipline, and creative problem-solving abilities.
            </div>
          </div>
        </div>
        <div className={styles.comparisonBoxContainer}>
          <div className={styles.makeAJamsVsKumonBox}>
            <div className={styles.jamsVsKumonBox}>
              <div className={styles.comparisonItemTitles}>
                <div className={styles.comparisonPlatformNames}>
                  <h1 className={styles.jams}>JAMS</h1>
                </div>
                <div className={styles.comparisonItemDescriptions}>
                  <div className={styles.jamsDescriptionContainer}>
                    <div className={styles.loremIpsumIsSimply}>
                      Lorem Ipsum is simply dummy text of the printing.
                    </div>
                  </div>
                  <div className={styles.jamsDescriptionSeparator} />
                  <div className={styles.jamsDescriptionContainer}>
                    <div className={styles.loremIpsumIsSimply}>
                      Lorem Ipsum is simply dummy text of the printing.
                    </div>
                  </div>
                  <div className={styles.jamsDescriptionSeparator} />
                  <div className={styles.jamsDescriptionContainer}>
                    <div className={styles.loremIpsumIsSimply}>
                      Lorem Ipsum is simply dummy text of the printing.
                    </div>
                  </div>
                  <div className={styles.jamsDescriptionItemContaine2}>
                    <div className={styles.jamsDescriptionSeparator} />
                    <div className={styles.jamsDescriptionContainer}>
                      <div className={styles.loremIpsumIsSimply}>
                        Lorem Ipsum is simply dummy text of the printing.
                      </div>
                    </div>
                    <div className={styles.jamsDescriptionSeparator} />
                    <div className={styles.jamsDescriptionContainer}>
                      <div className={styles.loremIpsumIsSimply}>
                        Lorem Ipsum is simply dummy text of the printing.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.kumon}>
                <div className={styles.kumonWrapper}>
                  <h1 className={styles.kumon1}>Kumon</h1>
                </div>
                <div className={styles.jamsDescriptionContainer}>
                  <div className={styles.loremIpsumIsSimply}>
                    Lorem Ipsum is simply dummy text of the printing.
                  </div>
                </div>
                <div className={styles.jamsDescriptionSeparator} />
                <div className={styles.jamsDescriptionContainer}>
                  <div className={styles.loremIpsumIsSimply}>
                    Lorem Ipsum is simply dummy text of the printing.
                  </div>
                </div>
                <div className={styles.jamsDescriptionSeparator} />
                <div className={styles.jamsDescriptionContainer}>
                  <div className={styles.loremIpsumIsSimply}>
                    Lorem Ipsum is simply dummy text of the printing.
                  </div>
                </div>
                <div className={styles.jamsDescriptionSeparator} />
                <div className={styles.jamsDescriptionContainer}>
                  <div className={styles.loremIpsumIsSimply}>
                    Lorem Ipsum is simply dummy text of the printing.
                  </div>
                </div>
                <div className={styles.jamsDescriptionSeparator} />
                <div className={styles.jamsDescriptionContainer}>
                  <div className={styles.loremIpsumIsSimply}>
                    Lorem Ipsum is simply dummy text of the printing.
                  </div>
                </div>
              </div>
              <div className={styles.vs}>
                <div className={styles.highlightItems}>
                  <h1 className={styles.vs1}>VS</h1>
                </div>
                <div className={styles.highlightItems1}>
                  <div className={styles.achived}>Achived</div>
                </div>
                <div className={styles.highlightItems2} />
                <div className={styles.highlightItems1}>
                  <div className={styles.achived}>Excellence</div>
                </div>
                <div className={styles.highlightItems2} />
                <div className={styles.highlightItems1}>
                  <div className={styles.achived}>Mastered</div>
                </div>
                <div className={styles.highlightItems2} />
                <div className={styles.highlightItems1}>
                  <div className={styles.achived}>Worked</div>
                </div>
                <div className={styles.highlightItems2} />
                <div className={styles.highlightItems1}>
                  <div className={styles.achived}>Goal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.inPersonClasses}>
          <div className={styles.inPersonContent}>
            <h1 className={styles.makeAJams}>
              <p className={styles.inPerson}>{`In-Person `}</p>
              <p className={styles.inPerson}>Beginners Classes</p>
            </h1>
            <div className={styles.inPersonSchedule}>
              <div className={styles.inPersonScheduleDays}>
                <div className={styles.inPersonScheduleDayItems}>
                  <img
                    className={styles.inPersonScheduleIcons}
                    alt=""
                    src="/vector-7.svg"
                  />
                  <div className={styles.tue330PmContainer}>
                    <p
                      className={styles.inPerson}
                    >{`Tue 3:30 pm – 4:30 pm `}</p>
                    <p className={styles.inPerson}>(Pacific time)</p>
                  </div>
                </div>
                <div className={styles.jamsDescriptionSeparator} />
                <div className={styles.vectorGroup}>
                  <img
                    className={styles.inPersonScheduleIcons}
                    alt=""
                    src="/vector-7.svg"
                  />
                  <div className={styles.tue430PmContainer}>
                    <p
                      className={styles.inPerson}
                    >{`Tue 4:30 pm – 5:30 pm `}</p>
                    <p className={styles.inPerson}>(Pacific time)</p>
                  </div>
                </div>
                <div className={styles.jamsDescriptionSeparator} />
                <div className={styles.inPersonScheduleDayItems4}>
                  <img
                    className={styles.inPersonScheduleIcons}
                    alt=""
                    src="/vector-7.svg"
                  />
                  <div className={styles.tue430PmContainer}>
                    <p
                      className={styles.inPerson}
                    >{`Tue 5:30 pm – 6:30 pm `}</p>
                    <p className={styles.inPerson}>(Pacific time)</p>
                  </div>
                </div>
                <div className={styles.jamsDescriptionSeparator} />
                <div className={styles.frameDiv}>
                  <img
                    className={styles.inPersonScheduleIcons}
                    alt=""
                    src="/vector-7.svg"
                  />
                  <div className={styles.tue430PmContainer}>
                    <p
                      className={styles.inPerson}
                    >{`Wed 3:30 pm – 4:30 pm `}</p>
                    <p className={styles.inPerson}>(Pacific time)</p>
                  </div>
                </div>
                <div className={styles.jamsDescriptionSeparator} />
                <div className={styles.inPersonScheduleDayItems8}>
                  <img
                    className={styles.inPersonScheduleIcons}
                    alt=""
                    src="/vector-7.svg"
                  />
                  <div className={styles.tue430PmContainer}>
                    <p
                      className={styles.inPerson}
                    >{`Wed 4:30 pm – 5:30 pm `}</p>
                    <p className={styles.inPerson}>(Pacific time)</p>
                  </div>
                </div>
                <div className={styles.jamsDescriptionSeparator} />
                <div className={styles.frameDiv}>
                  <img
                    className={styles.inPersonScheduleIcons}
                    alt=""
                    src="/vector-7.svg"
                  />
                  <div className={styles.tue430PmContainer}>
                    <p
                      className={styles.inPerson}
                    >{`Wed 5:30 pm – 6:30 pm `}</p>
                    <p className={styles.inPerson}>(Pacific time)</p>
                  </div>
                </div>
                <div className={styles.jamsDescriptionSeparator} />
                <div className={styles.inPersonScheduleDayItems12}>
                  <img
                    className={styles.inPersonScheduleIcons}
                    alt=""
                    src="/vector-7.svg"
                  />
                  <div className={styles.tue430PmContainer}>
                    <p
                      className={styles.inPerson}
                    >{`Thurs 3:30 pm – 4:30 pm `}</p>
                    <p className={styles.inPerson}>(Pacific time)</p>
                  </div>
                </div>
                <div className={styles.jamsDescriptionSeparator} />
                <div className={styles.inPersonScheduleDayItems12}>
                  <img
                    className={styles.inPersonScheduleIcons}
                    alt=""
                    src="/vector-7.svg"
                  />
                  <div className={styles.tue430PmContainer}>
                    <p
                      className={styles.inPerson}
                    >{`Thurs 4:30 pm – 5:30 pm `}</p>
                    <p className={styles.inPerson}>(Pacific time)</p>
                  </div>
                </div>
              </div>
              <div className={styles.inPersonScheduleSeparator} />
              <div className={styles.schedule}>
                <div className={styles.inPersonScheduleDayItems}>
                  <img
                    className={styles.inPersonScheduleIcons}
                    alt=""
                    src="/vector-7.svg"
                  />
                  <div className={styles.tue330PmContainer}>
                    <p
                      className={styles.inPerson}
                    >{`Thurs 5:30 pm – 6:30 pm `}</p>
                    <p className={styles.inPerson}>(Pacific time)</p>
                  </div>
                </div>
                <div className={styles.jamsDescriptionSeparator} />
                <div className={styles.scheduleDays2}>
                  <img
                    className={styles.inPersonScheduleIcons}
                    alt=""
                    src="/vector-7.svg"
                  />
                  <div className={styles.tue430PmContainer}>
                    <p
                      className={styles.inPerson}
                    >{`Fri 3:30 pm – 4:30 pm `}</p>
                    <p className={styles.inPerson}>(Pacific time)</p>
                  </div>
                </div>
                <div className={styles.jamsDescriptionSeparator} />
                <div className={styles.scheduleDays2}>
                  <img
                    className={styles.inPersonScheduleIcons}
                    alt=""
                    src="/vector-7.svg"
                  />
                  <div className={styles.tue430PmContainer}>
                    <p
                      className={styles.inPerson}
                    >{`Fri 4:30 pm – 5:30 pm `}</p>
                    <p className={styles.inPerson}>(Pacific time)</p>
                  </div>
                </div>
                <div className={styles.jamsDescriptionSeparator} />
                <div className={styles.scheduleDays6}>
                  <img
                    className={styles.inPersonScheduleIcons}
                    alt=""
                    src="/vector-7.svg"
                  />
                  <div className={styles.tue430PmContainer}>
                    <p
                      className={styles.inPerson}
                    >{`Fri 5:30 pm – 6:30 pm `}</p>
                    <p className={styles.inPerson}>(Pacific time)</p>
                  </div>
                </div>
                <div className={styles.jamsDescriptionSeparator} />
                <div className={styles.scheduleDays8}>
                  <img
                    className={styles.inPersonScheduleIcons}
                    alt=""
                    src="/vector-7.svg"
                  />
                  <div className={styles.tue430PmContainer}>
                    <p
                      className={styles.inPerson}
                    >{`Sat 9:30 am – 10:30 am `}</p>
                    <p className={styles.inPerson}>(Pacific time)</p>
                  </div>
                </div>
                <div className={styles.jamsDescriptionSeparator} />
                <div className={styles.scheduleDays10}>
                  <img
                    className={styles.inPersonScheduleIcons}
                    alt=""
                    src="/vector-7.svg"
                  />
                  <div className={styles.tue430PmContainer}>
                    <p
                      className={styles.inPerson}
                    >{`Sat 10:30 am – 11:30 am `}</p>
                    <p className={styles.inPerson}>(Pacific time)</p>
                  </div>
                </div>
                <div className={styles.jamsDescriptionSeparator} />
                <div className={styles.scheduleDays8}>
                  <img
                    className={styles.inPersonScheduleIcons}
                    alt=""
                    src="/vector-7.svg"
                  />
                  <div className={styles.tue430PmContainer}>
                    <p
                      className={styles.inPerson}
                    >{`Sat 11:30 am – 12:30 pm `}</p>
                    <p className={styles.inPerson}>(Pacific time)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.onlineBeginnersClassesParent}>
            <h1 className={styles.makeAJams}>
              <p className={styles.inPerson}>{`Online `}</p>
              <p className={styles.inPerson}>Beginners Classes</p>
            </h1>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <div className={styles.inPersonScheduleDayItems}>
                  <img
                    className={styles.inPersonScheduleIcons}
                    alt=""
                    src="/vector-7.svg"
                  />
                  <div className={styles.tue330PmContainer}>
                    <p
                      className={styles.inPerson}
                    >{`Tue 2:00  pm – 2:45 pm  `}</p>
                    <p className={styles.inPerson}>(Pacific time)</p>
                  </div>
                </div>
                <div className={styles.jamsDescriptionSeparator} />
                <div className={styles.vectorGroup}>
                  <img
                    className={styles.inPersonScheduleIcons}
                    alt=""
                    src="/vector-7.svg"
                  />
                  <div className={styles.tue430PmContainer}>
                    <p
                      className={styles.inPerson}
                    >{`Tue 3:00 pm – 3:45 pm `}</p>
                    <p className={styles.inPerson}>(Pacific time)</p>
                  </div>
                </div>
                <div className={styles.jamsDescriptionSeparator} />
                <div className={styles.vectorContainer}>
                  <img
                    className={styles.inPersonScheduleIcons}
                    alt=""
                    src="/vector-7.svg"
                  />
                  <div className={styles.tue430PmContainer}>
                    <p
                      className={styles.inPerson}
                    >{`Wed 2:00  pm – 2:45 pm  `}</p>
                    <p className={styles.inPerson}>(Pacific time)</p>
                  </div>
                </div>
                <div className={styles.jamsDescriptionSeparator} />
                <div className={styles.frameDiv}>
                  <img
                    className={styles.inPersonScheduleIcons}
                    alt=""
                    src="/vector-7.svg"
                  />
                  <div className={styles.tue430PmContainer}>
                    <p
                      className={styles.inPerson}
                    >{`Wed 3:00 pm – 3:45 pm `}</p>
                    <p className={styles.inPerson}>(Pacific time)</p>
                  </div>
                </div>
                <div className={styles.jamsDescriptionSeparator} />
                <div className={styles.inPersonScheduleDayItems8}>
                  <img
                    className={styles.inPersonScheduleIcons}
                    alt=""
                    src="/vector-7.svg"
                  />
                  <div className={styles.tue430PmContainer}>
                    <p
                      className={styles.inPerson}
                    >{`Wed 3:45 pm – 4:30 pm `}</p>
                    <p className={styles.inPerson}>(Pacific time)</p>
                  </div>
                </div>
                <div className={styles.jamsDescriptionSeparator} />
                <div className={styles.vectorParent2}>
                  <img
                    className={styles.inPersonScheduleIcons}
                    alt=""
                    src="/vector-7.svg"
                  />
                  <div className={styles.tue430PmContainer}>
                    <p className={styles.inPerson}>Thurs 2:00  pm – 2:45 pm </p>
                    <p className={styles.inPerson}>(Pacific time)</p>
                  </div>
                </div>
              </div>
              <div className={styles.frameChild2} />
              <div className={styles.inPersonScheduleDays}>
                <div className={styles.inPersonScheduleDayItems}>
                  <img
                    className={styles.inPersonScheduleIcons}
                    alt=""
                    src="/vector-7.svg"
                  />
                  <div className={styles.tue330PmContainer}>
                    <p
                      className={styles.inPerson}
                    >{`Thurs 3:00 pm – 3:45 pm `}</p>
                    <p className={styles.inPerson}>(Pacific time)</p>
                  </div>
                </div>
                <div className={styles.jamsDescriptionSeparator} />
                <div className={styles.vectorGroup}>
                  <img
                    className={styles.inPersonScheduleIcons}
                    alt=""
                    src="/vector-7.svg"
                  />
                  <div className={styles.tue430PmContainer}>
                    <p
                      className={styles.inPerson}
                    >{`Fri 2:00  pm – 2:45 pm  `}</p>
                    <p className={styles.inPerson}>(Pacific time)</p>
                  </div>
                </div>
                <div className={styles.jamsDescriptionSeparator} />
                <div className={styles.scheduleDays6}>
                  <img
                    className={styles.inPersonScheduleIcons}
                    alt=""
                    src="/vector-7.svg"
                  />
                  <div className={styles.tue430PmContainer}>
                    <p
                      className={styles.inPerson}
                    >{`Fri 3:00 pm – 3:45 pm `}</p>
                    <p className={styles.inPerson}>(Pacific time)</p>
                  </div>
                </div>
                <div className={styles.jamsDescriptionSeparator} />
                <div className={styles.scheduleDays2}>
                  <img
                    className={styles.inPersonScheduleIcons}
                    alt=""
                    src="/vector-7.svg"
                  />
                  <div className={styles.tue430PmContainer}>
                    <p
                      className={styles.inPerson}
                    >{`Fri 3:45 pm – 4:30 pm `}</p>
                    <p className={styles.inPerson}>(Pacific time)</p>
                  </div>
                </div>
                <div className={styles.jamsDescriptionSeparator} />
                <div className={styles.vectorParent7}>
                  <img
                    className={styles.inPersonScheduleIcons}
                    alt=""
                    src="/vector-7.svg"
                  />
                  <div className={styles.tue430PmContainer}>
                    <p
                      className={styles.inPerson}
                    >{`Sat 9:30 am to 10:15 am `}</p>
                    <p className={styles.inPerson}>(Pacific time)</p>
                  </div>
                </div>
              </div>
              <img
                className={styles.vectorIcon24}
                alt=""
                src="/vector-33.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
