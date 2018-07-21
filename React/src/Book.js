import React, {Component} from 'react';

class Book extends Component {
	
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		const title = e.target.value;

		// Here below, the app use "title" value to determine which book to be removed.
		// This is due to the fact that when non-react Graphql app was developed previously, there is no easy way to find out "_id".
		// In practical app, "_id" must be used to identify which book to be removed.
		this.props.onRemove(title);
	}

	render() {
		return(
			<li key={this.props._id}>{this.props.title}, <em>{this.props.author}</em> <button type="button" value={this.props.title} onClick={this.handleClick}>x</button></li>
		);
	}
}

export default Book;