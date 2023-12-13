import {Router} from 'express';

//import { getUsers, createUser, deleteUser } from './controllers/UserController.js';
import { getProducts, createProduct, deleteProduct } from './controllers/ProductController.js';

const routes = Router();

routes.get('/products', getProducts);
routes.post('/products', createProduct);
routes.delete('/products/:id', deleteProduct);

// routes.get('/users', getUsers);
// routes.post('/users', createUser);
// routes.delete('/users/:id', deleteUser);

export default routes;