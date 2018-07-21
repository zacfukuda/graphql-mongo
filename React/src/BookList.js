import React, {Component} from 'react';
import Book from './Book';

class BookList extends Component {

	constructor(props) {
		super(props);
		this.handleRemove = this.handleRemove.bind(this);
	}

	handleRemove(title) {
		this.props.onRemove(title);
	}

	render() {
		return (
			<ul>
				{this.props.books.map(book => (
					<Book key={book._id} title={book.title} author={book.author} onRemove={this.handleRemove} />
				))}
			</ul>
		);
	}
}

export default BookList;