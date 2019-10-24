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

exports.getDuracaoMaiorQue120 = (request, response) => {
    const duracaoMaiorQue120 = filmesJson.filter(e => e.duracaoEmMinutos > 120);
    response.status(200).send(duracaoMaiorQue120);
};

exports.getProximosLancamentos = (request, response) => {
    const proximosLancamentos = filmesJson.filter(function(e){
        const now = new Date();
        const diaAtual = now.getDate();
        const mesAtual = now.getMonth() + 1;
        const anoAtual = now.getFullYear();

        const dataDeLancamento = e.dataDeLancamento.split('/');
        const diaLancamento = dataDeLancamento[0];
        const mesLancamento = dataDeLancamento[1];
        const anoLancamento = dataDeLancamento[2];

        return anoLancamento > anoAtual;

    });
    response.status(200).send(proximosLancamentos);
};




