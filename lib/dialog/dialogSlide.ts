import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface DialogState {
  isVisible: boolean;
  title: string;
  content: string;
  goBackText: string;
  goBackUrl: string;
}

const initialState: DialogState = {
  isVisible: false,
  title: "",
  content: "",
  goBackText: "",
  goBackUrl: "",
};

export const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    setDialogVisibility: (
      state,
      action: PayloadAction<{
        isVisible: boolean;
        title: string;
        content: string;
        goBackText: string;
        goBackUrl: string;
      }>
    ) => {
      state.isVisible = action.payload.isVisible;
      state.title = action.payload.title;
      state.content = action.payload.content;
      state.goBackText = action.payload.goBackText;
      state.goBackUrl = action.payload.goBackUrl;
    },
    resetDialog: (state) => {
      state.isVisible = initialState.isVisible;
      state.title = initialState.title;
      state.content = initialState.content;
      state.goBackText = initialState.goBackText;
      state.goBackUrl = initialState.goBackUrl;
    },
  },
});

export const selectDialogVisibility = (state: DialogState) => state.isVisible;
// Action creators are generated for each case reducer function
export const { setDialogVisibility, resetDialog } = dialogSlice.actions;

export default dialogSlice.reducer;
