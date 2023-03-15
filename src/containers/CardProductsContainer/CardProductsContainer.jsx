import { useEffect, useState } from "react";
import { FeteDeLaMusique } from "../../api/feteDeLaMusique";
import { CardProduct } from "../../components/CardProduct/CardProduct";

export function CardProductsContainer({ max = false }) {
  const [productList, setProductList] = useState();

  async function fetchProducts() {
    let resultFetch = await FeteDeLaMusique.fetchAllProducts();
    console.log("Mes produits", resultFetch);
    if (max) {
      resultFetch = resultFetch.slice(0, max);
    }
    setProductList(resultFetch);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className=" grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto">
      {productList &&
        productList.map((product, i) => (
          <CardProduct
              key={product.name + i}
              name={product.name}
              price={product.price}
              product={product}

          />
        ))}
    </div>
  );
}
