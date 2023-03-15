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
import { AdminEventsList } from "./Pages/Admin/AdminEventsList/AdminEventsList";
import { AdminEventUpdate } from "./Pages/Admin/AdminEventUpdate/AdminEventUpdate";
import { AdminEventAdd } from "./Pages/Admin/AdminEventAdd/AdminEventAdd";

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
                    <Route path="events" element={<AdminEventsList />}></Route>
                    <Route path="event/update/:id" element={<AdminEventUpdate />}></Route>
                    <Route path="event/add" element={<AdminEventAdd />}></Route>
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
