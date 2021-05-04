const connection = require( "../utilities/connections" )
const usersDB = {}

usersDB.getDetails = ( word ) => {
    return connection.getRestaurantsCollection().then( ( collection ) => {
            return collection.find( {
                "$or": [{name: {$regex: word, "$options": "i"}}, {address: {"$regex": word, "$options": "i"}}, { items:  {"$regex": word, "$options": "i"}} ]
              }).then( ( data ) => {
                if( data ) {
                    return data
                }
                else{
                    return null
                }
            } )
    })
}

module.exports = usersDB;
