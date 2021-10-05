var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/user_db";
MongoClient.connect(url, function (err, client) {
    if (err) throw err;
    var myobj = [
        {
            "first_name": "Abhi",
            "last_name": "p",
            "email": "abhi@gmail.com",
            "company": "a",
            "phone": 1234567789,
            "index": 1
        },
        {
            "first_name": "Basav",
            "last_name": "g",
            "email": "basav@gmail.com",
            "company": "c",
            "phone": 2345678910,
            "index": 2
        },
        {
            "first_name": "Channu",
            "last_name": "g",
            "email": "channu@gmail.com",
            "company": "c",
            "phone": 3456789120,
            "index": 3
        },
        {
            "first_name": "Channu",
            "last_name": "g",
            "email": "channu1@gmail.com",
            "company": "d",
            "phone": 4567891230,
            "index": 4
        },
        {
            "first_name": "yash",
            "last_name": "p",
            "email": "yash@gmail.com",
            "company": "e",
            "phone": 5678912340,
            "index": 5
        },
        {
            "first_name": "ram",
            "last_name": "g",
            "email": "rama@gmail.com",
            "company": "c",
            "phone": 6789123450,
            "index": 6
        },
        {
            "first_name": "puneet",
            "last_name": "r",
            "email": "puneet@gmail.com",
            "company": "g",
            "phone": 7890123456,
            "index": 7
        },
        {
            "first_name": "Shiva",
            "last_name": "r",
            "email": "shiva@gmail.com",
            "company": "c",
            "phone": 8912345670,
            "index": 8
        },
        {
            "first_name": "sudeep",
            "last_name": "p",
            "email": "sudeep@gmail.com",
            "company": "i",
            "phone": 9012345678,
            "index": 9
        },
        {
            "first_name": "Ganesh",
            "last_name": "d",
            "email": "ganesh@gmail.com",
            "company": "c",
            "phone": 1023456789,
            "index": 10
        }
    ];
    const db = client.db("user_db");
    db.collection("user").insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("Number of records inserted: " + res.insertedCount);
        client.close();
    });
});
