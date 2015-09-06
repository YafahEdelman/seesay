window.onload = ready;

function ready() {
    speak.play("Welcome to See Say", {speed: 125});
    speak.play("Click anywhere to analyze scene", {speed: 125});
    var socket = io.connect(window.location.host);

    var streaming = false,
        video = document.querySelector('#video'),
        canvas = document.querySelector('#canvas'),
        // startbutton = document.querySelector('#startbutton'),
        startbutton = document.querySelector('#main'),
        answer = document.querySelector('#answer'),
        width = 250,
        height = 0;

    navigator.getMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);

    navigator.getMedia({
        video: true,
        audio: false
    },

    function (stream) {
        if (navigator.mozGetUserMedia) {
            video.mozSrcObject = stream;
        } else {
            var vendorURL = window.URL || window.webkitURL;
            video.src = vendorURL.createObjectURL(stream);
        }
        video.play();
    },

    function (err) {
        console.log("An error occured! " + err);
    });

    video.addEventListener('canplay', function (ev) {
        if (!streaming) {
            height = video.videoHeight / (video.videoWidth / width);
            video.setAttribute('width', width);
            video.setAttribute('height', height);
            canvas.setAttribute('width', width);
            canvas.setAttribute('height', height);
            streaming = true;
        }
    }, false);

    function takepicture() {
        canvas.width = width;
        canvas.height = height;
        canvas.getContext('2d').drawImage(video, 0, 0, width, height);
        var data = canvas.toDataURL('image/png');
        socket.emit('picture', data);
    }

    socket.on('sentence', function(result) {
        console.log(result);
        speak.play(result);
        answer.innerHTML = result;
        speak.play(result, {speed: 125});
    });

    startbutton.addEventListener('click', function (ev) {
        speak.play("Analyzing scene.", {speed: 125});
        answer.innerHTML = "Analyzing scene ....";
        takepicture();
        ev.preventDefault();
    }, false);
}
