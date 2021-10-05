var http = require('http'); 
var MongoClient = require('mongodb').MongoClient; 
var url = "mongodb://localhost:27017/user_db"; 
MongoClient.connect(url, function(err, client) { 
    const db = client.db("user_db");
    if (err) throw err; 
    var myquery = { index: 9 }; 
    db.collection("user").deleteOne(myquery, function(err, res) { 
        if (err) throw err; 
        console.log(res.deletedCount + " record(s) deleted"); 
        client.close(); 
    }); 
});

