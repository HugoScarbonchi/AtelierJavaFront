import PromotionCode from "./PromotionCode";
import NavigationBar from "./NavigationBar";
import HeaderInfos from "./HeaderInfos";

export default function Header({titleMessage, subTitleMessage, promoMessage}) {
    return(
        <>
            <PromotionCode />
            <NavigationBar />
            <HeaderInfos titleMessage={titleMessage} subTitleMessage={subTitleMessage} promoMessage={promoMessage}  />
        </>
    )
 }