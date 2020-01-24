const express = require('express');

const UserController = require('./controllers/UserController');
const AuthenticateController = require('./controllers/AuthenticateController');
const OcurrenceController = require('./controllers/OccurrenceController');

const authMiddleware = require('./middlewares/auth');

//Rotas abertas
const routes = express.Router();

//Users routes 
routes.post('/users', UserController.store);
routes.put('/users/:id', UserController.update);
routes.get('/users/:id', UserController.show);
routes.delete('/users/:id', UserController.destroy);
routes.get('/users', UserController.index); 

//Autheticate route
routes.post('/login', AuthenticateController.store);

//Rotas fechadas
routes.use(authMiddleware);

routes.get('/ocurrences', OcurrenceController.index);

module.exports = routes;