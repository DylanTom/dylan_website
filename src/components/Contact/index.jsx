import React from "react";
import resume from "../../assets/Resume/Dylan Tom_Winter 2021.pdf";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
import resumeImg from "../../assets/resumeImg.png";
import styles from "./index.module.css";

const contacts = () => (
  <div className={styles.main}>
    <ul className = {styles.list}>
      <div className = {styles.listitem} id="Github">
        <a target="_blank" rel="noreferrer" href="https://github.com/DylanTom">
          <img src={github} alt="Github" className = {styles.icon} />
          Github
        </a>
      </div>
      <div className = {styles.listitem} id="LinkedIn">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://linkedin.com/in/dylan-tom"
        >
          <img src={linkedin} alt="LinkedIn" className = {styles.icon} />
          LinkedIn
        </a>
      </div>
      <div className = {styles.listitem} id="Twitter">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/dylantom_13"
        >
          <img src={twitter} alt="Twitter" className = {styles.icon} />
          Twitter
        </a>
      </div>
      <div className = {styles.listitem} id="Resume">
        <a target="_blank" rel="noreferrer" href={resume}>
          <img src={resumeImg} alt="Resume" className={styles.icon} />
          Resume
        </a>
      </div>
    </ul>
    <p className = {styles.text}>Email: dt425[at]cornell[dot]edu</p>
    <p className = {styles.text}>&copy; 2021 Dylan Tom</p>
  </div>
);

export default contacts;
