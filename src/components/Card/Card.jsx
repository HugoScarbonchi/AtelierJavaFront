import img from "../../assets/bg_card.jpg";
import s from "./style.module.css";

export function Card({ max_tickets, name, place }) {
  return (
    <div className="bg-white border-violet-200 border rounded-3xl shadow p-5">
      <img className="rounded-xl" src={img} alt="test" />

      <div className="p-5">
        <a href="#">
          <h5 className="mb-8 text-2xl font-bold tracking-tight text-indigo-800 dark:text-white">
            {name}
          </h5>
        </a>

        <div className="flex justify-between items-center">
          <a
            href="#"
            className="inline-flex items-center px-6 py-4 rounded-full text-sm font-medium text-center text-white bg-violet-900 rounded-lg"
          >
            Acheter mon billet
          </a>
          <div className="flex flex-col w-14">
            <label className="text-indigo-800">Quantité</label>
            <input
              min={0}
              max={max_tickets}
              type="number"
              className="border rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

