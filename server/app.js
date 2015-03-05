var express = require('../node_modules/express');
var serveStatic = require('../node_modules/serve-static');
var path = require('../node_modules/path');
var app = express();

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

var port = 3003;
app.use(serveStatic('target/', {'index': 'index.html'}));
app.listen(port);
console.log("Running at Port " + port);