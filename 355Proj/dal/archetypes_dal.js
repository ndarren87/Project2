var mysql = require('mysql');
var db = require('./db_connections.js');

var connection = mysql.createConnection(db.config);

exports.getAll = function(callback){
    var query = 'SELECT * FROM archetypes;';

    connection.query(query, function(err, result){
        callback(err, result);
    });
};