const express = require( 'express' );
const router = express.Router();
const setupUser = require( "../model/setupUser")
const userservice = require( '../service/userslogin' )


router.get( "/setup", ( req, res, next ) => {
    setupUser.userSetup().then( ( data ) => {
        res.send( data )
    } ).catch( err => next( err ) );
})

router.get( '/getDetails/:word', function ( req, res, next ) {
    let word=req.params.word;
    userservice.getDetails( word ).then( function ( userDetails ) {
        console.log(userDetails);
        res.json( userDetails );
    } ).catch( err => next( err ) );
})

module.exports = router;

