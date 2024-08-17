import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { GiftCardForm } from "../card/cardSlide";

export interface GiftCardFormOrder extends GiftCardForm {
  id: number;
}

export interface OrderHistoryState {
  orderHistory: GiftCardFormOrder;
}

const initialState: OrderHistoryState = {
  orderHistory: {} as GiftCardFormOrder,
};

export const orderHistorySlide = createSlice({
  name: "orderHistory",
  initialState,
  reducers: {
    addGiftCardsOrderHistory: (
      state,
      action: PayloadAction<GiftCardFormOrder>
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
