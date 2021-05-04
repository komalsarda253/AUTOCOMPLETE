const{Schema} = require( "mongoose" );
const Mongoose = require( "mongoose" )
Mongoose.Promise = global.Promise;
const url = "mongodb://localhost:27017/Restaurants_DB";

let RestaurantsSchema = Schema( {
    name: String,
    address: String,
    items:[String],
}, { collection: "Restaurants" } )


let collection = {};

collection.getRestaurantsCollection = () => {
    return Mongoose.connect( url, { useNewUrlParser: true , useUnifiedTopology: true } ).then( ( database ) => {
        return database.model( 'Restaurants', RestaurantsSchema )
    } ).catch( () => {
        let err = new Error( "Could not connect to Database" );
        err.status = 500;
        throw err;
    } )
}

module.exports = collection;
