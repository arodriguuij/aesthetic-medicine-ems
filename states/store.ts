import cardReducer from "./card/cardSlide";
import dialogReducer from "./dialog/dialogSlide";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import privacyReducer from "./privacy/privacySlide";
import bannerReducer from "./banner/bannerSlide";
import snackbarReducer from "./snackbar/snackbarSlide";
import { treatmentsApi } from "../services/treatments/treatments";
import { areasApi } from "../services/areas/areas";
import { productsApi } from "../services/products/products";
import { branchesApi } from "../services/branches/branches";
import { giftCardsApi } from "../services/giftCards/giftCards";
import { combineReducers } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: combineReducers({
    privacy: privacyReducer,
    banner: bannerReducer,
    snackbar: snackbarReducer,
    card: cardReducer,
    dialog: dialogReducer,
    [treatmentsApi.reducerPath]: treatmentsApi.reducer,
    [areasApi.reducerPath]: areasApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [branchesApi.reducerPath]: branchesApi.reducer,
    [giftCardsApi.reducerPath]: giftCardsApi.reducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(treatmentsApi.middleware)
      .concat(areasApi.middleware)
      .concat(productsApi.middleware)
      .concat(branchesApi.middleware)
      .concat(giftCardsApi.middleware),
});
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;