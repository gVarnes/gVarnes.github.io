import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import todoSlice from "./slices/todoSlice";



export const store = configureStore({
  reducer: {
    todo: todoSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector
