import React, {Component} from 'react';

class AddForm extends Component {

	constructor(props) {
		super(props);
		this.state = { title: '', author: ''};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		const target = e.target;
		const name = target.name;
		const value = target.value;

		this.setState({
			[name]: value
		});
	}

	handleSubmit(e) {
		e.preventDefault();

		// Working with form with React: https://reactjs.org/docs/forms.html
		if ( !this.state.title || !this.state.author) return;

		const data = {
			title: this.state.title,
			author: this.state.author
		}

		this.setState({title: '', author:''});
		this.props.onSubmit(data);
	}

	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				<label>Title</label>: <input type="text" name="title" value={this.state.title} onChange={this.handleChange} /><br />
				<label>Author</label>: <input type="text" name="author" value={this.state.author} onChange={this.handleChange} /><br />
				<input type="submit" value="Add" />
			</form>
		);
	}
}

export default AddForm;