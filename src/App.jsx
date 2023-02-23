
import { Outlet } from "react-router-dom";
import { Header } from "./containers/Header/Header";

export function App() {
  return (
    <div>
      <Header/>
      <Outlet />
    </div>
  );
}
