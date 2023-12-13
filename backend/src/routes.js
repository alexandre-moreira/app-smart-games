import {Router} from 'express';

import { getProducts, createProduct, deleteProduct } from './controllers/ProductController.js';

const routes = Router();

routes.get('/products', getProducts);
routes.post('/products', createProduct);
routes.delete('/products/:id', deleteProduct);

export default routes;