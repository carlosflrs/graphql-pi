'use strict';

var express = require("express");
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

var app = express();

var schema = buildSchema(`
    type Query {
        hello: String
    }
    `);

var root = {
    hello: () => 'Hello world!'
};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

const PORT = '1234';
app.listen(PORT);
console.log(`GraphQL running on port ${PORT}...`);
