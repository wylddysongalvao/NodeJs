const express = require('express');

server = express();

server.use(express.json());

const projetos = {id:"1", Projeto:"Novo Projeto", Task: []};

server.get('/', (req, res) =>{
  res.send("O Servidor tá de pé galera!");
})

server.get('/projetos', (req, res) => {
  return res.json(projetos);
})

server.get('/projetos/:index', (req, res) => {
  const { index } = req.params;

  return res.json(projetos[index]);
});

const porta = 3000

server.listen(porta, () => {
  console.log("Servidor Funcionando!")
});