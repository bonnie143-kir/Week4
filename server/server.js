var express = require('express');
var app = express();
const cors = require('cors');
app.use(cors());
var bodyParser = require('body-parser');
app.use (bodyParser.json());
const path = require('path');
const { ok } = require('assert');

app.use(express.static(path.join(__dirname,'./dist/week4tute/')));

app.post('/auth', function(req,res){    
    console.log(req.body);
    let users = [
        {'username': 'bongii', 'birthdate': '14 Jan', 'age': 23, 'email': 'bongii@outmail.com', 'password': '1234', 'valid': true},
        {'username': 'bonnie', 'birthdate': '14 Jan', 'age': 23, 'email': 'bonnie@outmail.com', 'password': '567', 'valid': true},
        {'username': 'bong', 'birthdate': '14 Jan', 'age': 23, 'email': 'bong@outmail.com', 'password': 'abcd', 'valid': true}
    ]

    var user = {};
    user.email = req.body.email;
    user.password = req.body.password;
    console.log("This is: ", user);
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
