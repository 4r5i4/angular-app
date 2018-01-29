var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var messages = [
    {
        text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
        owner: 'Tim', 
        timestamp: 'footer',
    },
    {
        text: 'some text',
        owner: 'John',
        timestamp: new Date()
    },
    {
        text: 'some text',
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