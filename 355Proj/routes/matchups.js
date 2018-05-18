var express = require('express');
var router = express.Router();
var matchups_dal = require('../dal/matchups_dal');

router.get('/all', function(req, res, next){
    matchups_dal.getAll(function(err, result){
        if(err){
            console.log(err);
            res.send(err);
        } else{
            console.log(result);
            res.render('matchups/matchups_view_all', {matchups: result});
        }
    })
});

router.get('/add', function(req, res){
    res.render('matchups/matchups_add')
});

router.get('/insert', function(req, res){
    matchups_dal.insert(req.query,function(err, result){
        if(err){
            console.log(err);
            res.send(err);
        }else{
            res.redirect(302,'/matchups/all');
        }
    });
});

router.get('/edit', function(req, res){
    matchups_dal.getinfo(req.query.matchup_Id, function(err, result){
        if(err){ res.send(err); }
        else{
            res.render('matchups/matchupsUpdate',
                {matchups:result[0][0]}
            );
        }
    });
});

router.get('/update', function(req, res){
    matchups_dal.update(req.query, function(err, result){
        if(err){
            res.send(err);
        }else{
            res.redirect(302, '/matchups/all');
        }
    });
});

router.get('/delete', function(req, res){
    matchups_dal.delete(req.query, function(err, result){
        if(err){
            res.send(err);
        } else {res.redirect(302, '/matchups/all');
        }
    });
});

module.exports = router;