import { Outlet } from "react-router-dom";
import { Header } from "./containers/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { useState } from "react";

export function showAddCart() {
  const element = document.querySelector(".addToCart");
  element.classList.add("showProgressElement");

  setTimeout(() => {
    element.classList.remove("showProgressElement");
    element.classList.add("hideProgressElement");
  }, 3000);

  element.classList.remove("hideProgressElement");
}

export function App() {
  return (
    <div className="flex flex-col">
      {/* Outlet sera remplacer automatiquement par un composant choisi */}
      <Outlet />
      <Footer />
      <div className="addToCart fixed bottom-0 right-0 flex flex-row justify-around items-center w-52 h-16 bg-[#28cc43] text-white rounded-md mr-6 mb-6 opacity-0">
        <div>Ajouté au panier</div>
        <img
          src={require("./assets/check-white.png")}
          style={{ width: 25, height: 25 }}
          alt="check"
        />
      </div>
    </div>
  );
}
