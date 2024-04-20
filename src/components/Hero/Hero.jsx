import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Karl Magbanua</h1>
        <p className={styles.description}>
        Hello, I'm Karl Caniel Magbanua, a recent graduate from Holy Angel University, 
        specializing in Web Development. With a solid background in Laravel, React, 
        and a keen interest in crafting innovative web solutions, I'm excited to 
        kickstart my career as a PHP Developer. I'm eager to contribute my skills 
        and drive organizational growth while continuously learning and growing in the 
        field.
        </p>
        <div>
          <a href="mailto:karlcaniel23@gmail.com" className={styles.contactBtn}>
            Contact Me
          </a>
          <a href="../../../assets/resume/MagbanuaKarlResume.pdf" className={styles.contactBtn} target="_blank">
            Resume
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
