import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { GiftCardForm } from "../card/cardSlide";

export interface GiftCardFormOrder extends GiftCardForm {
  id: number;
}

export interface CardOrderState {
  giftCard200: GiftCardFormOrder[];
  giftCard300: GiftCardFormOrder[];
  giftCard500: GiftCardFormOrder[];
}

const initialState: CardOrderState = {
  giftCard200: [],
  giftCard300: [],
  giftCard500: [],
};

export const orderHistorySlide = createSlice({
  name: "orderHistory",
  initialState,
  reducers: {
    addGiftCardsOrderHistory: (
      state,
      action: PayloadAction<GiftCardFormOrder[]>
    ) => {
      action.payload.map((giftCardOrder) => {
        if (giftCardOrder.selectedGiftCardId === 1)
          state.giftCard200.push(giftCardOrder);
        if (giftCardOrder.selectedGiftCardId === 2)
          state.giftCard300.push(giftCardOrder);
        if (giftCardOrder.selectedGiftCardId === 3)
          state.giftCard500.push(giftCardOrder);
      });
    },
    resetGiftCardsOrderHistory: (state) => {
      return { ...initialState }; // Create a new copy of initialState
    },
  },
});

// Action creators are generated for each case reducer function
export const { addGiftCardsOrderHistory, resetGiftCardsOrderHistory } =
  orderHistorySlide.actions;

export default orderHistorySlide.reducer;
