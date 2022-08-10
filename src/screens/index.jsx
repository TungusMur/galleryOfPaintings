import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import Home from "./home";

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
