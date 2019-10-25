# n1-meli-optus - projeto extra de API  {reprograma}
```
API Restful - filmes
projeto prático do bootcamp back-end {reprograma} 
feito em node.js usando express.js, JSON simulando o banco de dados
objetivo: manipular requisições do tipo GET e retornar saídas em JSON
```
### Instruções ###
A empresa Optus contratou você para disponibilizar uma API para listar todos os filmes da plataforma. 
Cada filme contém as seguintes informações:

```
Título,
Sinopse, 
Data de Lançamento, 
Duração em Minutos,
Gêneros (1 ou mais)
```

##### Itens Obrigatórios #####
Você deverá ser capaz de:
- [x] listar todos os filmes;

 **GET /filmes**
- [x] buscar um filme por id;

**GET /filmes/:id**

##### Itens Opcionais #####
- [x] buscar todos os filmes de determinado gênero;

**GET /filmes/generos/:nome**
- [x] buscar todos os filmes com uma data de lançamento superior a data atual;

**GET /filmes/proximoslancamentos**
- [x] buscar todos os filmes que possuem uma duração em minutos superior a 120 minutos.

**GET /filmes/duracao/maiorque120**
