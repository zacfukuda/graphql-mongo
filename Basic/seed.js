const { MongoClient } = require('mongodb')
const assert = require('assert')

// Connection URL
const url = 'mongodb://localhost:27017'

// Database Name
const dbName = 'graphql2'
const collectionName = 'books'

let books = [
	{
		'title': 'David and Goliath',
		'author': 'Malcolm Gladwell'
	},
	{
		'title': 'Steve Jobs',
		'author': 'Walter Isaacson'
	}
]

// Connect to the server
MongoClient.connect(url, function(err, client) {
	assert.equal(null, err)
	console.log('Connected successfully to server')

	const db = client.db(dbName)
	const collection = db.collection(collectionName)

	collection.insertMany(books, (err, result) => {
		if (err) {
			console.log(err)
		} else {
			console.log('Documents inserted!')
		}

		client.close()
	})
})