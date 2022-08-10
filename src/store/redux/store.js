import { configureStore } from "@reduxjs/toolkit";
import ReduxLogger from "redux-logger";
import rootReducers from "./reducers/rootReducer";

export const store = configureStore({
  reducer: { ...rootReducers, ...{} },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
      thunk: true,
      logger: true,
    }).concat(ReduxLogger),
  preloadedState: {},
});
