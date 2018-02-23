const Book = require('./MongooseModel/Book')

const resolvers = {
	books: async () => {
		return (await Book.find())
		
		// Synchronous method
		// var query = Book.find()
		// return query
	},
	addBook: async (args, context, info) => {
		// console.log(context)
		
		var newBook = new Book({
			title: args.title,
			author: args.author
		})

		// Save a new book to DB
		var err = await newBook.save()

		if (err) return err
		return newBook
	},
	removeBook: async (args, info) => {
		var doc = await Book.findOneAndRemove({
			title: args.title
		})

		return doc
	}
}

module.exports = resolvers