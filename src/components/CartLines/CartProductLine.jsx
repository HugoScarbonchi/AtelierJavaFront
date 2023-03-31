import {useState} from "react";
import {FeteDeLaMusique} from "../../api/feteDeLaMusique";

export default function CartProductLine({detail}) {

    const [isHover, setIsHover] = useState(false)
    const [colorCross, setColorCross] = useState("#5D5A88")

    const clickOnCross = (productId) => {
        FeteDeLaMusique.removeProductToCart(productId)
    }

    return(
        <tr className="text-primary transition duration-300" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <td className="border-solid border-b-2 pr-12 py-3 text-start">
                {detail.product.name}
            </td>
            <td className="border-solid border-b-2 px-6 py-3 text-center">{detail.quantity}</td>
            <td className="border-solid border-b-2 pl-12 py-3 text-end">
                {(detail.product.price * detail.quantity) / 100}€ ttc
            </td>
            <td className="w-16 py-3 text-end transition duration-300 pl-7 " style={{opacity: isHover ? 1 : 0}}>
                <svg className="svg-icon cross transition duration-300 hover:scale-110 cursor-pointer" viewBox="0 0 20 20" width="40" height="40"
                     onMouseEnter={() => setColorCross("#dc2626")}
                     onMouseLeave={() => setColorCross("#5D5A88")}
                     onClick={() => clickOnCross(detail.product.id)}
                >
                    <path
                          fill={colorCross}
                          d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
                </svg>
            </td>
        </tr>
    )
}