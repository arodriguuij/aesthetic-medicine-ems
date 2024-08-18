// Need to use the React-specific entry point to import createApi
import { Branch } from "@/app/types/branches.types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const branchesApi = createApi({
  reducerPath: "branchesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  endpoints: (builder) => ({
    getBranches: builder.query<Branch[], string>({
      query: () => "branches",
    }),
  }),
});

export const { useGetBranchesQuery } = branchesApi;
