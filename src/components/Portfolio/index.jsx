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
			<div className="games"><Project projectInfo = {Games}/></div>
			<div className="alien"><Project projectInfo = {Alien}/></div>
			<div className="usedcar"><Project projectInfo = {UsedCar}/></div>
			<div className="personal1"><Project projectInfo = {Personal1}/></div>
			<div className="lof"><Project projectInfo = {LOF}/></div>
			<div className="hearthstone"><Project projectInfo = {Hearthstone}/></div>
		</div>
	);
}

export default portfolio;