var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var python = require('python').shell;
var fs = require('fs');

app.use(express.static(__dirname));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
var testing = false;
if (testing) {
    http.listen(3000, function() {
        console.log('Listening on *:3000.');
    });
} else {
    python("import sys;sys.path.append('jacob-neuraltalk');import sentence_maker", function(err, data) {
        if (err) throw err;
        // get_data("../caffe/examples/images", "cat cycle", console.log);
        console.log(data);
        console.log(err);
        console.log("HIII")
        http.listen(3000, function() {
            console.log('Listening on *:3000.');
        });
    });
}
var times = 0;
io.on('connection', function(socket) {
    socket.on('picture', function(data) {
        console.log('received image');
        var data = data.replace(/^data:image\/\w+;base64,/, "");
        var buff = new Buffer(data, 'base64');
        times += 1
        var fname = __dirname + '/jacob-neuraltalk/images/snapshot' + socket.id +times + '.png';

        console.log(fname);
        var fd = fs.openSync(fname, 'w');
        fs.write(fd, buff, 0, buff.length, 0, function(err, written) {console.log(err)});
        // CLOSE SOMETHING HERE?
        if (!testing) {
            python("sentence_maker.get_sentence('images/snapshot" + socket.id +times + ".png')", function(err, result) {
                if (err) throw err;
                console.log("GOT SENTENCE");
                console.log(result);
                socket.emit(result)
                console.log("THAT WAS IT");
                console.log(err);
                //data should have the sentence
                fs.unlink(fname, function(err) {});
            });

        }
    });

});
