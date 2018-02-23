const { MongoClient } = require('mongodb')
const assert = require('assert')

// Connection URL
const url = 'mongodb://localhost:27017'

// Database Name
const dbName = 'graphql'
const collectionName = 'books'

// Connect to the server
MongoClient.connect(url, function(err, client) {
	assert.equal(null, err)
	console.log('Connected successfully to server')

	const db = client.db(dbName)
	const collection = db.collection(collectionName)

	collection.deleteMany({title: 'Good to Great'}, (err, result) => {


		client.close()
	})
})