import { Buttton } from "../Button/Button";

export default function HeaderInfos({
  titleMessage,
  subTitleMessage,
  promoMessage,
}) {
  return (
    <div className="flex flex-col justify-center items-center mt-6 mb-6">
      <h1>{titleMessage}</h1>
      <div className="text-center text-light font-montserrat font-light my-7">
        {subTitleMessage}
      </div>
      <div className="flex justify-center items-center">
        <Buttton size="lg" icon="down">
          {promoMessage}
        </Buttton>
      </div>
    </div>
  );
}
