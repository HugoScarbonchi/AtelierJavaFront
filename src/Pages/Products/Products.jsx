import { useNavigate } from "react-router-dom";
import { Buttton } from "../../components/Button/Button";
import { Section } from "../../components/Section/Section";
import { CardProductsContainer } from "../../containers/CardProductsContainer/CardProductsContainer";
import { Header } from "../../containers/Header/Header";

export function Products(props) {
  const navigate = useNavigate();
  return (
    <>
      <Header
        titleMessage="Retrouvez tous les produits"
        subTitleMessage="Ramenez le meilleur souvenir de votre semaine"
        promoMessage="5 articles achetés, le 6ème offert"
        showHeader={true}
      />
      <Section className="flex-col items-start gap-1 mb-7">
        <h3 className="text-left">Tous les produits</h3>
        <Buttton onClick={() => navigate("/admin/products")} icon="add">
          Ajouter un produit
        </Buttton>
      </Section>

      <CardProductsContainer />
    </>
  );
}
