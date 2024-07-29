import { QueryResult } from "pg";
import { executeFunction } from "../../database/database.utils";
import { ProductsServiceFunctions } from "./products.constants";
import { Product } from "../../../types/products.types";

export const getProductService = async () => {
  const { rows }: QueryResult<Product[]> = await executeFunction(
    ProductsServiceFunctions.GET_PRODUCTS,
    []
  );

  return rows;
};

export const getProductByIdService = async (id: number) => {
  const { rows }: QueryResult<Product> = await executeFunction(
    ProductsServiceFunctions.GET_PRODUCT_BY_ID,
    [id]
  );
  return rows;
};
