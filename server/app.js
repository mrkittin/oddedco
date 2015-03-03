var express = require('../node_modules/express');
var path = require('../node_modules/path');
var app = express();

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

var port = 3003;
app.listen(port);
console.log("Running at Port " + port);