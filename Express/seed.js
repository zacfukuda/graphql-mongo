const { MongoClient } = require('mongodb')
const assert = require('assert')
const { dbURL, dbName, collectionName } = require('config')

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
MongoClient.connect(dbURL, function(err, client) {
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