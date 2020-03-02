import { Router } from 'express';

import UserController from './app/controllers/UserController';
import RecipientController from './app/controllers/RecipientController';
import SessionController from './app/controllers/SessionController';

import authUser from './app/middlewares/auth';
import authAdmin from './app/middlewares/authAdmin';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// Realiza a autenticação do usuário
routes.use(authUser);

routes.put('/users', UserController.update);

// Realiza a autenticação de usuário administrador
routes.use(authAdmin);

routes.post('/recipients', RecipientController.store);
routes.put('/recipients/', RecipientController.update);

export default routes;
