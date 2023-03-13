export default function MainTitle({title, subtitle}){
    return(
        <section className="w-screen px-20 flex flex-col items-start py-9">
            <h1>{title}</h1>
            <p className="h-8 font-normal text-lg text-light">{subtitle}</p>
        </section>
    )
}