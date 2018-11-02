const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./schema/schema');
const coatschema = require('./schema/schemaCoats');
const cors = require('cors');





//fire up express server
const app = express();

app.use(cors());

//mongodb connection
mongoose.connect('mongodb://127.0.0.1:27017/BikeApp');
mongoose.connection.once('open', ()=> {
    console.log('Mongo is LIVE!!');
});

//graphql schema connection
app.use('/graphql',graphqlHTTP({

    schema,
    coatschema,
    graphiql:true
    
}));


//devserer port
app.listen(1080, ()=> {

    console.log('HD');

});