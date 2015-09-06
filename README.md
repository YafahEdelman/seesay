# SeeSay
*See the world in words*

SeeSay is a PennApps Fall 2015 project that describes the world out loud using speech, meant for people with severe vision loss. It is a web app that views the world through the user's camera, and describes it in sentence form out loud. This project was inspired by the recent research breakthroughs in automatic image captioning using neural nets, seen in [the nytimes article](http://www.nytimes.com/2014/11/18/science/researchers-announce-breakthrough-in-content-recognition-software.html).

## Why?
[According to the WHO](http://www.who.int/mediacentre/factsheets/fs282/en/), there are 39 million blind people, and 246 million people with low vision. About 90% of the world's visually impaired live in low-income settings. As cheap smartphones spread throughout the developing world, SeeSay can allow anyone with an internet browser to see the world through words.

## How it works
SeeSay uses the latest in deep learning image recognition and semantic analysis to analyze images. To do this it uses [caffe](http://caffe.berkeleyvision.org/) and [neuraltalk](https://github.com/karpathy/neuraltalk). [Speak.js](https://github.com/logue/speak.js) is used for the text to speech while [jQuery](http://jquery.com/) and [Bootstrap](http://getbootstrap.com/) are used for the rest of the front-end. Advanced [HTML5 features](http://www.html5rocks.com/en/tutorials/getusermedia/intro/) are used for the image capturing. It uses [socket.io](socket.io) to communicate with the backend. The server backend is hosted on an [AWS](https://aws.amazon.com/) GPU instance to provide the [deep learning](http://www.nature.com/nature/journal/v521/n7553/full/nature14539.html) with sufficient power. [nodejs](https://github.com/nodejs/node) is used for the web server backend but the [python npm module](https://www.npmjs.com/package/python) is used to communicate with the image analysis portion of the [backend](https://en.wikipedia.org/wiki/Front_and_back_ends) which is in [Python](python.org). In addition to this some form of a [computer](https://www.youtube.com/watch?v=dQw4w9WgXcQ) is used for both the client and server.

