const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController')


/* GET home page. */
router.get('/', indexController.getBooks);

router.get('/book/:id', indexController.getSingleBook)

router.post('/delete/:id', indexController.deleteBook)

router.get('/update/:id', indexController.findOne)
router.post('/update/:id', indexController.updateOne)

module.exports = router;
