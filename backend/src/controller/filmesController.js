const filmesJson = require('../model/filmes');

exports.getFilmes = (request, response) => {
    response.status(200).send(filmesJson);
};

exports.getFilmeById = (request, response) => {
    const idUrl = request.params.id;
    const filme = filmesJson.find(e => e.id = idUrl);
    response.status(200).send(filme);
};

exports.getFilmesByGenero = (request, response) => {
    const generoUrl = request.params.nome;
    const filmesGenero = filmesJson.filter(e => e.genero.includes(generoUrl));
    response.status(200).send(filmesGenero);
};




