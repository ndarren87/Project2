var mysql = require('mysql');
var db = require('./db_connections.js');

var connection = mysql.createConnection(db.config);

exports.getAll = function(callback){
    var query = 'SELECT * FROM deckLists;';

    connection.query(query, function(err, result){
        callback(err, result);
    });
};

exports.getinfo = function(deck_Id, callback){
    var query = 'CALL deckLists_getinfo(?)';
    var queryData = [deck_Id];

    connection.query(query, queryData, function(err, result){
        callback(err, result);
    });
};

exports.insert = function(params, callback){
    var query = 'INSERT INTO deckLists (name, numCards, creatures, spells, artifacts, lands, deckStyle_Id) VALUES (?, ?, ?, ?, ?, ?, ?)';

    var queryData = [params.name, params.numCards, params.creatures, params.spells, params.artifacts, params.lands, params.deckStyle_Id];

    connection.query(query, queryData, function(err, result){
        callback(err, result);
    });
};

exports.update = function(params, callback){
    var query = 'UPDATE deckLists SET name = ?, numCards = ?, creatures = ?, spells = ?, artifacts = ?, lands = ?, deckStyle_Id = ? WHERE deck_Id = ?';
    var queryData = [params.name, params.numCards, params.creatures, params.spells, params.artifacts, params.lands, params.deckStyle_Id, params.deck_Id];
    connection.query(query, queryData, function(err, result){
        callback(err, result);
    });
};

exports.delete = function(params, callback){
    var query = 'DELETE FROM deckLists WHERE deck_Id = ?';
    var queryData = [params.deck_Id];
    connection.query(query, queryData, function(err, result){
        callback(err, result);
    });
};
