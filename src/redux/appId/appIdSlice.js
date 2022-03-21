import { createSlice } from "@reduxjs/toolkit";

export const appIdSlice = createSlice({
  name: "appId",
  initialState: {
    value: "",
  },
  reducers: {
      updateAppId: (state, action) => {
          state.value = action.payload
      }
  },
});

export const { updateAppId } = appIdSlice.actions;
export default appIdSlice.reducer;
