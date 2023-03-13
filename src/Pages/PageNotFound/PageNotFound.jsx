import { Header } from "../../containers/Header/Header"
export function PageNotFound() {
  return(
    <>
      <Header
          titleMessage="Redécouvrez la fête de la musique"
          subTitleMessage="Profitez ensemble de cet événement inoubliable"
          promoMessage="Voir les prochains événements"
          showHeader={true}
        />
      <div>404</div>
    </>
    
  ) 
}
