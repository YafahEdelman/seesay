function errorCallback(e) {
    if (e.code == 1) {
        alert('User denied access to their camera');
    } else {
        alert('getUserMedia() not supported in your browser.');
    }
}

(function () {
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUsertMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    var video = document.querySelector('#stream');
    var button = document.querySelector('#capture-button');
    var localMediaStream = null;
    button.addEventListener('click', function (e) {
        if (navigator.getUserMedia) {
            navigator.getUserMedia({
                video: true
            }, function (stream) {
                video.src = window.URL.createObjectURL(stream);
                video.controls = true;
                localMediaStream = stream;
            }, errorCallback);
        } else {
            errorCallback({
                target: video
            });
        }
    }, false);
})();