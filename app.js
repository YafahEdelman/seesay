var python = require('python').shell;

  python("import sys;sys.path.append('jacob-neuraltalk');import sentence_maker;1+1", function(err, data) {
      if (err) throw err;
      // get_data("../caffe/exa9mples/images", "cat cycle", console.log);
      console.log(data);
      console.log(err);
      console.log("HIII")
      // http.listen(80, function() {
      //     console.log('Listening on *:80.');
      // });
  });


// python("sentence_maker.here()",console.log)
//
//
// function get_sentence(file_location, callback){
//
//     python("sentence_maker.get_sentence('"+file_location+"')", function(err, data) {
//         if (err) throw err;
//         callback(data)
//
//     });
// }
// io.on('connection', function(socket) {
//     socket.on('picture', function(data) {
//         console.log('received image');
//         var data = data.replace(/^data:image\/\w+;base64,/, "");
//         var buff = new Buffer(data, 'base64');
//         var fname = __dirname + '/jacob-neuraltalk/images/snapshot' + socket.id + '.png';
//         console.log(fname);
//         var fd = fs.openSync(fname, 'w');
//         fs.write(fd, buff, 0, buff.length, 0, function(err, written) {console.log(err)});
//         // CLOSE SOMETHING HERE?
//         if (!testing) {
//             console.log("sentence_maker.get_sentence('images/snapshot" + socket.id + ".png')");
//             console.log("over here")
//             get_sentence("sentence_maker.get_sentence('images/snapshot" + socket.id + ".png')",
//                         function(x){console.log(x); fs.unlink(fname, function(err) {});})
//
//         }
//     });
//
// });
