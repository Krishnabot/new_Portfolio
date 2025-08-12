import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type ThemeState = { mode: "light" | "dark" };
const initialState: ThemeState = { mode: "light" };

const slice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setMode: (s, a: PayloadAction<ThemeState["mode"]>) => { s.mode = a.payload; },
    toggle: (s) => { s.mode = s.mode === "light" ? "dark" : "light"; },
  },
});

export const { setMode, toggle } = slice.actions;
export default slice.reducer;
