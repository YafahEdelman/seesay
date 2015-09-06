# SeeSay
SeeSay is a PennApps Fall 2015 project. Therefore it is a work in progress. It will be a mobile-friendly website that will capture video and describe it with speech out loud, a la [the nytimes article](http://www.nytimes.com/2014/11/18/science/researchers-announce-breakthrough-in-content-recognition-software.html). It would be especially useful for vision-impaired people.

## Why?
Ben will write this.

## How it works
SeeSay uses the latest in deep learning image recognition and semantic analysis to analyze images. To do this it uses [caffe](http://caffe.berkeleyvision.org/) and [neuraltalk](https://github.com/karpathy/neuraltalk). [ResponsiveVoice.JS](responsivevoice.org) is used for the text to speech while [jQuery](http://jquery.com/) and [Bootstrap](http://getbootstrap.com/) are used for the rest of the front-end. Advanced [HTML5 features](http://www.html5rocks.com/en/tutorials/getusermedia/intro/) are used for the image capturing. It uses [socket.io](socket.io) to communicate with the backend. The server backend is in [nodejs](https://github.com/nodejs/node) but the actual machine learning parts are in [Python](python.org). Communication between the two is done with the [python npm module](https://www.npmjs.com/package/python). 

