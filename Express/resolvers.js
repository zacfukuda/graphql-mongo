const Book = require('./MongooseModel/Book')

const resolvers = {
	hello: (args, context) => {
		return context.greeting
	},
	books: async (args, context) => {
		// See "greeting: 'Hello world!'" in Terminal
		console.log(context)

		return (await Book.find())
	},
	addBook: async (args, context) => {
		var newBook = new Book({
			title: args.title,
			author: args.author
		})

		var err = await newBook.save()

		if (err) return err
		return newBook
	},
	removeBook: async (args, context) => {
		var doc = await Book.findOneAndRemove({
			title: args.title
		})

		return doc
	}
}

module.exports = resolvers