const express = require('express');
const router = express.Router();
const controller = require('../controller/filmesController');

router.get('/', controller.getFilmes);
router.get('/:id', controller.getFilmeById);

module.exports = router;

//Error: Route.get() requires a callback function but got a [object Undefined]
