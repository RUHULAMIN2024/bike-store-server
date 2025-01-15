import { Router } from 'express';
import { productController } from './product.controller';
import validateRequest from '../../middlewares/validateRequest';
import { productValidationSchema } from './product.validation';

const productRouter = Router();

productRouter.get('/:productId', productController.getSingleProduct);
productRouter.get('/', productController.getProducts);
productRouter.post(
  '/',
  validateRequest(productValidationSchema),
  productController.createProduct,
);
productRouter.put('/:productId', productController.updateProduct);
productRouter.delete('/:id', productController.deleteProduct);

export default productRouter;
