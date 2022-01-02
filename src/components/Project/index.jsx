import React from 'react';

class Project extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="title">
					<h1>{this.props.title}</h1>
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
					<p>{this.props.summary}</p>
				</div>
				<div className="description">
					<p>{this.props.description}</p>
				</div>
				{/* <div className="image">
					<img src={this.props.img} alt="screenshot" />
				</div> */}
				<div className="reflect">
					<p>{this.props.reflection}</p>
				</div>
			</div>
		);
	}
}

export default Project;