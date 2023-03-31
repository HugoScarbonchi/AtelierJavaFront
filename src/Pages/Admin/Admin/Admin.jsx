import { Section } from "../../../components/Section/Section"
import { ButtonAdmin } from "../../../components/ButtonAdmin/ButtonAdmin";
import { useNavigate } from "react-router-dom";
import { TitleSection } from "../../../components/TitleSection/TitleSection";

export function Admin() {

    const navigation = useNavigate();

    return <Section className="flex-col">
        <TitleSection
            title="Administration"
            subtitle="Visualisez, modifiez, ajoutez ou supprimez des éléments"
        />
        <Section className="flex-row">
            <ButtonAdmin
                handle={function() {
                    navigation("/admin/events")
                }}
            >
                Événements
            </ButtonAdmin>
            <ButtonAdmin
                handle={function() {
                    navigation("/admin/products")
                }}
            >
                Produits
            </ButtonAdmin>
        </Section>
    </Section>
}