import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface GiftCardForm {
  selectedGiftCardId: number;
  nameBuyer: string;
  email: string;
  nameReceiver: string;
  message: string;
}
export interface CardState {
  giftCard: GiftCardForm;
}

const initialState: CardState = {
  giftCard: {} as GiftCardForm,
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addGiftCard: (state, action: PayloadAction<GiftCardForm>) => {
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
