import { useParams } from "react-router-dom"

import { Section } from "../../../components/Section/Section"
import { useEffect, useState } from "react";
import { FeteDeLaMusique } from "../../../api/feteDeLaMusique";

export function AdminProductUpdate() {

    const {id} = useParams();

    const [product, setProduct] = useState();
    const [name, setName] = useState();
    const [price, setPrice] = useState();

    const [returnMessage, setReturnMessage] = useState();

    async function fetchProduct() {
        let product = await FeteDeLaMusique.fetchProductById(id);

        setName(product.name);
        setPrice(product.price/100);

        setProduct(product);
    }

    useEffect(() => {
        fetchProduct();
    }, []);

    async function handleChange(e) {
        e.preventDefault();

        let updatedProduct = product;
        updatedProduct.name = name;
        updatedProduct.price = price*100;

        let returnUpdate = await FeteDeLaMusique.updateProductById(updatedProduct);

        if(returnUpdate) {
            setReturnMessage("Le produit a bien été modifié");
        }
    }

    return product ? <Section className="flex-col">
        {returnMessage && returnMessage}
        <form className="w-full">
            <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Nom</label>
                <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" defaultValue={name} onChange={(e) => { setName(e.target.value) }} required />
            </div>
            <div className="mb-6">
                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">Prix (€)</label>
                <input type="number" id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" defaultValue={price} onChange={(e) => { setPrice(e.target.value) }} required />
            </div>
            <button type="submit" onClick={handleChange} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Modifier le produit</button>
        </form>
    </Section> : <div>Chargement</div>
}