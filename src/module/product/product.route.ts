import { Router } from 'express';
import { productController } from './product.controller';

const productRouter = Router();

productRouter.get('/:productId', productController.getSingleProduct);
productRouter.get('/', productController.getProducts);
productRouter.post('/', productController.createProduct);
productRouter.put('/:productId', productController.updateProduct);
productRouter.delete('/:id', productController.deleteProduct);

export default productRouter;
