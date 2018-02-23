const { buildSchema } = require('graphql')

module.exports = new buildSchema(`
	type Book {
		_id: String
		title: String!
		author: String!
	}

	type Query {
		books: [Book]
	}

	type Mutation {
		addBook(title: String!, author: String!): Book!
		removeBook(title: String!): Book!
	}
`)