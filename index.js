const express = require('express');

const app = express();

//console.log(app);

app.get('/', (request,response) =>{
    response.send('Olá, povo!');
})

app.listen(3000,() =>{
    console.log('Servidor rodando!');
})