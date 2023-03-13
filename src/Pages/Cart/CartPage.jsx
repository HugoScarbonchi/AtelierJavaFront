import { useEffect, useState } from "react";
import { FeteDeLaMusique } from "../../api/feteDeLaMusique";
import MainTitle from "../../components/MainTitle/MainTitle";
import { Header } from "../../containers/Header/Header";
import { Buttton } from "../../components/Button/Button";
import Spline from '@splinetool/react-spline';

export default function CartPage() {
  const [cartDetailsList, setCartDetailsList] = useState(false);

  async function fetchCartDetails() {
    let resultFetch = await FeteDeLaMusique.fetchCartDetailstByUserId(1);
    setCartDetailsList(resultFetch);
  }

  useEffect(() => {
    fetchCartDetails();
  }, []);

  let totalCart = 0;

  return (
    <>
      <Header
        titleMessage="Redécouvrez la fête de la musique"
        subTitleMessage="Profitez ensemble de cet événement inoubliable"
        promoMessage="Voir les prochains événements"
        showHeader={false}
      />
      <MainTitle
        title="Votre Panier"
        subtitle="Voir tous vos produits en attente d’achat"
      />
      <div className="flex flex-row w-screen">
        <div id="partLeft" className="w-1/2 min-h-[600px]">
          <div className="px-20">
            
            {cartDetailsList && 
            (
            <div>
              <p className="font-bold text-4xl text-primary mt-10">Panier</p>

              <table className="mt-10">
                <thead>
                  <tr className="border-solid border-b-2 text-primary">
                    <th className="uppercase text-lg text-start">Article</th>
                    <th className="uppercase text-lg text-center">Quantité</th>
                    <th className="uppercase text-lg text-end">Prix</th>
                  </tr>
                </thead>
                <tbody>
                  {cartDetailsList.map((detail, i) => { 
                      totalCart += detail.product.price * detail.quantity
                      return(
                      <tr key={i} className="border-solid border-b-2 text-primary">
                        <td className="pr-12 py-3 text-start">
                          {detail.product.name}
                        </td>
                        <td className="px-6 py-3 text-center">{detail.quantity}</td>
                        <td className="pl-12 py-3 text-end">
                          {detail.product.price * detail.quantity}€ ttc
                        </td>
                      </tr>
                    )})}
                    <tr className="border-solid border-b-2 text-primary">
                        <td className="uppercase text-xl py-3 text-start font-bold">Total
                        </td>
                        <td></td>
                        <td className="uppercase text-xl py-3 text-end font-bold">{totalCart}€ ttc
                        </td>
                      </tr>
                </tbody>
              </table>
              <div className="flex justify-between items-start gap-3 mt-16">
                <Buttton>Passer commande</Buttton>
              </div>
            </div>
            )
            
            ||
            (
              <div>
                <h2 className="font-bold text-3xl text-primary mt-10">Votre panier est vide...</h2>
              </div>
            )

            }
            
          </div>
        </div>





        <div id="partRight" className="w-1/2">
          <Spline scene="https://prod.spline.design/HsxbSZb-AGch9Jgk/scene.splinecode" />
        </div>
      </div>
      
    </>
  );
}
