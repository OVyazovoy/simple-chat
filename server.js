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

app.get('/history', function(req, res, next){
    res.send(history);
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});
//
// app.get('/', function(req, res, next){
//     res.end();
// });
//
// app.post('/test', function(req, res, next){
//     var message = req.body.message;
//
//     if(isUndefind(message)){
//         res.status(400).send('no message');
//     }
//     message.user = 'Jone Dou';
//     message.time = new Date().toDateString();
//
//     history.push(message);
//     res.send(message);
// });
// app.get('/history', function(req, res, next){
//     res.send(history);
// });
//
// // app.ws('/history', function(ws, req) {
// //     ws.on('message', function(msg) {
// //         console.log(JSON.parse(msg).type);
// //     });
// //     console.log('socket', req.testing);
// // });
// io.on('connection', function(socket){
//     console.log('a user connected');
//     socket.on('disconnect', function(){
//         console.log('user disconnected');
//     });
// });
// app.listen(3000);