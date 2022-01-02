import React from 'react';
import Project from '../Project'

const temp = {title:"hi", duration:"3", summary:"it's me", description: "dylan", reflection: "!!!!"};

const portfolio = () => {
	return (
		<div>
			<h1>Portfolio</h1>
			<p>Collection of all projects I have done</p>
			<Project {...temp}/>
		</div>
	);
}

export default portfolio;