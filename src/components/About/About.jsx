import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/educationIcon.png")} alt="Cursor icon" className={styles.iconImage}/>
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
              <h4>Bachelor's/College Degree</h4>
              <p>
              Holy Angel University (HAU) <br/>
              Major: Bachelor Of Science In Information Technology With
              Area Of Specialization In Web Development
              </p>
              <h4>Senior Highschool Diploma</h4>
              <p>
              Holy Angel University (HAU) <br/>
              Field of Study: Academic Track: Science, Technology,
              Engineering and Mathematics (STEM)
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/awardIcon.png")} alt="Cursor icon" className={styles.iconImage}/>
            <div className={styles.aboutItemText}>
              <h3>Achivements</h3>
              <p>
                Dean's Lister 2nd Year 2nd Semester<br/>
                Dean's Lister 3rd Year 1st Semester<br/>
                Dean's Lister 3rd Year 2nd Semester<br/>
                Dean's Lister 4th Year 1st Semester<br/>
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/certificateIcon.png")} alt="Server icon" className={styles.iconImage}/>
            <div className={styles.aboutItemText}>
              <h3>Certifications</h3>
              <p>
              Cisco Introduction To Cyber Security<br/>
              Google Analytics For Beginners<br/>
              Google Introduction To Data Studio<br/>
              Great Learning Introduction To<br/>
              Database And SQL
              Great Learning ChatGPT For Beginners<br/>
              Cisco Networking Academy<br/>
              Cisco Introduction Of IoT<br/>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
