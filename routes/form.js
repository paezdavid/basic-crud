const express = require('express')
const router = express.Router();
const formController = require('../controllers/formController')

router.get('/', (req, res) => {
    res.render('form')
})

router.post('/', formController.addBook)

module.exports = router;