const express = require('express');
const app = express();
const rotas = require('./routes/filmesRotas');

app.use("/filmes", rotas);

module.exports = app;


