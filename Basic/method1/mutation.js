const { MongoClient } = require('mongodb')
const { graphql } = require('graphql')
const assert = require('assert')
const { dbURL, dbName, collectionName } = require('./config')

// GraphQL Schema
const schema = require('./schema.js')

// Connect to DB
MongoClient.connect(dbURL, (err, client) => {
	assert.equal(null, err)
	console.log('Connected successfully to server')

	const root = {
		db: client.db(dbName)
	}

	// Querying (Mutation)
	let query = `mutation {
		addBook(
			title: "Good to Great",
			author: "Jim Collins"
		) {
			title, author
		}
	}`
	graphql(schema, query, root).then( result => {
		/// Simple log
		// console.log(result)

		// Inside data
		// console.log(result.data)

		// In JSON format
		console.log( JSON.stringify(result) )

		client.close()
	})
})