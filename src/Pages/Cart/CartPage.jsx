import { useEffect, useState } from "react";
import { FeteDeLaMusique } from "../../api/feteDeLaMusique";
import MainTitle from "../../components/MainTitle/MainTitle";
import { Header } from "../../containers/Header/Header";
import { Buttton } from "../../components/Button/Button";
import Spline from '@splinetool/react-spline';

export default function CartPage() {
  const [cartDetailsList, setCartDetailsList] = useState(false);
  const [discountValue, setDiscountValue] = useState(0);
  const [hasDiscount, setHasDiscount] = useState(false);
  const [codeDiscountValue, setCodeDiscountValue] = useState("");
  const [badCodeDiscountValue, setBadCodeDiscountValue] = useState(false);

  const allDiscounts = FeteDeLaMusique.getDIscounts()
    console.log(allDiscounts)
  async function fetchCartDetails() {
    let resultFetch = await FeteDeLaMusique.fetchCartDetailstByUserId(1);
    setCartDetailsList(resultFetch);
  }

  useEffect(() => {
    fetchCartDetails();
  }, []);

  const handleChange = (event) => {
      setCodeDiscountValue(event.target.value)
    }

  let totalCart = 0;

  const applyDiscount = () => {
      allDiscounts.then( discounts => {
          discounts.forEach(discount => {
              if (discount.name === codeDiscountValue) {
                  setHasDiscount(true)
                  setDiscountValue(discount.amount)
                  setCodeDiscountValue("")
                  setBadCodeDiscountValue(false)
                  return true
              }
          }
          )
      })
      setHasDiscount(false)
      setDiscountValue(0)
      setCodeDiscountValue("")
      setBadCodeDiscountValue(true)
  }

    const showTotal = () => {
        if (!hasDiscount) {
            return(
                <td className="uppercase text-xl py-3 text-end font-bold">
                    <div style={{width: 300}}>
                        {totalCart}€ ttc
                    </div>
                </td>
            )
        } else {
            return (
                <td className="uppercase text-xl py-3 text-end font-bold">
                    <div style={{width: 300}}>
                        <span className="text-red-600">-{discountValue}%</span>
                        <span className="mx-2 line-through">{totalCart}€</span>
                        <span className="text-red-600">{totalCart * (1-discountValue/100)}€</span>
                        ttc
                    </div>

                </td>
            )
        }
    }

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
                      // Product
                      if (detail.product !== null) {
                          totalCart += (detail.product.price * detail.quantity) / 100
                          return(
                              <tr key={i} className="border-solid border-b-2 text-primary">
                                  <td className="pr-12 py-3 text-start">
                                      {detail.product.name}
                                  </td>
                                  <td className="px-6 py-3 text-center">{detail.quantity}</td>
                                  <td className="pl-12 py-3 text-end">
                                      {(detail.product.price * detail.quantity) / 100}€ ttc
                                  </td>
                              </tr>
                          )
                      } else {
                          totalCart += (detail.ticket.event.price * detail.quantity) / 100
                          return(
                              <tr key={i} className="border-solid border-b-2 text-primary">
                                  <td className="pr-12 py-3 text-start">
                                      🎟&nbsp;&nbsp;&nbsp;{detail.ticket._ref} - {detail.ticket.event.name}
                                  </td>
                                  <td className="px-6 py-3 text-center">{detail.quantity}</td>
                                  <td className="pl-12 py-3 text-end">
                                      {(detail.ticket.event.price * detail.quantity) / 100}€ ttc
                                  </td>
                              </tr>
                          )
                      }
                    })}
                    <tr className="border-solid border-b-2 text-primary">
                        <td className="uppercase text-xl py-3 text-start font-bold">Total
                        </td>
                        <td></td>
                        {showTotal()}
                      </tr>
                </tbody>
              </table>
                
                <div className="mt-5 flex flex-row">
                    <input className="border-2 border-[#5D5A88] border-solid rounded-lg py-3.5 px-3.5" placeholder="Votre code promo" defaultValue="" value={codeDiscountValue} onChange={(event) => handleChange(event)} type="text"/>
                    <button className="bg-[#5D5A88] border-2 border-[#5D5A88] border-solid rounded-lg py-3.5 px-3.5 text-white mx-4 hover:scale-[1.07] transition" onClick={applyDiscount}>Appliquer le code</button>
                </div>
                {badCodeDiscountValue && (
                    <div className="mt-3 text-red-600">Code promo introuvable</div>
                )}

                
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
