import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  organizationInfo: {},
  personalinfo: {},
};

export const tenantInfoSlice = createSlice({
  name: "tenant",
  initialState,
  reducers: {
    orgInfo: (state, action) => {
      state.organizationInfo = action.payload;
    },
    perInfo: (state, action) => {
      state.personalinfo = action.payload;
    },
  },
});

export const { orgInfo, perInfo } = tenantInfoSlice.actions;
export default tenantInfoSlice.reducer;
