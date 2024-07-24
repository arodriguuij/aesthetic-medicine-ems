// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "./products.types";

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], string>({
      query: () => "api/products",
    }),
    getProduct: builder.query<Product[], string>({
      query: (id) => `api/products/${id}`,
    }),
  }),
});

export const {
  useGetProductQuery,
  useGetProductsQuery,
} = productsApi;
