const express = require('express');
const router = express.Router();
const controller = require('../controller/filmesController');

router.get('/', controller.getFilmes);
router.get('/:id', controller.getFilmeById);
router.get('/generos/:nome', controller.getFilmesByGenero);

module.exports = router;
