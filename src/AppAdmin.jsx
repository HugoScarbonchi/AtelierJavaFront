import { Outlet } from "react-router-dom";
import { Header } from "./containers/Header/Header";
import { Footer } from "./components/Footer/Footer";

export function AppAdmin() {
  return (
    <div className="flex flex-col">
      <Header showHeader={false} />
      <Outlet />
      <Footer />
    </div>
  );
}
