const path = require('path')
const {
	GraphQLObjectType,
	GraphQLNonNull,
	GraphQLString
} = require('graphql')
const assert = require('assert')
const BookType = require('./BookType')
const { collectionName } = require(path.join(process.cwd(), 'config'))

module.exports = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		addBook: {
			type: BookType,
			description: 'Add a new book',
			args: {
				title: {
					name: 'Book title',
					type: new GraphQLNonNull(GraphQLString)
				},
				author: {
					name: 'Author of book',
					type: new GraphQLNonNull(GraphQLString)
				}
			},
			resolve: (root, args) => {
				return new Promise( (resolve, reject) => {
					const collection = root.db.collection(collectionName)
					collection.insert({
						title: args.title,
						author: args.author
					}, (err, result) => {
						assert.equal(err, null);
						console.log('New document inserted')
						// console.log(result)
						resolve(result.ops[0])
					})
				})
			}
		},
		removeBook: {
			type: BookType,
			description: 'Remove a new book',
			args: {
				title: {
					name: 'Book title',
					type: new GraphQLNonNull(GraphQLString)
				}
			},
			resolve: (root, args) => {
				return new Promise( (resolve, reject) => {
					const collection = root.db.collection(collectionName)
					collection.findOneAndDelete({
						title: args.title
					}, (err, result) => {
						assert.equal(err, null);
						console.log('Matched document removed.')
						// console.log(result)

						// Document data is joined as "value"
						resolve(result.value)
					})
				})
			}
		}
	}
})