import type { NextPage } from "next";
import styles from "./frame-component2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <section className={[styles.parentContentWrapper, className].join(" ")}>
      <div className={styles.parentContent}>
        <div className={styles.parentDescription}>
          <div className={styles.jamsParentCommitmentParent}>
            <h1 className={styles.jamsParent}>{`JAMS & Parent Commitment`}</h1>
            <div className={styles.loremIpsumDolor}>
              At JAMS, our 31-level program is designed to enhance not only math
              skills but also critical life skills. Students experience improved
              focus, discipline, and creative problem-solving abilities.
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.jamsCommitmentPromise}>
            <div className={styles.commitmentElements}>
              <img
                className={styles.commitmentIcons}
                alt=""
                src="/vector-54.svg"
              />
              <div className={styles.commitmentHeadings}>
                <h2
                  className={styles.jamsCommitment}
                >{`JAMS Commitment & Promise`}</h2>
              </div>
            </div>
            <div className={styles.commitmentDetails}>
              <div className={styles.commitmentItems}>
                <div className={styles.commitmentBullets}>
                  <img
                    className={styles.bulletIcons}
                    alt=""
                    src="/vector-55.svg"
                  />
                </div>
                <div className={styles.provideExpertInstructionUsiWrapper}>
                  <div className={styles.provideExpertInstruction}>
                    Provide expert instruction using The Miwako Method
                  </div>
                </div>
              </div>
              <div className={styles.commitmentDividers} />
              <div className={styles.commitmentItems}>
                <div className={styles.commitmentBullets}>
                  <img
                    className={styles.bulletIcons}
                    alt=""
                    src="/vector-55.svg"
                  />
                </div>
                <div className={styles.provideExpertInstructionUsiWrapper}>
                  <div className={styles.provideExpertInstruction}>
                    Offer a structured learning path with 31 progression levels
                  </div>
                </div>
              </div>
              <div className={styles.commitmentDividers} />
              <div className={styles.commitmentItems}>
                <div className={styles.commitmentBullets}>
                  <img
                    className={styles.bulletIcons}
                    alt=""
                    src="/vector-55.svg"
                  />
                </div>
                <div className={styles.focusOnFive}>
                  Focus on five teaching pillars: Concentration, Discipline,
                  Problem Solving, Time Management, and Confidence
                </div>
              </div>
              <div className={styles.commitmentDividers} />
              <div className={styles.commitmentItems}>
                <div className={styles.commitmentBullets}>
                  <img
                    className={styles.bulletIcons}
                    alt=""
                    src="/vector-55.svg"
                  />
                </div>
                <div className={styles.provideExpertInstructionUsiWrapper}>
                  <div className={styles.provideExpertInstruction}>
                    Aim to advance students 2 math levels ahead of peers
                  </div>
                </div>
              </div>
              <div className={styles.commitmentDividers} />
              <div className={styles.commitmentItems}>
                <div className={styles.commitmentBullets}>
                  <img
                    className={styles.bulletIcons}
                    alt=""
                    src="/vector-55.svg"
                  />
                </div>
                <div className={styles.provideExpertInstructionUsiWrapper}>
                  <div className={styles.provideExpertInstruction}>
                    Improve focus and concentration (up to 120 minutes)
                  </div>
                </div>
              </div>
              <div className={styles.commitmentDividers} />
              <div className={styles.commitmentItems}>
                <div className={styles.commitmentBullets}>
                  <img
                    className={styles.bulletIcons}
                    alt=""
                    src="/vector-55.svg"
                  />
                </div>
                <div className={styles.provideExpertInstructionUsiWrapper}>
                  <div className={styles.provideExpertInstruction}>
                    Prepare students for admission to prestigious universities
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.boxChild} />
          <div className={styles.parentCommitment}>
            <div className={styles.commitmentElements}>
              <img className={styles.vectorIcon} alt="" src="/vector-61.svg" />
              <div className={styles.parentCommitmentWrapper}>
                <h2 className={styles.jamsCommitment}>Parent Commitment</h2>
              </div>
            </div>
            <div className={styles.commitmentDetails}>
              <div className={styles.commitmentItems}>
                <div className={styles.commitmentBullets}>
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector-62.svg"
                  />
                </div>
                <div className={styles.ensureRegularAttendanceAtJWrapper}>
                  <div className={styles.provideExpertInstruction}>
                    Ensure regular attendance at JAMS classes
                  </div>
                </div>
              </div>
              <div className={styles.commitmentDividers} />
              <div className={styles.commitmentItems}>
                <div className={styles.commitmentBullets}>
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector-62.svg"
                  />
                </div>
                <div className={styles.ensureRegularAttendanceAtJWrapper}>
                  <div className={styles.provideExpertInstruction}>
                    Support daily practice (10-15 minutes, 5 days a week)
                  </div>
                </div>
              </div>
              <div className={styles.commitmentDividers} />
              <div className={styles.commitmentItems}>
                <div className={styles.commitmentBullets}>
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector-62.svg"
                  />
                </div>
                <div className={styles.ensureRegularAttendanceAtJWrapper}>
                  <div className={styles.provideExpertInstruction}>
                    Create a suitable environment for practice at home
                  </div>
                </div>
              </div>
              <div className={styles.commitmentDividers} />
              <div className={styles.commitmentItems}>
                <div className={styles.commitmentBullets}>
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector-62.svg"
                  />
                </div>
                <div className={styles.reviewProgressReports}>
                  Review progress reports and attend parent-teacher meetings
                </div>
              </div>
              <div className={styles.commitmentDividers} />
              <div className={styles.commitmentBulletParent}>
                <div className={styles.commitmentItems}>
                  <div className={styles.commitmentBullets}>
                    <img
                      className={styles.vectorIcon1}
                      alt=""
                      src="/vector-62.svg"
                    />
                  </div>
                  <div className={styles.ensureRegularAttendanceAtJWrapper}>
                    <div className={styles.provideExpertInstruction}>
                      Encourage application of learned skills in other subjects
                    </div>
                  </div>
                </div>
                <div className={styles.commitmentDividers} />
                <div className={styles.commitmentItems}>
                  <div className={styles.commitmentBullets}>
                    <img
                      className={styles.vectorIcon1}
                      alt=""
                      src="/vector-62.svg"
                    />
                  </div>
                  <div className={styles.ensureRegularAttendanceAtJWrapper}>
                    <div className={styles.provideExpertInstruction}>
                      Support long-term educational goals and aspirations
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className={styles.commitmentBadgeIcon}
              loading="lazy"
              alt=""
              src="/commitment-badge.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
