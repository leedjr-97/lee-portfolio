import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Middleware, SerializedError, configureStore } from "@reduxjs/toolkit";

import appReducer, { appActions } from "./AppSlice";
import { apiSlice } from "./ApiSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    app: appReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
