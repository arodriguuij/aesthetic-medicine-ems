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
  gifCards: GiftCardForm[];
}

const initialState: CardState = {
  gifCards: [],
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addGiftCard: (state, action: PayloadAction<GiftCardForm>) => {
      state.gifCards.push(action.payload);
    },
    resetCard: (state) => {
      state.gifCards = initialState.gifCards;
    },
  },
});

export const selectCard = (state: CardState) => state.gifCards;
// Action creators are generated for each case reducer function
export const { addGiftCard, resetCard } = cardSlice.actions;

export default cardSlice.reducer;
