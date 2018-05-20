const path = require('path')
const { MongoClient } = require('mongodb')
const { graphql } = require('graphql')
const assert = require('assert')
const { dbURL, dbName, collectionName } = require(path.join(process.cwd(), 'config'))

// GraphQL Schema
const schema = require('./schema.js')

// Connect to DB
MongoClient.connect(dbURL, (err, client) => {
	assert.equal(null, err)
	console.log('Connected successfully to server')

	const db = client.db(dbName)

	// Querying
	var query = '{ books { title, author } }'
	graphql(schema, query, db).then( result => {
		// Simple log
		// console.log(result)

		// Inside data
		// console.log(result.data)

		// In JSON format
		console.log( JSON.stringify(result) )

		client.close();
	})

})