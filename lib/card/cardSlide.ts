import { DataFormGiftCard } from "@/app/giftCard/Form/form.types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface GiftCardFormWithDiscountAppliedGet
  extends GiftCardFormWithDiscountApplied {
  id: number;
}

export interface GiftCardFormWithDiscountApplied extends DataFormGiftCard {
  finalPrice: number;
  discount: number;
}

export interface CardState {
  giftCard: DataFormGiftCard;
}

const initialState: CardState = {
  giftCard: {} as DataFormGiftCard,
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addGiftCard: (state, action: PayloadAction<DataFormGiftCard>) => {
      state.giftCard = action.payload;
    },
    removeCard: (state) => {
      return initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addGiftCard, removeCard } = cardSlice.actions;

export default cardSlice.reducer;
