# Introduction to GraogQL + MongoDB: Basic

The basic code to work with [GraogQL](http://graphql.org/) and [MongoDB](https://www.mongodb.com/) in terminal. The  `graghql`, `mongodb`, or  `mongoose` in the method 2, are the only dependencies that are being used.

## Two ways to use [GraphQL.js](http://graphql.org/graphql-js/)

### 1. [GraphQLObjectType](http://graphql.org/graphql-js/type/#graphqlobjecttype)

The method 1 is to use `GraphQLObjectType`, which is the original way to create GrapQL API, requires more work than the method 2. This method is good only when you want to understand the concept of GraphQL.

### 2. [buildSchema](http://graphql.org/graphql-js/utilities/#buildschema)

The method 2 is `buildSchema`, which creates a GraphQLSchema object from GraphQL schema language. As you will see, the method 2 is easier than the method 1 and more preferable—if you do not want to use other extra GraphQL-related packages.
This methods uses Mongoose to establish a connection to database.

## Get started

```bash
# In another terminal window
# Run MongoDB deamon
$ mongod

# Change your working directory
$ cd /PATH/TO/Basic

# Install packages
$ yarn

# Generate initial data
$ yarn seed
# or
$ node seed.js
```

The `yarn seed` will generate data of two books to the `books` collection of the `graghql` database. Please be careful not to reuse your exisiting collection or database. The names of collection and database are set in `config.js`.

## Scripts

- query: Retrieves data from database.
- query2: Does same as `query`.
- add: Adds new data to database.
- add2: Does same as `add`.
- remove: Remove particular data(one document) that matches arguments from database.
- remove2: Does same as `remove`.

```bash
$ yarn SCRIPT
```

## Resources
- http://graphql.org/graphql-js/
- https://www.compose.com/articles/using-graphql-with-mongodb/
- https://medium.com/the-ideal-system/graphql-and-mongodb-a-quick-example-34643e637e49