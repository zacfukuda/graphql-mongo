# Introduction to GraphQL + MongoDB: React

Sample React.js & [GraphQL](http://graphql.org/) application that communicates with [MongoDB](https://www.mongodb.com/). [Express.js](https://expressjs.com/) and [Mongoose](mongoosejs.com/) are being used to make the app more practical.

## Before getting started
This application is built upon the GraphQL & MongoDB application which you can find in [the other folder of same repository](https://github.com/zacfukuda/graphql-mongo/tree/master/Express).

## Getting started
While running the application, please make sure that your local MongoDB is up running.

```bash
$ mongod
```

Change your working directory in Terminal and install NPM packages:

```bash
$ cd /PATH/TO/graphql-mongo/Express
$ yarn
```

You can run front-end React app and Backend-end GraphQL server with the separate commands, but with the support of [npm-run-all](https://www.npmjs.com/package/npm-run-all) you can run two apps with one command:

```bash
$ yarn parallel
```

Or if you prefer run apps separetely

```bash
$ yarn start
$ yarn server
```

React application will be run at [http://localhost:3000](http://localhost:3000) and GraphQL server will be run at [http://localhost:4000/graphql](http://localhost:4000/graphql).

The React part of application was initially made with `create-react-app`. Thus running `yarn parallel` or `yarn start` will automatically open your browser guiding to the proper URL.

The files under the `server` were copied from [Express](https://github.com/zacfukuda/graphql-mongo/tree/master/Express) folder of this repository and no modification was made.

## Attention

### MongoDB’s db name
By default, the application uses a database named `graphql`. Since it is a common name, if you would like to change then name of the database to use, please update `./server/config.js` file.

### Proxying
Since this is a sample application, the apps are saparated into two parts: React front-end app and GraphQL back-end app. Your React application proxies API requests at `/graphql` to `http://localhost:4000` to handle GraphQL queries. This can be done simply by adding `proxy` field to `package.json`. For more information about proxying with `create-react-app`, please refer to their official documentation *[Proxying API Requests in Development](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#proxying-api-requests-in-development)*.

## Resources
- https://graphql.org/graphql-js/
- https://www.compose.com/articles/using-graphql-with-mongodb/