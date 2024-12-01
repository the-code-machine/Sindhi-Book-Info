import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HomeDataState {
  data: any; // Replace `any` with a specific type for your data structure
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
    fetchDataSuccess(state, action: PayloadAction<any>) {
      // Replace `any` with your specific data type
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
