var express = require('express');
var router = express.Router();
var archetypes_dal = require('../dal/archetypes_dal');

router.get('/all', function(req, res, next){
    archetypes_dal.getAll(function(err, result){
        if(err){
            console.log(err);
            res.send(err);
        } else{
            console.log(result);
            res.render('archetypes/archetypes_view_all', {archetypes: result});
        }
    })
});

module.exports = router;