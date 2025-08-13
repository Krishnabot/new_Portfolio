import { configureStore } from "@reduxjs/toolkit";
import home from "@/slices/homeSlice"; 

export const store = configureStore({
  reducer: {  home },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
