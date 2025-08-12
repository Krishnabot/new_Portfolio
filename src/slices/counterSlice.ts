import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
  loading: boolean;
  error?: string | null;
}

const initialState: CounterState = { value: 0, loading: false, error: null };

export const fetchSeed = createAsyncThunk<number>("counter/fetchSeed", async () => {
  await new Promise((r) => setTimeout(r, 400));
  return Math.floor(Math.random() * 10);
});

const slice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementBy: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
  extraReducers: (b) => {
    b.addCase(fetchSeed.pending, (s) => { s.loading = true; s.error = null; });
    b.addCase(fetchSeed.fulfilled, (s, a) => { s.loading = false; s.value = a.payload; });
    b.addCase(fetchSeed.rejected, (s, a) => { s.loading = false; s.error = a.error.message ?? "Failed"; });
  },
});

export const { incrementBy, reset } = slice.actions;
export default slice.reducer;
