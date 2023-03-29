import { useState } from "react";
import { FeteDeLaMusique } from "../../../api/feteDeLaMusique";
import { Section } from "../../../components/Section/Section";
import { useNavigate } from "react-router-dom";

export function AdminProductAdd() {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [returnMessage, setReturnMessage] = useState();
  const navigate = useNavigate();

  async function handleAdd(e) {
    e.preventDefault();

    let returnAdd = await FeteDeLaMusique.createProduct({
      name: name,
      price: price * 100,
    });

    if (returnAdd) {
      setReturnMessage("Le produit a bien été ajouté");
      navigate("/admin/products");
    }
  }

  return (
    <Section className="flex-col">
      {returnMessage && returnMessage}
      <form className="w-full">
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Nom
          </label>
          <input
            type="text"
            id="name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            defaultValue={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Prix (€)
          </label>
          <input
            type="number"
            id="price"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            defaultValue={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            required
          />
        </div>
        <button
          type="submit"
          onClick={handleAdd}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Ajouter un nouveau produit
        </button>
      </form>
    </Section>
  );
}
