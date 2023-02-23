import HeaderInfos from "../../components/HeaderInfos/HeaderInfos";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import PromotionCode from "../../components/PromotionCode/PromotionCode";

export function Header({
  titleMessage,
  subTitleMessage,
  promoMessage,
}) {
  return (
    <>
      <PromotionCode />
      <NavigationBar />
      <HeaderInfos
        titleMessage={titleMessage}
        subTitleMessage={subTitleMessage}
        promoMessage={promoMessage}
      />
    </>
  );
}
