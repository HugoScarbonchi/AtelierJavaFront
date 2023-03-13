// import { useEffect, useState } from "react";
// import { FeteDeLaMusique } from "../../api/feteDeLaMusique";

// export function Products(props) {
//   const [productList, setProductList] = useState();

//   async function fetchProducts() {
//     const resultFetch = await FeteDeLaMusique.fetchAllProducts();
//     setProductList(resultFetch);
//   }

//   useEffect(() => {
//     fetchProducts();
//   }, []);


import { Buttton } from "../../components/Button/Button";
import { Section } from "../../components/Section/Section";
import { CardProductsContainer } from "../../containers/CardProductsContainer/CardProductsContainer";

export function Products(props) {
  return (
    <>
      <Section className="flex-col items-start gap-1 mb-7">
        <h3 className="text-left">Tous les produits</h3>
        <Buttton icon="add">Ajouter un produit</Buttton>
      </Section>

      <CardProductsContainer />
    </>
  );
}
