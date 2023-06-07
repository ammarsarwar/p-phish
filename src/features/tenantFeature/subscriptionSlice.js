import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subscriptionDetails: {},
};

export const subscriptionSlice = createSlice({
  name: "subs",
  initialState,
  reducers: {
    subsInfo: (state, action) => {
      state.subscriptionDetails = action.payload;
    },
  },
});

export const { subsInfo } = subscriptionSlice.actions;
export default subscriptionSlice.reducer;
