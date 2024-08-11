// Need to use the React-specific entry point to import createApi
import { BranchHome } from "@/app/types/branchesHome.types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const branchesHomeApi = createApi({
  reducerPath: "branchesHomeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  endpoints: (builder) => ({
    getBranchesHome: builder.query<BranchHome[], string>({
      query: () => "branchesHome",
    }),
  }),
});

export const { useGetBranchesHomeQuery } = branchesHomeApi;
