import { Buttton } from "../../components/Button/Button";
import { Section } from "../../components/Section/Section";
import { CardEventsContainer } from "../../containers/CardEventsContainer/CardEventsContainer";

export function Events(props) {
  return (
    <>
      <Section className="flex-col items-start gap-1 mb-7">
        <h3 className="text-left">Tous les événements</h3>
        <Buttton icon="add">Ajouter un événement</Buttton>
      </Section>

      <CardEventsContainer />
    </>
  );
}
