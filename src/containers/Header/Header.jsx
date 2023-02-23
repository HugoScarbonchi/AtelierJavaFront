import PromotionCode from "../../components/PromotionCode";
import NavigationBar from "../../components/NavigationBar";
import HeaderInfos from "../../components/HeaderInfos";

export default function Header({titleMessage, subTitleMessage, promoMessage}) {
    return(
        <>
            <PromotionCode />
            <NavigationBar />
            <HeaderInfos titleMessage={titleMessage} subTitleMessage={subTitleMessage} promoMessage={promoMessage}  />
        </>
    )
 }