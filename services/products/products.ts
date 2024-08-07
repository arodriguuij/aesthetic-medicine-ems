// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "./products.types";

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], string>({
      query: () => "products",
    }),
    getProduct: builder.query<Product[], string>({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const {
  useGetProductQuery,
  useGetProductsQuery,
} = productsApi;
