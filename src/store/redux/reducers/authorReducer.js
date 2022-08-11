import { createSlice } from "@reduxjs/toolkit";

const initialState = { loading: true, data: [], status: null };

const authorReducer = createSlice({
  name: "authorReducer",
  initialState,
  reducers: {
    loading: (state) => ({ ...state, loading: true }),
    getAuthor: (state, { payload }) => ({
      ...state,
      loading: false,
      data: [...payload.data],
      status: payload.status,
    }),
  },
});

const { actions, reducer } = authorReducer;
export const { loading, getAuthor } = actions;
export default reducer;
