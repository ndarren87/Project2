var mysql = require('mysql');
var db = require('./db_connections.js');

var connection = mysql.createConnection(db.config);

exports.getAll = function(callback){
    var query = 'SELECT * FROM sideboard;';

    connection.query(query, function(err, result){
        callback(err, result);
    });
};

exports.getinfo = function(sideboard_Id, callback){
    var query = 'CALL sideboard_getinfo(?)';
    var queryData = [sideboard_Id];

    connection.query(query, queryData, function(err, result){
        callback(err, result);
    });
};

exports.insert = function(params, callback){
    var query = 'INSERT INTO sideboard (deckAgainst, description, creatures, spells, artifacts, lands, deck_Id) VALUES (?, ?, ?, ?, ?, ?, ?)';

    var queryData = [params.deckAgainst, params.description, params.creatures, params.spells, params.artifacts, params.lands, params.deck_Id];

    connection.query(query, queryData, function(err, result){
        callback(err, result);
    });
};

exports.update = function(params, callback){
    var query = 'UPDATE sideboard SET deckAgainst = ?, description = ?, creatures = ?, spells = ?, artifacts = ?, lands = ?, deck_Id = ? WHERE sideboard_Id = ?';
    var queryData = [params.deckAgainst, params.description, params.creatures, params.spells, params.artifacts, params.lands, params.deck_Id, params.sideboard_Id];
    connection.query(query, queryData, function(err, result){
        callback(err, result);
    });
};

exports.delete = function(params, callback){
    var query = 'DELETE FROM sideboard WHERE sideboard_Id = ?';
    var queryData = [params.sideboard_Id];
    connection.query(query, queryData, function(err, result){
        callback(err, result);
    });
};