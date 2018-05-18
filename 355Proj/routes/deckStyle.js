var express = require('express');
var router = express.Router();
var deckStyle_dal = require('../dal/deckStyle_dal');

router.get('/all', function(req, res, next){
    deckStyle_dal.getAll(function(err, result){
        if(err){
            console.log(err);
            res.send(err);
        } else{
            console.log(result);
            res.render('deckStyle/deckStyle_view_all', {deckStyle: result});
        }
    })
});

module.exports = router;