import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { paymentApi } from "@/services/payments/payments";
import { combineReducers } from "@reduxjs/toolkit";

import cardReducer from "./card/cardSlide";
import dialogReducer from "./dialog/dialogSlide";
import privacyReducer from "./privacy/privacySlide";
import bannerReducer from "./banner/bannerSlide";
import snackbarReducer from "./snackbar/snackbarSlide";
import orderHistoryReducer from "./orderHistory/orderHistorySlide";
import discountReducer from "./discount/discountSlide";
import { treatmentsApi } from "../services/treatments/treatments";
import { areasApi } from "../services/areas/areas";
import { productsApi } from "../services/products/products";
import { giftCardsApi } from "../services/giftCards/giftCards";
import { mailApi } from "../services/mails/mails";
import { calendarApi } from "@/services/calendar/calendar";
import { vouchersApi } from "@/services/vouchers/vouchers";

export const store = configureStore({
  reducer: combineReducers({
    privacy: privacyReducer,
    banner: bannerReducer,
    snackbar: snackbarReducer,
    card: cardReducer,
    dialog: dialogReducer,
    orderHistory: orderHistoryReducer,
    discount: discountReducer,
    [treatmentsApi.reducerPath]: treatmentsApi.reducer,
    [areasApi.reducerPath]: areasApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [giftCardsApi.reducerPath]: giftCardsApi.reducer,
    [mailApi.reducerPath]: mailApi.reducer,
    [paymentApi.reducerPath]: paymentApi.reducer,
    [calendarApi.reducerPath]: calendarApi.reducer,
    [vouchersApi.reducerPath]: vouchersApi.reducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(treatmentsApi.middleware)
      .concat(areasApi.middleware)
      .concat(productsApi.middleware)
      .concat(giftCardsApi.middleware)
      .concat(mailApi.middleware)
      .concat(paymentApi.middleware)
      .concat(calendarApi.middleware)
      .concat(vouchersApi.middleware),
});
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
