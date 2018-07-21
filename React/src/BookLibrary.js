import React, {Component} from 'react';
import BookList from './BookList';
import AddForm from './AddForm';

class BookLibrary extends Component {

	constructor(props) {
		super(props);
		this.state = { books: []};
		this.componentDidMount = this.componentDidMount.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {

		// "books" data below was initial data before implementing fetch(),
		// being used for checking whther data was passed to child "BookList".
		/* let books = [
			{_id: '1', title: 'David and Goliath', author: 'Malcolm Gladwell'},
			{_id: '2', title: 'Steve Jobs', author: 'Walter Isaacson'}
		]; */

		// See how to fetch(): https://github.com/github/fetch
		const option = {
			method: 'POST',
			headers: { 'Content-Type': 'application/graphql' },
			body: '{ books {_id, title, author} }'
		}
		fetch('/graphql', option).then( res => {
			return res.json();
		}).then( json => {
			this.setState({books: json.data.books});
		});
	}

	async handleRemove(title) {

		const query = `mutation {
			removeBook (title: "${title}") {
				_id
			}
		}`;

		const option = {
			method: 'POST',
			headers: { 'Content-Type': 'application/graphql' },
			body: query
		};

		const res = (await fetch('/graphql', option));
		const json = (await res.json());
		const removeBook = json.data.removeBook;
		const books = this.state.books;

		// Remove book that matches _id from array
		const index = books.findIndex( book => book._id === removeBook._id );
		if ( index !== -1 ) {
			books.splice(index, 1);
			this.setState({books: books});
		}
	}

	async handleSubmit(data) {

		const query = `mutation {
			addBook (title: "${data.title}", author: "${data.author}") {
				_id
				title
				author
			}
		}`;

		const option = {
			method: 'POST',
			headers: { 'Content-Type': 'application/graphql' },
			body: query
		}

		const res = (await fetch('/graphql', option));
		const json = (await res.json());
		const newBook = json.data.addBook;
		const books = this.state.books;
		const newBooks = books.concat(newBook);
		
		this.setState({books: newBooks});
	}

	render() {
		return(
			<div>
				<h3>Book Library</h3>
				<BookList books={this.state.books} onRemove={this.handleRemove} />
				<AddForm onSubmit={this.handleSubmit} />
			</div>
		);
	}
}

export default BookLibrary;