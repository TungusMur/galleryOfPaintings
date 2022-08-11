import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  data: [],
  status: null,
};

const locationsReducer = createSlice({
  name: "locationsReducer",
  initialState,
  reducers: {
    loading: (state) => ({ ...state, loading: true }),
    getLocation: (state, { payload }) => ({
      ...state,
      loading: false,
      data: [...payload.data],
      status: payload.status,
      totalCount: +payload.headers["x-total-count"],
    }),
  },
});

const { actions, reducer } = locationsReducer;

export const { loading, getLocation } = actions;
export default reducer;
