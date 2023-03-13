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
        titleMessage="Venez découvrir la fête de la musique"
        subTitleMessage="Achetez vos billets pour les évènements de la semaine et rapportez un souvenir de votre groupe préféré"
        promoMessage="Voir les prochains évènements"
        showHeader={true}
      />
      <TitleSection
        title="Évènements à venir"
        subtitle="Accéder facilement aux évènements qui se déroulent dans les prochains jours"
      />

      <Section className="mb-5">
        <CardEventsContainer max={3} />
      </Section>

      <Section>
        <Buttton onClick={() => navigate("/events")} size="lg" icon="right">
          Voir tous les évènements
        </Buttton>
      </Section>

      <TitleSection
        title="Nos produits phares"
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
