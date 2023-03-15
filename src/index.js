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
import { UserAccount } from "./components/UserAccount/UserAccount";
import { AdminProductsList } from "./Pages/Admin/AdminProductsList/AdminProductsList";
import { AppAdmin } from "./AppAdmin";
import { AdminProductUpdate } from "./Pages/Admin/AdminProductUpdate/AdminProductUpdate";
import { AdminProductAdd } from "./Pages/Admin/AdminProductAdd/AdminProductAdd";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/admin" element={<AppAdmin />}>
                    <Route path="" element={<PageNotFound />}></Route>
                    <Route path="products" element={<AdminProductsList />}></Route>
                    <Route path="product/update/:id" element={<AdminProductUpdate />}></Route>
                    <Route path="product/add" element={<AdminProductAdd />}></Route>
                    <Route path="*" element={<PageNotFound />}></Route>
                </Route>
                <Route path="/" element={<App />}>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/events" element={<Events />}></Route>
                    <Route path="/products" element={<Products />}></Route>
                    <Route path="/mycart" element={<CartPage />}></Route>
                    <Route path="/account" element={<UserAccount />}></Route>
                    <Route path="*" element={<PageNotFound />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
