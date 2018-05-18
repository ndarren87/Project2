var mysql = require('mysql');
var db = require('./db_connections.js');

var connection = mysql.createConnection(db.config);

exports.getOne = function(callback){
    var query = 'select deck_Id, name, deckStyle_Id\n' +
        '\tfrom deckLists d\n' +
        '    where deckStyle_Id < (\n' +
        '\t\tselect AVG(deckstyle_Id)\n' +
        '\t\tfrom deckStyle);';

    connection.query(query, function(err, result){
        callback(err, result);
    });
};

exports.getTwo = function(callback){
    var query = 'select ds.name, ds.percentArchetype\n' +
        '    from deckStyle ds\n' +
        '    join deckLists d on ds.deckStyle_Id=d.deckStyle_Id;';

    connection.query(query, function(err, result){
        callback(err, result);
    });
};

exports.getThree = function(callback){
    var query = 'select name, deckStyle_Id\n' +
        '\tfrom deckStyle\n' +
        '    where deckStyle_Id \n' +
        '    in (select deckStyle_Id from deckLists);';

    connection.query(query, function(err, result){
        callback(err, result);
    });
};

exports.getFour = function(callback){
    var query = 'select name, deckStyle_Id\n' +
        '\tfrom deckStyle\n' +
        '    where exists (select deckStyle_Id from deckLists)\n' +
        '    order by deckStyle_Id;';

    connection.query(query, function(err, result){
        callback(err, result);
    });
};

exports.getFive = function(callback){
    var query = 'select deck_Id, name, deckStyle_Id \n' +
        '    from deckLists d \n' +
        '    where deckStyle_Id > ( \n' +
        '       select min(deckstyle_Id) \n' +
        '       from deckStyle);';

    connection.query(query, function(err, result){
        callback(err, result);
    });
};

exports.getSix = function(callback){
    var query = 'select archetype_Id, count(name) as num\n' +
        '\tfrom deckStyle\n' +
        '    group by archetype_Id;';

    connection.query(query, function(err, result){
        callback(err, result);
    });
};

exports.getSeven = function(callback){
    var query = 'select ds.name, count(archetype_Id)\n' +
        '\tas deckTypes\n' +
        '    from deckStyle ds\n' +
        '    join deckLists d on ds.deckStyle_Id=d.deckStyle_Id\n' +
        '    group by ds.deckStyle_Id\n' +
        '    having count(deckTypes)>0;';

    connection.query(query, function(err, result){
        callback(err, result);
    });
};

exports.getEight = function(callback){
    var query = 'select deckType1, winRate, postSBRate\n' +
        '\tfrom matchups\n' +
        '    order by winRate;';

    connection.query(query, function(err, result){
        callback(err, result);
    });
};

exports.getNine = function(callback){
    var query = 'select name\n' +
        '\tfrom deckLists\n' +
        'union\n' +
        'select deckType1\n' +
        '\tfrom matchups;';

    connection.query(query, function(err, result){
        callback(err, result);
    });
};

exports.getTen = function(callback){
    var query = 'select distinct name\n' +
        '\tfrom deckLists;';

    connection.query(query, function(err, result){
        callback(err, result);
    });
};