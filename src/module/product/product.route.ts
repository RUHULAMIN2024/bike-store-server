import { Router } from 'express';
import { productController } from './product.controller';
import validateRequest from '../../middlewares/validateRequest';
import { productValidationSchema } from './product.validation';

const productRouter = Router();

productRouter.get('/:productId', productController.getSingleProduct);
productRouter.delete('/:id', productController.deleteProduct);
productRouter.put('/:productId', productController.updateProduct);
productRouter.get('/', productController.getAllProducts);
productRouter.post(
  '/',
  validateRequest(productValidationSchema),
  productController.createProduct,
);

export default productRouter;
