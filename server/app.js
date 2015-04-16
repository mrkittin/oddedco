var express = require('../node_modules/express');
var path = require('../node_modules/path');
var fs = require('fs');

var app = express();
var port = 3003;

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/rest/project/:id', function (req, res) {
  var response = {
    id: 32452345,
    projectTitle: 'Title',
    projectAuthor: 'Author',
    projectMediaUrl: 'https://placekitten.com/g/300/200',
    participants: ['Developer', 'Creator'],
    categories: ['Lifestyle', 'Social'],
    shortDescription: 'Some short Description',
    longDescription: 'Some long description, Some long description, Some long description',
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

app.get('/rest/projects', function (req, res) {
  var sampleProject = {
    id: 32452345,
    projectTitle: 'Project Title',
    projectAuthor: 'Author',
    projectMediaUrl: 'https://placekitten.com/g/300/200',
    participants: ['Developer', 'Creator'],
    categories: ['Lifestyle', 'Social'],
    shortDescription: 'Some short Description Some short Description Some short Description Some short Description',
    longDescription: 'Some long description, Some long description, Some long description Some long description, Some long description, Some long description',
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

  var projectList = [];
  for (var i = 0; i < 20; i++) {
    var projectClone = {};
    for (var prop in sampleProject) {
      projectClone[prop] = sampleProject[prop];
    }
    projectList.push(projectClone);
  }
  res.send({
    projects: projectList
  });

});

app.get('/rest/categories', function (req, res) {
  res.send({
    categories: ['Lifestyle', 'Social', 'Transportation', 'Healthcare', 'Money',
        'Share-based economy', 'Personal development', 'Global trends', 'Explore the world']
  });
});

app.get('/rest/landing-images', function (req, res) {
  var files = fs.readdirSync(path.join(__dirname + '/img/rnd/'));
  res.send(files);
});

app.use(express.static('target/'));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, function () {
  console.log("Running at Port " + port);
});

