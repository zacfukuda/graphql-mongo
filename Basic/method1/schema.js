const { GraphQLSchema } = require('graphql')
const QueryType = require('./ObjectType/QueryType')
const MutationType = require('./ObjectType/MutationType')

module.exports = new GraphQLSchema({
	query: QueryType,
	mutation: MutationType
})