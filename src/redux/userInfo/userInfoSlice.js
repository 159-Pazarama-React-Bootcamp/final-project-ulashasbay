import { createSlice } from "@reduxjs/toolkit";

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    value: {},
  },
  reducers: {
    updateUserInfo: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateUserInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;
