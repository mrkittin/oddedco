var config = {
  login: "ctwdbadmin",
  password: "Dwolfe12345",
  server: "dbh26.mongolab.com:27267",
  db: "ctwdb"
};

var mongoose = require('mongoose');
mongoose.connect(config.server, {
  db: config.db,
  user: config.login,
  pass: config.password
});
var session = require('express-session');

var MongoStore = require('connect-mongo')(session);

var mongoStore = new MongoStore({
  db: config.db,
  mongoose_connection: mongoose.connections[0]
}, function () {

});


exports = {};