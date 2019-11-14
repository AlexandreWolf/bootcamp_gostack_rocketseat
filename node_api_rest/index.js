const express = require('express');

const server = express();

server.use(express.json());

const users = ['Alexandre', 'Diego', 'Eduardo', 'Gabriella'];

//Middleware global
server.use((req, res, next) => {
    console.log(`Método ${req.method}; URL: ${req.url}`);

    return next();
});

//Middleware local
function checkUserExists(req, res, next){
    if(!req.body.user) {
        return res.status(400).json({error: 'User name is required' });
    }

    return next();
};

//Middleware local utilizado para adicionar valores a requisição
function checkUserInArray(req, res, next){
    const user = users[req.params.index];

    if(!user) {
        return res.status(400).json({error: 'User does not exists' });
    }

    req.user = user;

    return next();
};

//Método GET - Recuperar todos os usuários
server.get('/users', (req, res) => {
    return res.json(users);
});

//Método GET - Recuperar usuário específico
server.get('/users/:index', checkUserInArray, (req,res) => {
    /*
    Código antes da implementação da adição do usuário a req
    const { index } = req.params;

    return res.json(users[index]);
    */

   return res.json(req.user);
});

//Método POST - Adicionar usuário
server.post('/users', checkUserExists, (req, res) => {
    const { name } = req.body;

    users.push(name);

    return res.json(users);
});

//Método PUT - Atualizar usuário
server.put('/users/:index', checkUserInArray, checkUserExists, (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    users[index] = name;

    return res.json(users);
});

//Método DELETE - Remover usuário
server.delete('/users/:index', checkUserInArray, (req, res) => {
    const { index } = req.params;

    users.splice(index, 1);

    return res.json(users);
});


server.listen(3000);