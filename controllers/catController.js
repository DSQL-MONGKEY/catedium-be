const tf = require('@tensorflow/tfjs-node');
const dotenv = require('dotenv');
const breeds = require('../data/breeds.json');
const { loadModel } = require('../services/loadModel');

dotenv.config();

const classifyCat = async(req, res) => {
   try {
      const { file } = req;
      const imageBuffer = file.buffer;

      const modelUrl = process.env.MODEL_URL
      const model = await loadModel(modelUrl);

      const tensor = tf.node.decodeImage(imageBuffer, 3)
         .resizeNearestNeighbor([224, 224])
         .expandDims()
         .toFloat()
         .div(tf.scalar(255, 0));

      const predictions = await model.predict(tensor).data();
      const predictedClass = predictions.indexOf(Math.max(...predictions));

      const result = {
         predictions: Array.from(predictions)
      }
      res.json(result);
   } catch(err) {
      console.error('Error during classification: ', err);
      res.status(500).send('Error during classification');
   }
}

module.exports = {
   classifyCat,
}