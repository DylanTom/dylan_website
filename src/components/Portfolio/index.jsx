import React from 'react';
import { Grid } from '@mui/material';
import Project from '../Project';
import Personal3 from '../../indiv/personal3.json';
import FJ from '../../indiv/fj.json';
import Alien from '../../indiv/alien.json';
import Games from '../../indiv/games.json';
import UsedCar from '../../indiv/usedcar.json';
import Personal1 from '../../indiv/personal1.json';
import LOF from '../../indiv/lof.json';
import Hearthstone from '../../indiv/hearthstone.json';
import styles from './index.module.css';

const portfolio = () => {
	const JSONINFO = [Personal3, FJ, Games, Alien, UsedCar, Personal1, LOF, Hearthstone]
	const JSONINFOMap = JSONINFO.map((e) => {
		return <Grid item xs={1}><Project projectInfo={e} /></Grid>
	});
	return (
		<div className={styles.main}>
			<div className={styles.header}>
				<h1>Portfolio</h1>
				<p>Collection of all projects I have done</p>
			</div>
			<div className={styles.projects}>
				<Grid container columns={2}>
					{JSONINFOMap}
				</Grid>
			</div>
		</div>
	);
}

export default portfolio;