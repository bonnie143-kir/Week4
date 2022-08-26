var express = require('express');
var app = express();

const cors = require('cors');
app.use(cors());

// app.use(function(req,res,next){
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET,PUT,POST,post,DELETE,OPTIONS");
//     res.header ("Access-Control-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next(); 
// });

const path = require('path');

app.use(express.static(path.join(__dirname,'./dist/week4tute/')));

app.post('/auth', function(req,res){
   let users = [
    {'username': 'bongii', 'birthdate': '14 Jan', 'age': 23, 'email': 'bongii@outmail.com', 'password': '1234', 'valid': true},
    {'username': 'bonnie', 'birthdate': '14 Jan', 'age': 23, 'email': 'bonnie@outmail.com', 'password': '567', 'valid': true},
    {'username': 'bong', 'birthdate': '14 Jan', 'age': 23, 'email': 'bong@outmail.com', 'password': 'abcd', 'valid': true}
    ]

    // console.log(req.body.email+req.body.password);
    if (!req.body){
        return res.sendStatus(400)
    }
        var user = {};
        user.email = req.body.email;
        user.password = req.body.password;
    for (let i=0;i<users.length;i++){
        if (req.body.email == users[i].email && req.body.password == users[i].password){
            users[i].valid;
            users[i].username;
            users[i].birthdate;
            users[i].age;
            users[i].email;
        }
    }
        res.send(user);
});

var http = require('http').Server(app);
http.listen(3000, ()=>{
    var d = new Date();
    var n = d.getHours();
    var m = d.getMinutes();
    console.log('Server has started listening at: ' + n + ":" + m); 
});
