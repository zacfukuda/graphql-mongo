# Introduction to GraphQL + MongoDB: Basic

Basic code to try [GraphQL](http://graphql.org/) with [MongoDB](https://www.mongodb.com/) from Terminal. The  `graghql`, `mongodb`, and `mongoose` in the method 2, are the only dependencies being used.

The tutorial is available at…

- [GraphQL + MongoDB Tutorials: Basic – Query](https://www.mokuji.me/article/graphql-mongo-basic1)
- [GraphQL + MongoDB Tutorials: Basic – Mutation](https://www.mokuji.me/article/graphql-mongo-basic2)

## Two ways to use [GraphQL.js](http://graphql.org/graphql-js/)

### 1. [GraphQLObjectType](http://graphql.org/graphql-js/type/#graphqlobjecttype)

The method 1 is to use `GraphQLObjectType`, which is the original way to create GrapQL API, requires more work than the method 2. This method is good only when you want to understand the concept of GraphQL.

### 2. [buildSchema](http://graphql.org/graphql-js/utilities/#buildschema)

The method 2 is to use `buildSchema`, which creates a GraphQLSchema object from GraphQL schema language. As you will see, the method 2 is easier than the method 1 and more preferable—if you do not want to use other extra GraphQL-related packages.
In method 2, Mongoose is being used to establish a connection with database.

## Get started

```bash
# In another terminal window
# Run MongoDB deamon
$ mongod

# Change your working directory
$ cd /PATH/TO/graphql-mongo/Basic

# Install packages
$ yarn

# Generate initial data
$ yarn seed
# or
$ node seed.js
```

The `yarn seed` will generate data of two books to the `books` collection of the `graghql` database. Please be careful not to reuse your exisiting collection or database. The names of collection and database are set in `config.js`.

## Scripts

- `yarn query`: Retrieves data from database.
- `yarn query2`: Does same as `query` script.
- `yarn mutation`: Adds new data to database.
- `yarn mutation2`: Does the same as `mutation`.
- `yarn mutationRemove`: Remove particular data(one document) that matches arguments from database.
- mutationRemove2: Does the same as `mutationRemove`.

```bash
$ yarn SCRIPT
```

## Resources
- http://graphql.org/graphql-js/
- https://www.compose.com/articles/using-graphql-with-mongodb/
- https://medium.com/the-ideal-system/graphql-and-mongodb-a-quick-example-34643e637e49