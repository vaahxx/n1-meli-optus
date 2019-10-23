# n1-meli-optus
projeto extra de API  {reprograma}

A empresa Optus contratou você para disponibilizar uma API para listar todos os filmes da plataforma. Cada filme contém as seguintes informações:

Título, Sinopse, Data de Lançamento, Duração em Minutos e cada filme pode conter mais de um gênero vinculado.

_Itens Obrigatórios

Você deverá ser capaz de:
- listar todos os filmes;
GET /filmes
- buscar um filme por id;
GET /filmes/:id

_Itens Opcionais

- buscar todos os filmes de determinado gênero;
GET /filmes/generos/:nome

- buscar todos os filmes com uma data de lançamento superior a data atual;

- buscar todos os filmes que possuem uma duração em minutos superior a 120 minutos.