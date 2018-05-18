var express = require('express');
var router = express.Router();
var queries = require('../dal/queries_dal');

router.get('/one', function(req ,res){
    queries.getOne(function(err, result){
        if(err){
            res.send(err);
        }else{
            res.render('queries/queryOne', {'result':result});
        }
    });
});

router.get('/two', function(req ,res){
    queries.getTwo(function(err, result){
        if(err){
            res.send(err);
        }else{
            res.render('queries/queryTwo', {'result':result});
        }
    });
});

router.get('/three', function(req ,res){
    queries.getThree(function(err, result){
        if(err){
            res.send(err);
        }else{
            res.render('queries/queryThree', {'result':result});
        }
    });
});

router.get('/four', function(req ,res){
    queries.getFour(function(err, result){
        if(err){
            res.send(err);
        }else{
            res.render('queries/queryFour', {'result':result});
        }
    });
});

router.get('/five', function(req ,res){
    queries.getFive(function(err, result){
        if(err){
            res.send(err);
        }else{
            res.render('queries/queryFive', {'result':result});
        }
    });
});

router.get('/six', function(req ,res){
    queries.getSix(function(err, result){
        if(err){
            res.send(err);
        }else{
            res.render('queries/querySix', {'result':result});
        }
    });
});

router.get('/seven', function(req ,res){
    queries.getSeven(function(err, result){
        if(err){
            res.send(err);
        }else{
            res.render('queries/querySeven', {'result':result});
        }
    });
});

router.get('/eight', function(req ,res){
    queries.getEight(function(err, result){
        if(err){
            res.send(err);
        }else{
            res.render('queries/queryEight', {'result':result});
        }
    });
});

router.get('/nine', function(req ,res){
    queries.getNine(function(err, result){
        if(err){
            res.send(err);
        }else{
            res.render('queries/queryNine', {'result':result});
        }
    });
});

router.get('/ten', function(req ,res){
    queries.getTen(function(err, result){
        if(err){
            res.send(err);
        }else{
            res.render('queries/queryTen', {'result':result});
        }
    });
});

module.exports = router;