import { Outlet } from "react-router-dom";
import { Header } from "./containers/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { useState } from "react";

export function App() {

  return (
    <div className="flex flex-col">
      {/* <Header
        titleMessage="Redécouvrez la fête de la musique"
        subTitleMessage="Profitez ensemble de cet événement inoubliable"
        promoMessage="Voir les prochains événements"
        showHeader={true}
      /> */}
      <Outlet/>
      <Footer/>
    </div>
  );
}
