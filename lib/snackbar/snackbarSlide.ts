import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SnackbarState {
  isVisible: boolean;
  message: string;
}

const initialState: SnackbarState = {
  isVisible: false,
  message: "",
};

export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    setSnackbarVisibility: (
      state,
      action: PayloadAction<{ visibility: boolean; message: string }>
    ) => {
      state.isVisible = action.payload.visibility;
      state.message = action.payload.message;
    },
  },
});

export const selectSnackbarVisibility = (state: SnackbarState) =>
  state.isVisible;
export const selectSnackbarMessage = (state: SnackbarState) => state.message;
// Action creators are generated for each case reducer function
export const { setSnackbarVisibility } = snackbarSlice.actions;

export default snackbarSlice.reducer;
