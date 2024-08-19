import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface DiscountState {
  discount: number;
  voucherName: string;
}

const initialState: DiscountState = {
  discount: 0,
  voucherName: "",
};

export const discountSlice = createSlice({
  name: "discount",
  initialState,
  reducers: {
    setDiscount: (state, action: PayloadAction<DiscountState>) => {
      state.discount = action.payload.discount;
      state.voucherName = action.payload.voucherName;
    },
    resetDiscount: (state) => {
      return initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDiscount, resetDiscount } = discountSlice.actions;

export default discountSlice.reducer;
