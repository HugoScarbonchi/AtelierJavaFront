import { Header } from "../../containers/Header/Header";
import img from "../../assets/simon.jpeg";

export function UserAccount() {
  return (
    <>
      <Header
        titleMessage="Redécouvrez la fête de la musique"
        subTitleMessage="Profitez ensemble de cet événement inoubliable"
        promoMessage="Voir les prochains événements"
        showHeader={false}
      />
      <div className="w-full max-w-sm mx-auto mt-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg">
        <div className="flex flex-col justify-center items-center py-8">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={img}
            alt="Simon Bedard"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Simon Bedard
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Client PREMIUM
          </span>
        </div>
      </div>
    </>
  );
}
