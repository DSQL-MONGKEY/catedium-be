const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const { classifyCat } = require('../controllers/catController');


router.post('/classify', upload.single('image'), classifyCat);

module.exports = router;