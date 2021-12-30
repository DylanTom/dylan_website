import React from 'react';
import resume from '../../assets/Resume Fall 21.pdf';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import twitter from '../../assets/twitter.png';
import styles from './index.module.css';

export default () => (
	<div className={styles.main}>
		<ul>
			<div id = "Github">
				<img src={github} alt="Github" className={styles.icon}/>
				<a target = '_blank' href='https://github.com/DylanTom'>Github</a>
			</div>
			<div id = "LinkedIn">
				<img src={linkedin} alt="LinkedIn" className={styles.icon}/>
				<a target = '_blank' href="https://linkedin.com/in/dylan-tom">LinkedIn</a>
			</div>
			<div id="Twitter">
				<img src={twitter} alt="Twitter" className={styles.icon} />
				<a target = '_blank' href="https://twitter.com/dylantom_13">Twitter</a>
			</div>
			<div id = "Resume">
				{/* <img src="" alt="Resume" className={styles.icon} /> */}
				<a target = '_blank' href={resume}>Resume</a>
			</div>
		</ul>
	</div>
)