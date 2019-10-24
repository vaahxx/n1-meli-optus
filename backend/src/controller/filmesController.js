const filmesJson = require('../model/filmes');

exports.getFilmes = (request, response) => {
    response.status(200).send(filmesJson);
}