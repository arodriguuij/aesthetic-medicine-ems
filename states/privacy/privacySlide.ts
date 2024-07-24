import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PrivacyState {
  isVisible: boolean;
}

const initialState: PrivacyState = {
  isVisible: false,
};

export const privacySlice = createSlice({
  name: "privacy",
  initialState,
  reducers: {
    setPrivacyVisibility: (state, action: PayloadAction<boolean>) => {
      state.isVisible = action.payload;
    },
  },
});

export const selectPrivacyVisibility = (state: PrivacyState) => state.isVisible;
// Action creators are generated for each case reducer function
export const { setPrivacyVisibility } = privacySlice.actions;

export default privacySlice.reducer;
