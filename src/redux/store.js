import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import contactsReducer from "./reducer";
import { contactApi } from "./contactSlice";

const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
    contacts: contactsReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
  devTools: process.env.NODE_ENV === "development",
});

export default store;

setupListeners(store.dispatch);
