const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController')


/* GET home page. */
router.get('/', indexController.getBooks);

router.get('/book/:id', indexController.getSingleBook)

module.exports = router;
