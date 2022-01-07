import React from 'react';
import Project from '../Project';
import Alien from './indiv/alien.json';
import Games from './indiv/games.json';
import UsedCar from './indiv/usedcar.json';
import Personal1 from './indiv/personal1.json';
import LOF from './indiv/lof.json';
import Hearthstone from './indiv/hearthstone.json';
import styles from './index.module.css';

const portfolio = () => {
	return (
		<div className={styles.main}>
			<div className={styles.header}>
				<h1>Portfolio</h1>
				<p>Collection of all projects I have done</p>
			</div>
			<div className={styles.projects}>
				<div className="games"><Project projectInfo = {Games}/></div>
				<div className="alien"><Project projectInfo = {Alien}/></div>
				<div className="usedcar"><Project projectInfo = {UsedCar}/></div>
				<div className="personal1"><Project projectInfo = {Personal1}/></div>
				<div className="lof"><Project projectInfo = {LOF}/></div>
				<div className="hearthstone"><Project projectInfo = {Hearthstone}/></div>
			</div>
		</div>
	);
}

export default portfolio;