// Need to use the React-specific entry point to import createApi
import { Product } from "@/app/types/products.types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  endpoints: (builder) => ({
    getProduct: builder.query<Product[], string>({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const { useGetProductQuery } = productsApi;
