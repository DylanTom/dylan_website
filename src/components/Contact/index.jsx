import React from "react";
import resume from "assets/Resume/DylanTom_Resume_Spring22.pdf";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
import resumeImg from "../../assets/resumeImg.png";
import styles from "./index.module.css";
import { Button } from "@mui/material";

const contacts = () => (
  <div className={styles.main}>
    <ul>
      <li>
        <a target="_blank" rel="noreferrer" href="https://github.com/DylanTom">
          <img src={github} alt="Github" className={styles.icon} />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/dylan-tom">
          <img src={linkedin} alt="LinkedIn" className={styles.icon} />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/dylantom_13">
          <img src={twitter} alt="Twitter" className={styles.icon} />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href={resume}>
          <img src={resumeImg} alt="Resume" className={styles.icon} />
        </a>
      </li>
    </ul>
    <Button onClick={() => navigator.clipboard.writeText("dt425@cornell.edu")} className = "button">
      dt425@cornell.edu</Button>
    <p className={styles.text}>&copy;{new Date().getFullYear()} Dylan Tom</p>
  </div>
);

export default contacts;