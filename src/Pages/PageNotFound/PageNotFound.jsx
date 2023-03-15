import { Header } from "../../containers/Header/Header"
export function PageNotFound() {
  return(
    <>
      <Header
          titleMessage="Malheuresement, cette page est introuvable"
          subTitleMessage="Veuillez vous rediriger vers l'accueil"
          promoMessage="Retourner à la page d'accueil"
          buttonRoute="/"
          showHeader={true}
        />
      <div>404</div>
    </>
    
  ) 
}
