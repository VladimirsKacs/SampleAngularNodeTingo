/**
 * Created by Vladimirsk on 4/27/2015.
 */
var sha1 = require('node-sha1');
var DBHelper = require('./DBHelper');

module.exports.login= function(login,password, next)
{
    DBHelper.verifyPassword({login:login,passHash:sha1(password)})
        .then(function(err,result)
    {
        if(err)
            next(err,{success:false});
        else if(!result.success)
            next(null,{success:false});
        else {
            var key= sha1(login+Date.now().toString());
            DBHelper.saveKey(login,key)
                .then(function (err, result) {
                    if (err)
                        next(err, {success: false});
                    else
                        next(null, {success: true, key: result.key});
                });
        }
    });
}