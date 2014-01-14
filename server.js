var express = require('express');
var app = express();
var os = require('os');

app.get( '/', function( req, res ){

    res.send( '<h1>Hi!</h1><br><p>Node app is live at ' + process.pid + '.'  );

});

app.listen( 80 );
