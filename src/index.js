import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import "./assets/css/main.css";
import Home from "./components/Home";
import Results from "./components/Results";
import Search from "./components/Search";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="home" />} />
        <Route path="/" element={<App />}>
          <Route path="search" element={<Search />}>
            <Route path="results" element={<Results />} />
          </Route>
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
