import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./home";
import Header from "@shared/header/header";
import "./styles.scss";

const Error = () => <div>error</div>;

const App = () => {
  const themeState = useSelector((state) => state.themeReducer.theme);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      themeState === "dark" ? "dark" : "light"
    );
  }, []);

  return (
    <>
      <Header />
      <div className="main">
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
