const path = require('path')
const {
  GraphQLObjectType,
  GraphQLList,
} = require('graphql')
const BookType = require('./BookType')
const { dbURL, dbName, collectionName } = require(path.join(process.cwd(), 'config'))

module.exports = new GraphQLObjectType({
	name: 'Query',
	fields: {
		books: {
			type: new GraphQLList(BookType),
			resolve: (db) => {
				return new Promise( (resolve, reject) =>{
					const collection = db.collection( collectionName )
					collection.find().toArray((err, docs) => {
						if (err) reject(err)
						else resolve(docs)
					})
				})
			}
		}
	}
})