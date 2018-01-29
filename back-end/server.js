var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var messages = [
    {
        text: 'I\'m the lead dev',
        owner: 'Brandin', 
        timestamp: 'new Date()',
    },
    {
        text: 'WHAT IS the meaning of all this?',
        owner: 'John',
        timestamp: new Date()
    },
    {
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        owner: 'Ashley',
        timestamp: new Date()
    }
];

app.use(bodyParser.json());

//middleware to allow CORS since our API end point will most likely be at a different port/URL as our front-end
app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-type, Accept');
    //let express know we're done:
    next();
});

// a simple logger middleware
app.use(function(req, res, next){
    console.log(new Date(), req.method, req.url);
    next();
});


var api = express.Router();

api.get('/messages', function(req, res) {
    res.json(messages);
});

api.post('/messages', function(req, res) {
    messages.push(req.body);
    res.json(req.body);
});

app.use('/api', api);

app.listen(3000);