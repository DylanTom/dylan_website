import React from 'react';

class Project extends React.Component {
	render() {
		return (
			<div className="container">
				<a target = '_blank' href={this.props.projectInfo.link}>
					<div className="title">
						<h2>{this.props.projectInfo.title} - {this.props.projectInfo.create}</h2>
					</div>
					<div className="time">
						<p>Duration: {this.props.projectInfo.duration}</p>
					</div>
					<div className="summary">
						<p>Summary: {this.props.projectInfo.summary}</p>
					</div>
					<div className="description">
						<ol>
							{this.props.projectInfo.description.map(e => <li>{e}</li>)}
						</ol>
					</div>
					{/* <div className="image">
						<ul>
							{this.props.projectInfo.img.map(e => <img src = {e} alt = "screenshot" />)}
						</ul>
					</div> */}
					<div className="reflect">
						<p>Reflection: {this.props.projectInfo.reflection}</p>
					</div>
					<div className="tags">
						<ul>
							{this.props.projectInfo.tags.map(e => <li>{e}</li>)}
						</ul>
					</div>
				</a>
			</div>
		);
	}
}

export default Project;