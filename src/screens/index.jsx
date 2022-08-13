import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home";
import "./styles.scss";

const Error = () => <div>error</div>;

const App = () => {
  return (
    <>
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
