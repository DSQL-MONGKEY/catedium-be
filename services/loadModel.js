const tf =  require('@tensorflow/tfjs-node');

const loadModel = async(modelUrl) => {
   return tf.loadGraphModel(modelUrl);
}

module.exports = {
   loadModel,
}