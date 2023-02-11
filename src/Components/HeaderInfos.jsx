export default function HeaderInfos({titleMessage, subTitleMessage, promoMessage}) {
    return(
        <div className="flex-col justify-center items-center my-6">
            <div className="text-6xl text-primary font-bold text-center my-7"><span >{titleMessage}</span></div>
            <div className="text-center text-light font-montserrat font-light my-7">{subTitleMessage}</div>
            <div className="flex justify-center items-center">
                <a href="#">
                    <div className="flex justify-center items-center bg-primary p-4 border rounded-full">
                        <div className="text-white mx-4">{promoMessage}</div>
                        <div className="text-white mx-4">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.3457 9.40436L9.00005 15.75L2.6544 9.40436" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9 15.7499L9 2.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </a>

            </div>

        </div>
    )
}