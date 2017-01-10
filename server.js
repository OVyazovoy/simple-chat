var express = require('express');
var app = express();
var expressWs = require('express-ws')(app);
var path = require('path');
var bodyParser = require('body-parser')

app.use(express.static(path.join(__dirname, 'dist')));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));


var isUndefind = function (val) { return val === undefined };

var history = [];

app.get('/', function(req, res, next){
    res.end();
});

app.post('/test', function(req, res, next){
    var message = req.body.message;

    if(isUndefind(message)){
        res.status(400).send('no message');
    }
    message.user = 'Jone Dou';
    message.time = new Date().toDateString();

    history.push(message);
    res.send(message);
});
app.get('/history', function(req, res, next){
    res.send(history);
});

app.ws('/history', function(ws, req) {
    ws.on('message', function(msg) {
        console.log(JSON.parse(msg).type);
    });
    console.log('socket', req.testing);
});

app.listen(3000);