import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showDeleteMarket: false,
  showReverseMarket: false,
};

const globalSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    setShowDeleteMarket: (state, action) => {
      state.showDeleteMarket = action.payload;
    },
    setShowReverseMarket: (state, action) => {
      state.showReverseMarket = action.payload;
    },
  },
});

export const { setShowDeleteMarket, setShowReverseMarket } =
  globalSlice.actions;

export default globalSlice.reducer;
