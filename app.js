var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var python = require('python').shell;
var fs = require('fs');

app.use(express.static(__dirname));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
var testing = true;
if(testing) {
  http.listen(3000, function() {
    console.log('Listening on *:3000.');
  });
} else {
  python("import os;os.chdir('/jacob-neuraltalk');import jacob-neuraltalk", function(err, data) {
    if (err) throw err;
    // get_data("../caffe/examples/images", "cat cycle", console.log);
    console.log(data);
    console.log(err);
    http.listen(3000, function() {
      console.log('Listening on *:3000.');
    });
  });
}

io.on('connection', function (socket) {
  socket.on('picture', function (data) {
  	var data = data.replace(/^data:image\/\w+;base64,/, "");
    var buff = new Buffer(data,'base64');
    var fd =  fs.openSync(__dirname + '/jacob-neuraltalk/images/snapshot.png', 'w');
    fs.write(fd, buff, 0, buff.length, 0, function(err,written){});
  });
});
