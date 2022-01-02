import React from "react";
import resume from "../../assets/Resume/Dylan Tom_Winter 2021.pdf";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
import styles from "./index.module.css";

const contacts = () => (
  <div className={styles.main}>
    <ul className = {styles.list}>
      <div className = {styles.listitem} id="Github">
        <img src={github} alt="Github" className={styles.icon} />
        <a target="_blank" rel="noreferrer" href="https://github.com/DylanTom">
          Github
        </a>
      </div>
      <div className = {styles.listitem} id="LinkedIn">
        <img src={linkedin} alt="LinkedIn" className={styles.icon} />
        <a
          target="_blank"
          rel="noreferrer"
          href="https://linkedin.com/in/dylan-tom"
        >
          LinkedIn
        </a>
      </div>
      <div className = {styles.listitem} id="Twitter">
        <img src={twitter} alt="Twitter" className={styles.icon} />
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/dylantom_13"
        >
          Twitter
        </a>
      </div>
      <div className = {styles.listitem} id="Resume">
        {/* <img src="" alt="Resume" className={styles.icon} /> */}
        <a target="_blank" rel="noreferrer" href={resume}>
          Resume
        </a>
      </div>
    </ul>
    <p>Email: dt425[at]cornell[dot]edu</p>
    <p className = {styles.copy}>&copy; 2021 Dylan Tom</p>
  </div>
);

export default contacts;
