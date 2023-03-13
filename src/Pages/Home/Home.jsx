import { Section } from "../../components/Section/Section";
import { TitleSection } from "../../components/TitleSection/TitleSection";
import { Buttton } from "../../components/Button/Button";
import { CardEventsContainer } from "../../containers/CardEventsContainer/CardEventsContainer";
import { useNavigate } from "react-router-dom";
import { Header } from "../../containers/Header/Header";

export function Home() {
  const navigate = useNavigate();
  return (
    <>
    <Header
        titleMessage="Redécouvrez la fête de la musique"
        subTitleMessage="Profitez ensemble de cet événement inoubliable"
        promoMessage="Voir les prochains événements"
        showHeader={true}
      />
      <TitleSection
        title="Titre"
        subtitle="Sous titre"
        append={<Buttton>test</Buttton>}
      />

      <Section className="mb-5">
        <CardEventsContainer max={3} />
      </Section>

      <Section>
        <Buttton size="lg" icon="right">
          Voir tous les produits
        </Buttton>
      </Section>

      <TitleSection
        title="Nos produits"
        subtitle="Achetez les produits de vos artistes préférés pour garder un souvenir de cette fête de la musique"
      />

      <Section className="mb-5">
        <CardEventsContainer max={3} />
      </Section>

      <Section>
        <Buttton onClick={() => navigate("/products")} size="lg" icon="right">
          Voir tous les produits
        </Buttton>
      </Section>
    </>
  );
}
