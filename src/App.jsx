
import { Outlet } from "react-router-dom";
import { Header } from "./containers/Header/Header";

export function App() {
  return (
    <div>
      <Header
        titleMessage="Redécouvrez la fête de la musique"
        subTitleMessage="Profitez ensemble de cet événement inoubliable"
        promoMessage="Voir les prochains événements"
      />
      <Outlet />
    </div>
  );
}
