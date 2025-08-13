import { configureStore } from "@reduxjs/toolkit";
import counter from "@/slices/counterSlice";
import home from "@/slices/homeSlice"; 

export const store = configureStore({
  reducer: { counter, home },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
