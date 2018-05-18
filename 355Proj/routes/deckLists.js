var express = require('express');
var router = express.Router();
var deckLists_dal = require('../dal/deckLists_dal');

router.get('/all', function(req, res, next){
    deckLists_dal.getAll(function(err, result){
        if(err){
            console.log(err);
            res.send(err);
        } else{
            console.log(result);
            res.render('deckLists/deckLists_view_all', {deckLists: result});
        }
    })
});

router.get('/add', function(req, res){
    res.render('deckLists/deckLists_add')
});

router.get('/insert', function(req, res){
    deckLists_dal.insert(req.query,function(err, result){
        if(err){
            console.log(err);
            res.send(err);
        }else{
            res.redirect(302,'/deckLists/all');
        }
    });
});

router.get('/edit', function(req, res){
    deckLists_dal.getinfo(req.query.deck_Id, function(err, result){
        if(err){ res.send(err); }
        else{
            res.render('deckLists/deckListUpdate',
                {deckLists:result[0][0]}
            );
        }
    });
});

router.get('/update', function(req, res){
    deckLists_dal.update(req.query, function(err, result){
        if(err){
            res.send(err);
        }else{
            res.redirect(302, '/deckLists/all');
        }
    });
});

router.get('/delete', function(req, res){
    deckLists_dal.delete(req.query, function(err, result){
        if(err){
            res.send(err);
        } else {res.redirect(302, '/deckLists/all');
        }
    });
});

module.exports = router;