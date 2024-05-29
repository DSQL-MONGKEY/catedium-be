const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();


router.post('/classify', upload.single('image'))

module.exports = router;