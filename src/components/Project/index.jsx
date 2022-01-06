import React from 'react';

class Project extends React.Component {
	render() {
		return (
			<div className="container">
				<a target = '_blank' href={this.props.link}>
					<div className="title">
						<h2>{this.props.title} - {this.props.create}</h2>
					</div>
					{/* <div className="tags">
						<ul>
							<li>{this.props.tags}</li>
						</ul>
					</div> */}
					<div className="time">
						<p>Duration: {this.props.duration}</p>
					</div>
					<div className="summary">
						<p>Summary: {this.props.summary}</p>
					</div>
					<div className="description">
						<ul>
							{this.props.description.map(function(bullet, index) {return <li>{bullet}</li>})}
						</ul>
					</div>
					<div className="image">
						<img src={this.props.img} alt="screenshot" />
					</div>
					<div className="reflect">
						<p>Reflection: {this.props.reflection}</p>
					</div>
				</a>
			</div>
		);
	}
}

export default Project;