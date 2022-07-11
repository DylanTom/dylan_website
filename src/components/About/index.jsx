import React from "react";
import me from "../../assets/pfp.png";
import styles from "./index.module.css";

const main = () => (
  <div className={styles.about}>
    <h1>Hi I'm Dylan! </h1>
    <h1> Software Engineer and System Designer</h1>

    <p>
      I am currently a sophomore at Cornell University,
      class of 2025. I am from Queens, NY and I love food, traveling, sports, video games, and planes. I also graduated from Bronx Science in 2021. Read below to learn more about me! If you have any questions, shoot me an email or connect with me on LinkedIn.
    </p>

    <p>
      <b>What am I doing right now?</b> Currently, I am taking functional programming, real analysis, and digital logic &amp; computer organization. I am also working on a few personal projects right now:
      <ul>
        <li>Reservations Required: a web app to streamline reserving spaces at Cornell</li>
        <li>PCA: a web app to host datasets for pediatric skeletal muscle. Working in collaboration with Lek Lab @ Yale University</li>
        <li>Becoming AWS Cloud Developer certified</li>
      </ul>
    </p>

    <p>
      <b>What do I enjoy doing?</b> As of 2022, I want to study computer science and mathematics with a concentration in software engineering and web development. I also intend to pursue a business minor. I might have some data science, machine learning, and other scripts
      sprinkled into this website. As I continue in my college career and personal development, I want to explore all fields of computer science as I find it very interesting.  
    </p>
    
    <p>
      <b>What did I use to do?</b> I don't even know where to begin. Let's start off with Bronx Science. I played trumpet for four years during high school and two years in middle school. I enjoy traveling and learning about different cultures. I've been to England, Iceland, France, Norway, Spain, Italy, Mexico, the Caribbean, China, Japan, and Canada. I hope to travel to more places after COVID settles down. Maybe (strong emphasis on the maybe) you will see a blog page pop up. 
    </p>

    <p>
      <b>See "Portfolio".</b> It is all the projects
      I have put significant time into. They may be good and they may be bad.
      When I look back at it in the future I hope that I can see where I came
      from. More importantly, while these projects may not be the best, I hope
      to showcase the little bits I learned from each project and give a
      reflection of what I learned and what I can improve on. My goal is see growth as I do more and more projects.
    </p>

    <p>
      <b>Note: </b>This is the third iteration of my personal website. Version 1 can be seen in the portfolio section. This was a very barebone attempt at making a website. It included basic HTML and CSS. It never became a final project as the way the website was implemented made it difficult to mutate or adjust certain settings. The next iteration is a portfolio hosted on GitHub, <a href = "https://dylantom.github.io/dylan-portfolio/">here</a>. Rather than focusing on web development, I chose to show the projects I have worked on. This was a good intermediate stage as it allowed me to quickly add projects by using simple markdown. During the winter of 2021 and summer of 2022, I devoted my time to making this website, which includes using React, implementing an object oriented approach, and hopefully by the time you are reading this - deploying the website. 
    </p>

    <p>Here's a recent (Oct 2021) picture of me...</p>

    <img src={me} className={styles.pfp} alt="me!" />
  </div>
);

export default main;
