import {
  getProductByIdService,
  getProductService,
} from "../../services/products/products.service";

export const getProductsById = async (thisId: number) =>
  getProductByIdService(thisId);

export const getProducts = async () => getProductService();
