import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface BannerState {
  isVisible: boolean;
}

const initialState: BannerState = {
  isVisible: true,
};

export const bannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {
    setBannerVisibility: (state, action: PayloadAction<boolean>) => {
      state.isVisible = action.payload;
    },
  },
});

export const selectBannerVisibility = (state: BannerState) => state.isVisible;
// Action creators are generated for each case reducer function
export const { setBannerVisibility } = bannerSlice.actions;

export default bannerSlice.reducer;
