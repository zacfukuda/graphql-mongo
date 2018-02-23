const {
  GraphQLObjectType,
  GraphQLString,
} = require('graphql')

module.exports = new GraphQLObjectType({
	name: 'book',
	fields: {
		_id: {
			type: GraphQLString
		},
		title: {
			type: GraphQLString
		},
		author: {
			type: GraphQLString
		}
	}
})