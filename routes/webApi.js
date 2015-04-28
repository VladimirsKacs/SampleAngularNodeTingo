var express = require('express');
var router = express.Router();
var DBHelper= require('../Helpers/DBHelper.js');
var Security= require('../Helpers/Security.js');

router.post('/getContacts', function(req, res, next) {
    DBHelper.verifyKey(req.body.key)
        .then(function(err,result) {
            if(result.success&&!err) {
                DBHelper.getContacts(null, function (err, data) {
                    if (!err)
                        res.send(data);
                    else
                        res.send({err: err.toString()});
                });
            }
            else
                res.send({err:"Not Logged In"});
        });
});

router.post('/saveContact', function(req, res, next) {
    DBHelper.verifyKey(req.body.key)
        .then(function(err,result) {
            if(result.success&&!err) {
                delete req.body.key;
                DBHelper.updateContact(req.body);
            }
            else
                res.send({err:"Not Logged In"});
        });

});

router.post('/insertContact', function(req, res, next) {
    DBHelper.verifyKey(req.body.key)
        .then(function(err,result) {
            if(result.success&&!err) {
                delete req.body.key;
                DBHelper.insertContact(req.body);
            }
            else
                res.send({err:"Not Logged In"});
        });
});

router.post('/Login', function(req, res, next) {
    Security.login(req.body.login, req.body.password, function(err,result){
        if(err)
            res.send({err:err});
        else if(!result.success)
            res.send({err:"incorrect credentials"});
        else
            res.send({key:result.key})
    })

});

router.post('/Logout', function(req, res, next) {
    DBHelper.deleteKey(req.body.key);
           res.send("200:OK")
});

module.exports = router;
