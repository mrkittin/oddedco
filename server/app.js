var express = require('../node_modules/express');
var serveStatic = require('../node_modules/serve-static');
var path = require('../node_modules/path');
var fs = require('fs');

var app = express();

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

var port = 3003;
app.use(serveStatic('target/', {'index': 'index.html'}));

var templateFiles = [];
var baseTemplatesPath = __dirname + '/templates';
readTemplates(baseTemplatesPath);

app.get('/rest/templates', function (req, res) {
  res.send(templateFiles);

});

app.listen(port, function () {
  console.log("Running at Port " + port);
});


function readTemplates(dir) {
  console.log('reading templates');
  var nodeDir = require('node-dir');
  nodeDir.files(dir, function (err, files) {
    if (err) throw err;
    console.log(files);
    files.forEach(function (file) {
      console.log(file);
      var fileName = path.basename(file);
      var dir = path.dirname(path.normalize(file));
      dir = dir.replace(baseTemplatesPath + '/', '');
      fs.readFile(file, 'utf8', function (err, data) {
        if (err) {
          return console.log(err);
        }
        templateFiles.push({
          name: dir + '/' + fileName,
          data: data
        });
        console.log(templateFiles);
      });
    });

  });
}
