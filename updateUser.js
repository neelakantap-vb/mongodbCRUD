var http = require('http'); 
var MongoClient = require('mongodb').MongoClient; 
var url = "mongodb://localhost:27017/user_db"; 
MongoClient.connect(url, function(err, client) { 
    const db = client.db("user_db");
    if (err) throw err; 
    db.collection("user").updateOne({index:3},{$set:{first_name:"ram"}}, function(err, result) { 
        if (err) throw err; 
        console.log(result); 
        client.close(); 
    }); 
});
