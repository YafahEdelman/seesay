import os
os.chdir('jacob-neuraltalk')

import predict_on_images
import py_caffe_feat_extract

word_data_file_name =  "synset_words.txt"
word_data_file = open(word_data_file_name)
word_data = []
for i in word_data_file.read().split("\n"):
    if " " in i:
        word_data.append(i[i.index(" ") + 1:])
word_data_file.close()

def get_objects(predictions, threshold = 0.2):
    rets = []
    if max(predictions) >= threshold:
        ret = [word_data[predictions.index(max(predictions))]]
    return ret
    # for chance, word in zip(predictions, word_data):
    #     if chance >= threshold:
    #         rets.append(word)
    # return rets
def here():
    return 2
def get_sentence(file_path):
    word_predictions = py_caffe_feat_extract.gen_feats(file_path, "temp_feats")
    ret = predict_on_images.get_sentences(file_path, "temp_feats")
    return ret
    os.remove("temp_feats.mat")
    objects = get_objects(word_predictions)


    if len(objects) == 0:
        objects_sentence = "There are no visible objects."
    elif len(objects) == 1:
        objects_sentence =  "There is a %s."%objects[0]
    else:
        objects_sentence =  "There is a " + ", ".join(objects[:-1]) + ", and %s."%objects[-1]
    print ret + ". " + objects_sentence
    return ret + ". " + objects_sentence
#import sys;sys.path.append('jacob-neuraltalk');import sentence_maker
#sentence_maker.get_sentence("test/unnamed.jpg")
