// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GiftCard } from "./giftCards.types";
import { GiftCardForm } from "../../states/card/cardSlide";

// Define a service using a base URL and expected endpoints
export const giftCardsApi = createApi({
  reducerPath: "giftCardsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    getGiftCards: builder.query<GiftCard[], string>({
      query: () => "api/giftCards",
    }),
    getGiftCardById: builder.query<GiftCard, string>({
      query: (id) => `api/giftCards/${id}`,
    }),
    addGiftCardOrder: builder.query<void, GiftCard[]>({
      query: (body) => ({
        url: "api/giftCards",
        method: "POST",
        body,
      }),
    }),
    addGiftCardOrder2: builder.mutation<any, GiftCardForm[]>({
      query: (data) => ({
        url: "api/giftCards",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetGiftCardByIdQuery,
  useGetGiftCardsQuery,
  useAddGiftCardOrderQuery,
  useAddGiftCardOrder2Mutation,
} = giftCardsApi;
