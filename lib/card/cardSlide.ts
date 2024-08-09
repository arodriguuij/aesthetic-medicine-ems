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
  giftCard200: { giftCards: GiftCardForm[]; quantity: number };
  giftCard300: { giftCards: GiftCardForm[]; quantity: number };
  giftCard500: { giftCards: GiftCardForm[]; quantity: number };
}

const initialState: CardState = {
  giftCard200: { giftCards: [], quantity: 0 },
  giftCard300: { giftCards: [], quantity: 0 },
  giftCard500: { giftCards: [], quantity: 0 },
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    resetCard: (state) => {
      return { ...initialState }; // Create a new copy of initialState
    },
    addGiftCard: (state, action: PayloadAction<GiftCardForm>) => {
      switch (action.payload.selectedGiftCardId) {
        case 1:
          state.giftCard200.giftCards.push(action.payload);
          state.giftCard200.quantity = state.giftCard200.quantity + 1;
          break;
        case 2:
          state.giftCard300.giftCards.push(action.payload);
          state.giftCard300.quantity = state.giftCard300.quantity + 1;
          break;
        case 3:
          state.giftCard500.giftCards.push(action.payload);
          state.giftCard500.quantity = state.giftCard500.quantity + 1;
          break;
      }
    },
    removeCard: (state, action: PayloadAction<GiftCardForm>) => {
      switch (action.payload.selectedGiftCardId) {
        case 1:
          state.giftCard200.giftCards = state.giftCard200.giftCards.filter(
            (giftCard) =>
              JSON.stringify(giftCard) !== JSON.stringify(action.payload)
          );
          state.giftCard200.quantity = state.giftCard200.quantity - 1;
          break;
        case 2:
          state.giftCard300.giftCards = state.giftCard300.giftCards.filter(
            (giftCard) =>
              JSON.stringify(giftCard) !== JSON.stringify(action.payload)
          );
          state.giftCard300.quantity = state.giftCard300.quantity - 1;
          break;
        case 3:
          state.giftCard500.giftCards = state.giftCard500.giftCards.filter(
            (giftCard) =>
              JSON.stringify(giftCard) !== JSON.stringify(action.payload)
          );
          state.giftCard500.quantity = state.giftCard500.quantity - 1;
          break;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addGiftCard, removeCard, resetCard } = cardSlice.actions;

export default cardSlice.reducer;
