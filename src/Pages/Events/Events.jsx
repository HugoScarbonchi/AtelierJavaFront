import { useNavigate } from "react-router-dom";
import { Buttton } from "../../components/Button/Button";
import { Section } from "../../components/Section/Section";
import { CardEventsContainer } from "../../containers/CardEventsContainer/CardEventsContainer";
import { Header } from "../../containers/Header/Header";

export function Events(props) {
  const navigate = useNavigate();
  return (
    <>
      <Header
        titleMessage="Retrouvez tous les évènements"
        subTitleMessage="Réservez vite votre billet avant qu'il ne soit trop tard"
        promoMessage="Pour 5 billets achetés, le 6ème offert"
        showHeader={true}
      />
      <Section className="flex-col items-start gap-1 mb-7">
        <h3 className="text-left">Tous les événements</h3>
        <Buttton onClick={() => navigate("/admin/events")} icon="add">
          Ajouter un événement
        </Buttton>
      </Section>

      <CardEventsContainer />
    </>
  );
}
