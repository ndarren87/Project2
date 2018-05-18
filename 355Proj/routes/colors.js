var express = require('express');
var router = express.Router();
var colors_dal = require('../dal/colors_dal');

router.get('/all', function(req, res, next){
    colors_dal.getAll(function(err, result){
        if(err){
            console.log(err);
            res.send(err);
        } else{
            console.log(result);
            res.render('colors/colors_view_all', {colors: result});
        }
    })
});

module.exports = router;