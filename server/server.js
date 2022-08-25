var express = require('express');
var app = express();
var http = require('http').Server(app);
app.use(express.static(__dirname+'/www'));

app.post('/api/auth', function(req,res){
   let users = [
    {'username': 'bongii', 'birthdate': '14 Jan', 'age': 23, 'email': 'bongii@outmail.com', 'password': '1234', 'valid': True},
    {'username': 'bonnie', 'birthdate': '14 Jan', 'age': 23, 'email': 'bonnie@outmail.com', 'password': '567', 'valid': True},
    {'username': 'bong', 'birthdate': '14 Jan', 'age': 23, 'email': 'bong@outmail.com', 'password': 'abcd', 'valid': True}
    ]

    if (!req.body){
        return res.sendStatus(400)
    }
        var session = {};
        session.email = req.body.email;
        session.password = req.body.password;
    for (let i=0;i<users.length;i++){
        if (req.body.email == users[i].email && req.body.password == users[i].password){
            users[i].valid;
            users[i].username;
            users[i].birthdate;
            users[i].age;
            users[i].email;
        }
    }
        res.send(session.stringify);
});
