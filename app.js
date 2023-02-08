var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(request, response){
    response.sendFile(__dirname + '/index.html');
});
app.post('/submit-data', function(request, response){
    var name = request.body.firstName + ' ' + request.body.lastName;
    response.send(name + ' ' + 'Submitted the form Successfully');
})
app.put('/update-data', function(request, response){
    response.send('PUT request');
})
app.get('/delete-data', function(request, response){
    response.send('DELETE Request');
})

var server = app.listen(5000, function(){
    console.log('Node server is running...');
});