import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface HomeDataState {
  data: Record<string, any> | null; // Use a specific structure if known
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
    fetchDataSuccess(state, action: PayloadAction<Record<string, any>>) {
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
