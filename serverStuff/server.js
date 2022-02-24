var express = require('express');
var { graphqlHTTP }  = require('express-graphql');
var { buildSchema } = require('graphql');

// GraphQL schema
var schema = buildSchema(
    `type Query {
        message: String
        greetings: String
        sayGoodMorning(name: String!): String
    }`);

// Root resolver
var root = {
    message: () => 'Hello World!',
    greetings: function() {
        return "Hello, Pritesh"
    },
    sayGoodMorning: (args)=> {
        return `Good Morning ${args.name}`
    }
};

// Create an express server and a GraphQL endpoint
var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema, //Set schema
    rootValue: root, //set resolver
    graphiql: true //Client access
}));

//Start Server to listen
app.listen(4000, () => console.log('Express GraphQL Server Now Running On http://localhost:4000/graphql'));