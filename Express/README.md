# Introduction to GraphQL + MongoDB: Express

Sample application to run [GraphQL](http://graphql.org/) API server with [Express.js](https://expressjs.com/) to communicate with [MongoDB](https://www.mongodb.com/). [Mongoose](mongoosejs.com/) is being used to make a connection to database.

## Before getting started
This application is Express version of sample program [Introduction to GraphQL + MongoDB: Basic](https://github.com/zacfukuda/graphql-mongo/tree/master/Basic), which is located in the different directory of this repository. (The tutorial of *Basic* program is also available at [GraphQL + MongoDB Tutorial: Basic – Query](https://www.mokuji.me/article/graphql-mongo-basic1) and [GraphQL + MongoDB Tutorial: Basic – Mutation](https://www.mokuji.me/article/graphql-mongo-basic2))

You can easily run this application, but following *Basic* benefits readers in regard to understand the basic concept of GraphQL–MongoDB relation.

## Getting started
While running the application, please make sure that your local MongoDB is up running.

```bash
$ mongod
```

Change your working directory in Terminal and install NPM packages

```bash
$ cd /PATH/TO/graphql-mongo/Express
$ yarn
```

If you have not tested *Basic* program, you have seed the initial data.

```bash
$ node seed.js
```

> By default, the application use database named `graphql`. Since it is a common name, if you already have the database in the same name, please modify `dbName` written in `./config.js` file.

Run express server with `yarn start`. (This script uses [Nodemon]https://github.com/remy/nodemon to monitor file changes.)

```bash
$ yarn start
# or
$ node server.js
```

Open [GraphiQL](https://github.com/graphql/graphiql) at [http://localhost:4000/graphql](http://localhost:4000/graphql).

## Query Example

### Query:

```
{ hello }
```

```
{ books { _id, title, author } }
```

### Mutation

Adding new book:

```
mutation {
  addBook (title: "The Intelligent Investor", author: "Benjamin Graham") {
    _id
    title
    author
  }
}
```

Removing book that matches a given title:
```
mutation {
  removeBook (title: "The Intelligent Investor") {
    _id
    title
    author
  }
}
```

## Resources
- https://graphql.org/graphql-js/
- https://graphql.org/graphql-js/running-an-express-graphql-server/
- https://www.compose.com/articles/using-graphql-with-mongodb/
- https://medium.com/the-ideal-system/graphql-and-mongodb-a-quick-example-34643e637e49