import React from 'react';
import styles from './index.module.css';
import { Button } from '@mui/material';

const Project = (props) => {
	return (
		<div className={styles.container}>
			<a target = '_blank' href={props.projectInfo.link} className={styles.links}>
				<div className={styles.title}>
					<h2>{props.projectInfo.title} - {props.projectInfo.create}</h2>
				</div>
				<div className={styles.time}>
					<p>Duration: {props.projectInfo.duration}</p>
				</div>
				<div className={styles.summary}>
					<p>Summary: {props.projectInfo.summary}</p>
				</div>
				<div className={styles.description}>
					<ol>
						{props.projectInfo.description.map(e => <li>{e}</li>)}
					</ol>
				</div>
				<div className={styles.images}>
					<ul>
						{props.projectInfo.img.map(e => <img src = {e} alt = "screenshot" className={styles.image}/>)}
					</ul>
				</div>
				<div className={styles.reflect}>
					<p>Reflection: {props.projectInfo.reflection}</p>
				</div>
			</a>
				<div className={styles.tag}>
					<ul>
						{props.projectInfo.tags.map(e => <li><Button>{e}</Button></li>)}
					</ul>
				</div>
		</div>
	);
}

export default Project;