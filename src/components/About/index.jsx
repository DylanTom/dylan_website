import React from "react";
import me from "../../assets/pfp.JPG";
import styles from "./index.module.css";

export default () => (
	<div className={styles.about}>
		<p>Hi! My name's Dylan and I am currently a freshman at Cornell University, Class of 2025. I am from Queens, NY and I love food and traveling. I went to Bronx Science from 2017-2021. Read below to find more about me! If you have any questions, shoot me an email or connect with me.</p>

		<p>
		What do I enjoy doing? As of 2021, I want to study computational biology and computer science. One skill I hope to learn is some data visualization. Right now, I only know how to make basic graphs but would like to have a formal introduction to better communicate my data analysis. So, I might have some data science, machine learning, and other scripts sprinkled into this website. I do want to try a bit of software development so this will just be a collection of everything!
		</p>

		<img src={me} className = {styles.pfp} alt="A picture of me!" />

		<p>Below is what I would like to call my "portfolio". It is all the projects I have put siginficant time into. They may be good and they may be bad. When I look back at it in the future I hope that I can see where I came from. More importantly, while these projects may not be the best, I hope to showcase the little bits I learned from each project and give a reflection of what I learned and what I can improve on. My goal in the future is to be able to see if I improved from my personal reflections.</p>
	</div>
)