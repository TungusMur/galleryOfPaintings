import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  data: [],
  status: null,
  totalCount: 0,
};

const galleryReducer = createSlice({
  name: "galleryReducer",
  initialState,
  reducers: {
    loading: (state) => ({ ...state, loading: true }),
    getGallery: (state, { payload }) => ({
      ...state,
      loading: false,
      data: [...payload.data],
      status: payload.status,
      totalCount: +payload.headers["x-total-count"],
    }),
  },
});

const { actions, reducer } = galleryReducer;

export const { getGallery, loading } = actions;
export default reducer;
