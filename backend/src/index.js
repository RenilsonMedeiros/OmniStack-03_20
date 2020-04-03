const express = require('express');  //Tou Importando o Módulo express pra dentro da variável "express", q possui todas as funcionalidades disponíveis do express. 
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());   //Digo ao express que eu estou enviando dados no formato Json.
app.use(routes);

app.listen(3333);
