
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http')
const routes = require('./routes');
const {setupWebsocket}  = require('./websocket')

const app = express();
const server = http.Server(app)
setupWebsocket(server);

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-4pso3.mongodb.net/week10?retryWrites=true&w=majority',{
    useUnifiedTopology: true,
    useNewUrlParser: true
});
app.use(cors());
app.use(express.json());
app.use(routes);


server.listen(3333);







// Metodos HTTP: GET, POST, PUT, DELETE

//Tipos de parametros:
// Query Params: req.query (Filtros, ordenação, paginação)
// Route Params: req.params (identificar recurso na alteração ou remoção)
//Body: req.body (Dados para criação ou alteração de um registro)


// MongoDB (Não-Relacional)
