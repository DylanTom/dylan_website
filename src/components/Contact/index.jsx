import React from 'react';
import resume from '../../assets/Resume Fall 21.pdf'
import styles from './index.module.css';

export default () => (
	<div className={styles.main}>
		<div id = "Github">
			<img src="" alt="" className={styles.button}/>
			<a target = '_blank' href='https://github.com/DylanTom'>Github</a>
		</div>
		<div id = "LinkedIn">
			<a target = '_blank' href="https://linkedin.com/in/dylan-tom">LinkedIn</a>
		</div>
		<div id="Twitter">
			<a target = '_blank' href="https://twitter.com/dylantom_13">Twitter</a>
		</div>
		<div id = "Resume">
			<a target = '_blank' href={resume}>Resume</a>
		</div>
	</div>
)