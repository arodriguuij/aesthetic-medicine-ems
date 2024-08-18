import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { GiftCardForm, GiftCardFormWithDiscountAppliedGet } from "../card/cardSlide";


export interface OrderHistoryState {
  orderHistory: GiftCardFormWithDiscountAppliedGet;
}

const initialState: OrderHistoryState = {
  orderHistory: {} as GiftCardFormWithDiscountAppliedGet,
};

export const orderHistorySlide = createSlice({
  name: "orderHistory",
  initialState,
  reducers: {
    addGiftCardsOrderHistory: (
      state,
      action: PayloadAction<GiftCardFormWithDiscountAppliedGet>
    ) => {
      state.orderHistory = action.payload;
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
