import React from "react";
import { HashRouter, BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "@store/redux";
import App from "./screens";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import getGalleryData from "@store/api/getGalleryData";
// import { getData, loading } from "@store/redux/reducers/galleryReducer";
import "./styles.scss";

// const App = () => {
//   const dispatch = useDispatch();
//   const state = useSelector((state) => state.galleryReducer);

//   useEffect(() => {
//     getGalleryData().then((data) => dispatch(getData(data)));
//   }, []);

//   return <div className="app">{state.loading ? "loading" : "cool"}</div>;
// };

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
