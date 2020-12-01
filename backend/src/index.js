
const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://omnistack:omnistack@cluster0-shard-00-00-ijfoy.mongodb.net:27017,cluster0-shard-00-01-ijfoy.mongodb.net:27017,cluster0-shard-00-02-ijfoy.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());

//  Métodos HTTP: get, post, put ,delete
//Tipos de paramêtros
// Query params - request.query(Filtros, ordenação, paginação)
// Route Params - request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (dados para criação ou alteração de um registro)

//MongoDB (Não Relacional)

app.use(routes);


app.listen(3333);