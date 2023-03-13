import s from "./style.module.css";

export function Buttton({size='', icon=false, children, onClick}) {

    return <button onClick={onClick} href="#" className={`${s.btn} ${s[size]}`}>
        <div className="text-white">{children}</div>
        {icon == 'down' && <div className="text-white mx-4">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.3457 9.40436L9.00005 15.75L2.6544 9.40436" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 15.7499L9 2.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>}
        {icon == 'right' && <div className="text-white mx-4 -rotate-90">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.3457 9.40436L9.00005 15.75L2.6544 9.40436" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 15.7499L9 2.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>}
        {icon == 'add' && <div className="text-white mx-4 text-3xl leading-[0]">+</div>}
    </button>

}