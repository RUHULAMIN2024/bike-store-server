import { Router } from 'express';
import { productController } from './product.controller';

const productRouter = Router();

productRouter.get('/:productId', productController.getSingleProduct);
productRouter.delete('/:id', productController.deleteProduct);
productRouter.put('/:productId', productController.updateProduct);
productRouter.get('/', productController.getAllProducts);
productRouter.post('/', productController.createProduct);

export default productRouter;
