const Mongoose = require('mongoose');
const { ApolloServer} = require('apollo-server');
const {typeDefs, resolvers} = require('./schema');
Mongoose.connect('mongodb://haydenrahn:Helenzzing33@ds253871.mlab.com:53871/testmongo').then(()=>{
 
    return new ApolloServer({ typeDefs, resolvers }).listen()
    .then(({ url }) => {
     console.log(`🚀  Server ready at ${url}`);
   });

}).catch(console.error)