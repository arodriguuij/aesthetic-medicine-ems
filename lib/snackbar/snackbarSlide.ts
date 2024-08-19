import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SnackbarState {
  isVisible: boolean;
  message: string;
  type: "success" | "error";
}

const initialState: SnackbarState = {
  isVisible: false,
  message: "",
  type: "success",
};

export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    setSnackbarVisibility: (
      state,
      action: PayloadAction<{
        visibility: boolean;
        message: string;
        type?: "success" | "error";
      }>
    ) => {
      state.isVisible = action.payload.visibility;
      state.message = action.payload.message;
      state.type = action.payload.type ? action.payload.type : "success";
    },
  },
});

export const selectSnackbarVisibility = (state: SnackbarState) =>
  state.isVisible;
export const selectSnackbarMessage = (state: SnackbarState) => state.message;
// Action creators are generated for each case reducer function
export const { setSnackbarVisibility } = snackbarSlice.actions;

export default snackbarSlice.reducer;
