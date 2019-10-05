const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');

const app = express();
mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-p5ipv.mongodb.net/semana09?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
/*
Anotações

get -> buscar informações
post -> adicionar informação
put -> editar informação
delete -> deletar informação

req.query = acessar os query params (para filtros) ex: localhost:3333/users?idade=20
req.params = acessar os routes params (put, delete/edição, exclusão) ex: localhost:3333/users/3
req.body = acessar o corpo da requisicao (criação, edição)


usar o express.json antes do use routes, pois o node é sequencial, ou seja, se colocar antes ele 
não vai conseguir ler em json
*/

//permite que qualquer aplicação acesse essa api; pode usar o origin para informar a url caso queria dar permissão á uma aplicação específica
app.use(cors()); 
//para dizer ao express que irá receber informações em json
app.use(express.json()); 
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);