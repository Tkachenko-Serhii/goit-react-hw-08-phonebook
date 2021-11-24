import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import contactsReducer from "./contacts/contactReducer";
import { contactApi } from "./contacts/contactSlice";
import { authReducer } from "./auth";

const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
    auth: authReducer,
    contacts: contactsReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
});

export default store;

setupListeners(store.dispatch);
