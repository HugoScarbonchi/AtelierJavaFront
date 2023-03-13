import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { PageNotFound } from "./Pages/PageNotFound/PageNotFound";
import { Home } from "./Pages/Home/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Events } from "./Pages/Events/Events";
import { Products } from "./Pages/Products/Products";
import CartPage from "./Pages/Cart/CartPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/mycart" element={<CartPage />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
