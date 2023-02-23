import { useEffect, useState } from "react";
import { FeteDeLaMusique } from "../../api/feteDeLaMusique";

export function Products(props) {
  const [productList, setProductList] = useState();

  async function fetchProducts() {
    const resultFetch = await FeteDeLaMusique.fetchAllProducts();
    setProductList(resultFetch);
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <ul>
      {productList &&
        productList.map((el) => {
          return (
            <li>
              {el.name}  {el.price / 100}$
            </li>
          );
        })}
    </ul>
  );
}
