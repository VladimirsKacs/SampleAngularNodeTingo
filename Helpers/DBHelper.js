/**
 * Created by Vladimirsk on 4/27/2015.
 */
var dbEngine = require("tingodb")();
var db = new dbEngine.Db("./storage", {});
var contacts = db.collection("contacts");
var users = db.collection("users");
var sessions = db.collection("sessions");

module.exports.insertContact =function (contact, next) {
    contacts.insert(contact,next);
};



module.exports.getContacts = function (filter, next) {
    return contacts.find(filter,{ first: 1, last: 1, phone:1}).toArray(function (error, contactsReturned) {
        next(error,contactsReturned);
    });
}

module.exports.updateContact = function (contact) {
    try {
        contacts.update({_id:contact._id},contact);
    }

    catch (ex) {
        console.log(ex);
    }
}

module.exports.verifyPassword = function (credentials) {
    users.findOne({login:credentials.login,password:credentials.passHash},function (error, user) {
            next(error,{success:user!=null});
        });
    var next;
    return {then:function(x){next=x}}
    }

module.exports.saveKey = function (login,key) {
    sessions.insert({key:key,login:login},function (error, user) {
        next(error,{key:key});
    });
    var next;
    return {then:function(x){next=x}}
}

module.exports.verifyKey = function (key) {
    sessions.findOne({key:key},function (error, session) {
        next(error,{success:session!=null});
    });
    var next;
    return {then:function(x){next=x}}
}


module.exports.deleteKey = function (key) {
    sessions.remove({key:key});
}