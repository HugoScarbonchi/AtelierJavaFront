import HeaderInfos from "../../components/HeaderInfos/HeaderInfos";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import PromotionCode from "../../components/PromotionCode/PromotionCode";

export function Header({
  titleMessage,
  subTitleMessage,
  promoMessage,
  showHeader,
    buttonRoute
}) {
  return (
    <>
      <PromotionCode />
      <NavigationBar />
        {showHeader &&
            <HeaderInfos
                titleMessage={titleMessage}
                subTitleMessage={subTitleMessage}
                promoMessage={promoMessage}
                buttonRoute={buttonRoute}
            />
        }

    </>
  );
}
