export function TitleSection({title, subtitle, append}) {
  return (
    <section className="my-7">
      <h3>{title}</h3>
      <div className="text-center text-light font-montserrat font-light my-7">
        {subtitle}
      </div>
      <div className="flex justify-center items-center">
        {append}
      </div>
    </section>
  );
}
