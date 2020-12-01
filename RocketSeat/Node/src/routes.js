const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');
//Primeira rota
routes.get('/products', ProductController);
//Segunda Rota
routes.post('/products', ProductController.store);
//Terceira Rota
routes.get('/products/:id', ProductController.show);
//Quarta Rota
routes.put('/products/:id', ProductController.update);
//Quinta rota
routes.delete('/products/:id', ProductController.destroy);

module.exports = routes;