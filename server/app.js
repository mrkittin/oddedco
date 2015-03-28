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

var baseTemplatesPath = __dirname + '/templates';

app.get('/rest/project/:id', function (req, res) {
  var response = {
    projectTitle: 'Title',
    projectAuthor: 'Author',
    projectMediaUrl: 'https://placekitten.com/g/200/300',
    participants: ['Developer', 'Creator'],
    categories: ['Lifestyle', 'Social'],
    postedOn: new Date(),
    comments: [
      {
        author: 'Mike',
        text: 'I am curious about this project',
        title: '',
        date: new Date()
      },
      {
        author: 'Nick',
        text: 'i think nothing',
        title: '',
        date: new Date()
      },
      {
        author: 'John',
        text: 'It is wonderful',
        title: '',
        date: new Date()
      }
    ]
  };

  res.send(response);

});

app.listen(port, function () {
  console.log("Running at Port " + port);
});

function readTemplates(dir) {
  console.log('reading templates');
  var nodeDir = require('node-dir');
  nodeDir.files(dir, function (err, files) {
    if (err) throw err;
    files.forEach(function (file) {
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
      });
    });

  });
}
