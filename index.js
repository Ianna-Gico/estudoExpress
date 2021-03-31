const {response} = require('express');
const express = require('express');

const {uuid} = require ('uuidv4');

const app = express();

app.use(express.json());

const projects = [];

//console.log(app);

app.get('/projects', (request,response) =>{
    //const {Title , Owner} = request.query;
    
    // console.log(Title)
    // console.log(Owner)
    
    return response.json(projects)
});

app.post('/projects', (request,response) =>{
    const {Title , Owner} = request.body;

    const project = {id: uuid, Title, Owner};

    projects.push(project); //jogará a criação do projeto para o ARRAY

    return response.json(project); //sempre retorna o projeto recém criado e nunca exibe a lista completa

    //console.log(Title)
    //console.log(Owner)

    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
        'Projeto 4',
        'Projeto 5'
    ])
})

app.put('/projects/:id', (request,response) =>{
    const params = request.params;
    console.log(params);

    return response.json([
        'Projeto 50',
        'Projeto 2',
        'Projeto 3',
        'Projeto 4',
        'Projeto 5'

    ])
})

app.delete('/projects/:id', (request,response) =>{
    return response.json([
        'Projeto 50',
        'Projeto 2',
    ])
})

app.listen(3000,() =>{
    console.log('Servidor rodando!');
})