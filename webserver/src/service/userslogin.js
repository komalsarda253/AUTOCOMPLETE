const userDB = require( '../model/userslogin' );
const userService = {}


userService.getDetails=( word )=>{
    return userDB.getDetails( word ).then( ( data )=>{
        if( data )
        return data
        else{
        let err = new Error( "couldn't fetch data" )
        err.status = 404
        throw err
        }
    } )
}


module.exports = userService
