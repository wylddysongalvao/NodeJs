const express = require('express');

server = express();

server.use(express.json());

// Variável do projeto 

const projetos = {id:"1", Projeto:"Novo Projeto", Tasks: []};

// Criando a Router principal e enviando a menssagem para o navgador.
server.get('/', (req, res) =>{
  res.send("O Servidor tá de pé galera!");
})

// Retorna todos os projetos exitentes
server.get('/projetos', (req, res) => {
  return res.json(projetos);
})

// Midleware para checar se existe o projeto

function checkProjetosExistentes(req, res, next) {
  const { id } = req.params;
  const projeto = projetos.find(p => p.id == id);
// Condição: Se dentro da rota não encontrar o id ele retorna projeto não encontrado.
  if (!projeto) {
    return res.status(400).json({error: 'Projecto Não encontrado'})
  }

  return next();
}

// Criando Projeto
server.post('/projetos', (req, res) => {
  const { id, title } = req.body;

  const projeto = {
    id,
    title,
    tasks: []
  };
  projetos.push(projeto);

  return res.json(projeto);
});

function logRequests(req, res, next) {

  console.count("Número de requisições");

  return next();
}


server.get('/projetos/:id', (req, res) => {
  const { index } = req.params;

  return res.json(projetos[id]);
});

server.get('/projetos/')

const porta = 3000

server.listen(porta, () => {
  console.log("Servidor Funcionando!")
});