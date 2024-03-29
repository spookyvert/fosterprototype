var React = require('react');

var JoinSpeaker = React.createClass({

	start() {
		var speakerName = React.findDOMNode(this.refs.name).value;
		var title = React.findDOMNode(this.refs.title).value;
		this.props.emit('start', { name: speakerName, title: title });
	},

	render() {
		return (
			<form action="javascript:void(0)" onSubmit={this.start}>

				<label>Full Name</label>
				<input ref="name"
					   className="form-control"
				       placeholder="Enter your full name..."
				       required />

				<label>Address field</label>
				<input ref="title"
					   className="form-control"
				       placeholder="Enter address...."
				       required />

				<button className="btn btn-primary">Join</button>

			</form>
		);
	}

});

module.exports = JoinSpeaker;
