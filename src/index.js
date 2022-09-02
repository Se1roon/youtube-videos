import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import "./assets/css/main.css";
import Home from "./components/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="home" />} />
        <Route path="/" element={<App />}>
          <Route path="search" element={<h1>Siema search</h1>} />
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
