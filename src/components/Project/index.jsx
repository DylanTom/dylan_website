import React from 'react';
import styles from './index.module.css';

class Project extends React.Component {
	render() {
		return (
			<div className={styles.container}>
				<a target = '_blank' href={this.props.projectInfo.link} className={styles.links}>
					<div className={styles.title}>
						<h2>{this.props.projectInfo.title} - {this.props.projectInfo.create}</h2>
					</div>
					<div className={styles.time}>
						<p>Duration: {this.props.projectInfo.duration}</p>
					</div>
					<div className={styles.summary}>
						<p>Summary: {this.props.projectInfo.summary}</p>
					</div>
					<div className={styles.description}>
						<ol>
							{this.props.projectInfo.description.map(e => <li>{e}</li>)}
						</ol>
					</div>
					<div className={styles.images}>
						<ul>
							{this.props.projectInfo.img.map(e => <img src = {e} alt = "screenshot" className={styles.image}/>)}
						</ul>
					</div>
					<div className={styles.reflect}>
						<p>Reflection: {this.props.projectInfo.reflection}</p>
					</div>
				</a>
					<div className={styles.tag}>
						<ul>
							{this.props.projectInfo.tags.map(e => <li><button>{e}</button></li>)}
						</ul>
					</div>
			</div>
		);
	}
}

export default Project;