export default function NavigationBar() {
    return(
        <div className="flex flex-row h-20">
            <div className="w-3/12 flex justify-center items-center text-primary text-2xl font-bold"><span>JavaTelier</span></div>
            <div className="w-6/12 flex flex-grow justify-center items-center">
                <a href="#" className="mx-4 md:mx-6 lg:mx-8 text-primary">Home</a>
                <a href="#" className="mx-4 md:mx-6 lg:mx-8 text-primary">Events</a>
                <a href="#" className="mx-4 md:mx-6 lg:mx-8 text-primary">Products</a>
            </div>
            <div className="w-3/12 flex justify-center items-center text-primary">
                <a href="#" className="mx-1 ">
                    <svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="25" cy="25" r="24.3857" fill="white" stroke="#D4D2E3" stroke-width="1.22858"/>
                        <path d="M16.25 35V33.75C16.25 32.6009 16.4763 31.4631 16.9161 30.4015C17.3558 29.3399 18.0003 28.3753 18.8128 27.5628C19.6253 26.7503 20.5899 26.1058 21.6515 25.6661C22.7131 25.2263 23.8509 25 25 25C26.1491 25 27.2869 25.2263 28.3485 25.6661C29.4101 26.1058 30.3747 26.7503 31.1872 27.5628C31.9997 28.3753 32.6442 29.3399 33.0839 30.4015C33.5237 31.4631 33.75 32.6009 33.75 33.75V35" stroke="#8D8BA7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M25 25C26.3261 25 27.5979 24.4732 28.5355 23.5355C29.4732 22.5979 30 21.3261 30 20C30 18.6739 29.4732 17.4021 28.5355 16.4645C27.5979 15.5268 26.3261 15 25 15C23.6739 15 22.4021 15.5268 21.4645 16.4645C20.5268 17.4021 20 18.6739 20 20C20 21.3261 20.5268 22.5979 21.4645 23.5355C22.4021 24.4732 23.6739 25 25 25V25Z" stroke="#8D8BA7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
                <a href="#" className="mx-1">
                    <svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="25" cy="25" r="24.3857" fill="white" stroke="#D4D2E3" stroke-width="1.22858"/>
                        <path d="M20.3722 19.6501V17.7993C20.3722 15.1562 22.4359 13 24.9993 13C27.5628 13 29.6265 15.1562 29.6265 17.7993V19.6501H32.8247C32.9713 19.6502 33.1123 19.7058 33.2195 19.8058C33.3266 19.9057 33.3919 20.0425 33.4022 20.1887L34.5016 36.3837C34.5113 36.5367 34.4601 36.6873 34.3592 36.8027C34.2583 36.9182 34.1159 36.9891 33.963 37H16.0745C15.9214 37 15.7745 36.9392 15.6662 36.8309C15.5579 36.7226 15.4971 36.5757 15.4971 36.4225V36.3837L16.5965 20.1887C16.6063 20.0422 16.6714 19.9049 16.7786 19.8046C16.8858 19.7043 17.0271 19.6484 17.1739 19.6483L20.3722 19.6501ZM22.1083 19.6501H27.8922V17.7993C27.8922 16.0983 26.5966 14.7342 24.9993 14.7342C23.4021 14.7342 22.1083 16.0983 22.1083 17.7993V19.6501ZM17.3128 35.2676H32.6859L31.7457 21.3862H18.2548L17.3128 35.2676Z" fill="#8D8BA7"/>
                    </svg>
                </a>
            </div>
        </div>
    )
}