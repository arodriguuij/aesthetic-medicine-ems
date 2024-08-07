// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GiftCard } from "./giftCards.types";
import { GiftCardForm } from "../../lib/card/cardSlide";
import { GiftCardFormGet } from "@/app/types/giftCards.types";

// Define a service using a base URL and expected endpoints
export const giftCardsApi = createApi({
  reducerPath: "giftCardsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  endpoints: (builder) => ({
    getGiftCards: builder.query<GiftCard[], string>({
      query: () => "giftCards",
    }),
    getGiftCardById: builder.query<GiftCard, string>({
      query: (id) => `giftCards/${id}`,
    }),
    addGiftCardOrder: builder.mutation<GiftCardFormGet[], GiftCardForm[]>({
      query: (data) => ({
        url: "giftCards",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetGiftCardsQuery,
  useAddGiftCardOrderMutation,
} = giftCardsApi;
