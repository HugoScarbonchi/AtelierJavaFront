import { Outlet } from "react-router-dom";
import { Header } from "./containers/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { useState } from "react";

export function showAddCart() {
    const element = document.querySelector(".addToCart")
    element.classList.add('showProgressElement')

    setTimeout(() => {
        element.classList.remove('showProgressElement')
        element.classList.add('hideProgressElement')
    }, 3000);


    element.classList.remove('hideProgressElement')

}

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
        {/*Ajouté au panier*/}
        <div className="addToCart fixed bottom-0 right-0 flex flex-row justify-around items-center w-52 h-16 bg-[#28cc43] text-white rounded-md mr-6 mb-6 opacity-0">
            <div>Ajouté au panier</div>
            <img src={require('./assets/check-white.png')} style={{width: 25, height: 25}} alt="check"/>
            {/*<img src="https://img.icons8.com/color/48/000000/checkmark--v1.png"/>*/}
            {/*<div>Ajouté au panier</div>*/}
        </div>
    </div>
  );
}
