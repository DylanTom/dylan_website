import React from "react";
import resume from "../../assets/Resume/Resume Fall 22.pdf";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
import resumeImg from "../../assets/resumeImg.png";
import styles from "./index.module.css";
import { Button } from "@mui/material";
import { styled } from "@mui/system";

const StyledButton = styled(Button)({
  borderRadius: '20px',
  border: '1px solid black'
});

function createIcon (link, img_path, alt) {
  return <li>
    <a target = "_blank" rel = "noreferrer" href = {link}>
      <img src = {img_path} alt = {alt} className = {styles.icon} />
    </a>
  </li>
}

const contacts = () => (
  <div className={styles.main}>
    <ul>
      {createIcon("https://github.com/DylanTom", github, "Github")}
      {createIcon("https://linkedin.com/in/dylan-tom", linkedin, "LinkedIn")}
      {createIcon("https://twitter.com/dylantom_13", twitter, "Twitter")}
      {createIcon(resume, resumeImg, "Resume")}
    </ul>
    <StyledButton onClick={() => navigator.clipboard.writeText("dt425@cornell.edu")} className = "button">
      dt425@cornell.edu</StyledButton>
    <p className={styles.text}>&copy;{new Date().getFullYear()} Dylan Tom</p>
  </div>
);

export default contacts;