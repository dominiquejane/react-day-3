import React from 'react';

var About = React.createClass({
	render() {
		return (
			<div>
				ABOUT 
				{this.props.params.name}
			</div>

		)
	}
});

export default About;