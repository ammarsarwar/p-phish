import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "../features/authentication/userAuthSlice";
import tenantInfoReducer from "../features/tenantFeature/tenantInfoSlice";
import subscriptionSlice from "../features/tenantFeature/subscriptionSlice";

export const store = configureStore({
  reducer: {
    auth: userAuthReducer,
    tenant: tenantInfoReducer,
    subs: subscriptionSlice,
  },
});
