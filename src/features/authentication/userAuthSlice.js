import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
};

export const userAuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    globalUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { globalUser } = userAuthSlice.actions;
export default userAuthSlice.reducer;
