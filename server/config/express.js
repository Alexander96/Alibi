var express = require( 'express' ),
    bodyParser = require( 'body-parser' ),
    cookieParser = require( 'cookie-parser' ),
    session = require( 'express-session' ),
    path = require('path');

module.exports = function (app) {
    app.set( 'view engine', 'jade' );
    app.set( 'views', path.normalize(__dirname + '/../..') + '/server/views' );
    app.use( cookieParser('grannysbushes') );
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use( session(
        {
            store: app.sessionStore,
            secret: 'grannysbushes',
            resave: true,
            saveUninitialized: true,
            key: 'express.sid'
        }
        ) );
    app.use( express.static( path.normalize(__dirname + '/../..') + '/public' ) );
}