cd ..
cd caffe
mkdir models/VGG_ILSVRC_16_layers
curl http://www.robots.ox.ac.uk/~vgg/software/very_deep/caffe/VGG_ILSVRC_16_layers.caffemodel >  models/VGG_ILSVRC_16_layers/VGG_ILSVRC_16_layers.caffemodel
curl https://gist.githubusercontent.com/ksimonyan/211839e770f7b538e2d8/raw/0067c9b32f60362c74f4c445a080beed06b07eb3/VGG_ILSVRC_16_layers_deploy.prototxt >  models/VGG_ILSVRC_16_layers/VGG_ILSVRC_16_layers.caffemodel

cd ../seesay
cd jacob-neuraltalk/cv
curl http://cs.stanford.edu/people/karpathy/neuraltalk/coco_cnn_lstm_v2.zip > coco_cnn_lstm_v2.zip
unzip coco_cnn_lstm_v2.zip
rm coco_cnn_lstm_v2.zip
