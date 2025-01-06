import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                As a passionate Front-End Engineer dedicated
                to creating beautiful, responsive, and user-friendly web
                applications, I specialize in building interactive interfaces
                with modern technologies like React.js, ensuring performance
                optimization, and delivering seamless user experiences across
                all devices.<br /> My expertise includes API integration,
                accessibility compliance, and collaborating with
                cross-functional teams to bring ideas to life.<br /> I thrive on
                solving challenges, making the web accessible, and crafting
                digital experiences that leave a lasting impression.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
