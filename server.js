var express = require('express');
var app = express();
// var expressWs = require('express-ws')(app);
var path = require('path');
var bodyParser = require('body-parser')

var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, 'dist')));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));


var history = [];
var isUndefind = function (val) { return val === undefined };

app.get('/', function(req, res){
    res.sendfile('index.html');
});

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
    socket.on('ADD_MESSAGE', function (data) {
        console.log('action/ADD_MESSAGE');
        io.emit('ADD_MESSAGE', data);
        history.push(data);
    })
});

app.get('/clear/history', function(req, res, next){
    history = [];
    io.emit('CLEAR_HISTORY');
    res.send(history);
});
app.get('/history', function(req, res, next){
    res.send(history);
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});
