import QueryBuilder from '../../builder/QueryBuilder';
import { CourseSearchableFields } from './product.constant';
import { IProduct } from './product.interface';
import Product from './product.model';

const createProduct = async (payload: IProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getAllProducts = async (query: Record<string, unknown>) => {
  const courseQuery = new QueryBuilder(Product.find(), query)
    .search(CourseSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await courseQuery.modelQuery;
  const meta = await courseQuery.countTotal();

  return {
    meta,
    result,
  };
};

const getSingleProduct = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const updateProduct = async (id: string, data: Partial<IProduct>) => {
  const result = await Product.findByIdAndUpdate(id, data);
  return result;
};

const deleteProduct = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

export const productService = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
