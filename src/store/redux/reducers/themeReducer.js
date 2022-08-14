import { createSlice } from "@reduxjs/toolkit";

const initialState = { theme: localStorage.getItem("data-theme") };

const themeReducer = createSlice({
  name: "themeReducer",
  initialState,
  reducers: { setTheme: (_, { payload }) => ({ theme: payload }) },
});

const { actions, reducer } = themeReducer;

export const { setTheme } = actions;
export default reducer;
