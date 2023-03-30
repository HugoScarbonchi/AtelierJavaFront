import { useEffect, useState } from "react";
import { FeteDeLaMusique } from "../../../api/feteDeLaMusique";
import { Section } from "../../../components/Section/Section";
import { ModalDelete } from "../../../components/ModalDelete/ModalDelete";
import { ButtonAdmin } from "../../../components/ButtonAdmin/ButtonAdmin";
import { Buttton } from "../../../components/Button/Button";
import { useNavigate } from "react-router-dom";

export function AdminProductsList() {
  const [productList, setProductList] = useState();
  const [modalContent, setModalContent] = useState();
  const [modalState, setModalState] = useState(false);
  const navigate = useNavigate();

  async function fetchProducts() {
    let resultFetch = await FeteDeLaMusique.fetchAllProducts();
    setProductList(resultFetch);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  function handleDelete(e) {
    setModalState(e.target.dataset.id);
    setModalContent("Êtes-vous certains de vouloir supprimer ce produit ?");
  }

  async function onDelete(e) {
    let resultDelete = await FeteDeLaMusique.deleteProductById(
      e.target.dataset.productId
    );
    console.log(resultDelete);

    if (resultDelete) {
      setModalState(false);
      setModalContent(false);

      setProductList(
        productList.filter((element) => {
          console.log(element);
          if (element.id == e.target.dataset.productId) {
            return false;
          }
          return true;
        })
      );
    }
  }

  function onCancel() {
    setModalState(false);
    setModalContent(false);
  }

  return <Section className="flex-col items-start">
    <Section className="flex-row !justify-start">
        <ButtonAdmin
            handle={function() {
                navigate("/admin")
            }}
        >
            Retour
        </ButtonAdmin>
    </Section>
  
    <Section className="mx-10 rounded-lg overflow-x-auto border border-gray-200">
      <table className="table-auto w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b border-gray-200">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {productList &&
            productList.map((product, i) => (
              <tr key={product.name + i} className="bg-white even:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {product.name}
                </td>
                <td className="px-6 py-4">{product.price / 100}</td>
                <td>
                  <a
                    href={`/admin/product/update/${product.id}`}
                    className="font-bold text-primary cursor-pointer hover:underline"
                  >
                    Modifier
                  </a>
                  <div
                    data-id={product.id}
                    onClick={handleDelete}
                    className="font-bold text-red-900 cursor-pointer hover:underline"
                  >
                    Supprimer
                  </div>
                </td>
              </tr>
            ))}
          <tr className="bg-white even:bg-gray-50">
            <td colSpan={3}>
              <ButtonAdmin
                handle={() => navigate("/admin/product/add")}
                className="font-bold m-5 text-green-800 border-green-800 text-center !w-52 mx-auto"
              >
                Ajouter un produit
              </ButtonAdmin>
            </td>
          </tr>
        </tbody>
      </table>

      {modalState && (
        <ModalDelete
          onConfirm={onDelete}
          onCancel={onCancel}
          content={modalContent}
          productId={modalState}
        />
      )}
    </Section>
  </Section>
}
