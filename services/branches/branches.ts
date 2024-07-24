// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Branch } from "./branches.types";

// Define a service using a base URL and expected endpoints
export const branchesApi = createApi({
  reducerPath: "branchesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    getBranches: builder.query<Branch[], string>({
      query: () => "api/branches",
    }),
  }),
});

export const { useGetBranchesQuery } = branchesApi;
