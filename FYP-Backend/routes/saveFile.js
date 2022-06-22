const { MongoClient } = require("mongodb");

var db = MongoClient.db('FYP');

exports.insert_file = function (data){
     db.collection("fileupload").insertOne(data,function(err,result){
        if (err){
            throw err;
        }
        else{
            console.log("file inserted in db");
        }
     })
}