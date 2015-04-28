var dbEngine = require("tingodb")();
var db = new dbEngine.Db("./storage", {});
var contacts = db.collection("contacts");
var users = db.collection("users");
var sha1 = require('node-sha1');

contacts.drop();
contacts.insert( { first:"one", last:"Von Zwei", phone:333 } );