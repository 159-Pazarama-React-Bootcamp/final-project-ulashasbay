import { configureStore } from "@reduxjs/toolkit";
import appIdReducer from "./appId/appIdSlice"
import userInfoReducer from "./userInfo/userInfoSlice"

export const store = configureStore({
  reducer: {
      appId: appIdReducer,
      userInfo: userInfoReducer,
  },
});
