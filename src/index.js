import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<App />} />
      {/* <Route path="/projects/:name" element={<ProjectPage />} /> */}
    </Routes>
  </BrowserRouter>
);
