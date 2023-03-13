import img from "../../assets/bg_product.jpg";
import { Buttton } from "../Button/Button";

export function CardProduct({ max_tickets, name, place, price }) {
  return (
    <div className="group bg-white border-slate-200 border-2 rounded-3xl p-5 cursor-pointer">
      <img
        className="rounded-xl aspect-square object-cover"
        src={img}
        alt="test"
      />

      <div className="flex flex-col gap-4 pt-5">
        <div>
          <h5 className="inline-block relative text-2xl font-bold tracking-tight text-primary after:w-0 after:h-full after:absolute after:left-0 after:top-0 after:bg-primary after:z-[9] after:box-content after:transition-all group-hover:after:w-full group-hover:text-white">
            <span className="z-10 relative">{name}</span>
          </h5>
        </div>

        <span className="text-2xl text-primary">
          {(price / 100).toFixed(0)}
          <span className="text-xs font-bold">
            .{(price / 100).toFixed(2).slice(-2)}
          </span>{" "}
          €
        </span>

        <div className="flex justify-between items-start flex-wrap-reverse gap-3">
          <Buttton>Du text</Buttton>
          <div className="flex flex-col gap-1 items-center">
            <label className="text-primary">Quantité</label>
            <div className="flex">
              <div className="w-10 px-3 py-1 text-xl text-primary border-slate-200 border-2 rounded-tl-full rounded-bl-full leading-none cursor-pointer hover:bg-primary hover:text-white hover:border-primary">
                -
              </div>
              <input
                min={0}
                max={max_tickets}
                defaultValue={1}
                type="number"
                className="appearance-none border-t-2 border-slate-200 border-b-2 text-center text-primary w-8"
              />
              <div className="w-10 px-3 py-1 text-xl text-primary border-slate-200 border-2 rounded-tr-full rounded-br-full leading-none cursor-pointer hover:bg-primary hover:text-white hover:border-primary">
                +
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
