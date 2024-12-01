import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the structure of your data
interface HomeData {
  [key: string]: unknown; // Replace with the exact structure if known
}

// Update the HomeDataState to use the HomeData type
interface HomeDataState {
  data: HomeData | null;
  loading: boolean;
  error: string | null;
}

const initialState: HomeDataState = {
  data: null,
  loading: false,
  error: null,
};

const homeDataSlice = createSlice({
  name: "homeData",
  initialState,
  reducers: {
    fetchDataStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess(state, action: PayloadAction<HomeData>) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchDataFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } =
  homeDataSlice.actions;
export default homeDataSlice.reducer;
