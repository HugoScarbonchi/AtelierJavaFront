import { Buttton } from "../../components/Button/Button";
import { Section } from "../../components/Section/Section";
import { CardEventsContainer } from "../../containers/CardEventsContainer/CardEventsContainer";
import { Header } from "../../containers/Header/Header";

export function Events(props) {
  return (
    <>
    <Header
        titleMessage="Redécouvrez la fête de la musique"
        subTitleMessage="Profitez ensemble de cet événement inoubliable"
        promoMessage="Voir les prochains événements"
        showHeader={true}
      />
      <Section className="flex-col items-start gap-1 mb-7">
        <h3 className="text-left">Tous les événements</h3>
        <Buttton icon="add">Ajouter un événement</Buttton>
      </Section>

      <CardEventsContainer />
    </>
  );
}
