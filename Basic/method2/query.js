const path = require('path')
const mongoose = require('mongoose')
const { graphql } = require('graphql')
const { dbURL, dbName } = require(path.join(process.cwd(), 'config'))

// GraphQL Schema
const schema = require('./schema')

// Resolvers
const resolvers = require('./resolvers')

// Connect to DB
mongoose.connect(dbURL + '/' + dbName)

// Querying
var query = '{ books { title, author } }'
graphql(schema, query, resolvers).then( (response) => {
	// Simple log
	// console.log(response)

	// Inside data
	// var data = response.data
	// console.log(data)

	// In JSON format
	console.log( JSON.stringify(response) )

	// Disconnect from DB
	mongoose.connection.close()
})