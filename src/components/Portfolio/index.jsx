import React from 'react';
import Project from '../Project';
import Alien from './indiv/alien.json';
import Games from './indiv/games.json';
import UsedCar from './indiv/usedcar.json';
import Personal1 from './indiv/personal1.json';
import LOF from './indiv/lof.json';
import Hearthstone from './indiv/hearthstone.json';

const portfolio = () => {
	return (
		<div className='main'>
			<h1>Portfolio</h1>
			<p>Collection of all projects I have done</p>
			<Project {...Games} />
			<Project {...Alien}/>
			<Project {...UsedCar} />
			<Project {...Personal1}/>
			<Project {...LOF}/>
			<Project {...Hearthstone}/>
		</div>
	);
}

export default portfolio;