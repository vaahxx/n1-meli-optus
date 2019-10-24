const express = require('express');
const router = express.Router();
const controller = require('../controller/filmesController');

router.get('/', controller.getFilmes);
router.get('/proximoslancamentos', controller.getProximosLancamentos);
router.get('/duracao/maiorque120', controller.getDuracaoMaiorQue120);
router.get('/generos/:nome', controller.getFilmesByGenero);
router.get('/:id', controller.getFilmeById);

module.exports = router;
