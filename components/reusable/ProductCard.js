import Image from "next/image";
import { HiArrowUpRight } from "react-icons/hi2";

const ProductCard = ({ id, src, title, desc, url, category }) => {
  return (
    <div
      key={id}
      className={`group cursor-pointer space-y-5 rounded-2xl p-4 transition duration-300  ease-out hover:-translate-y-2 hover:bg-hoverGray dark:hover:bg-hoverBlack lg:gap-x-0 lg:gap-y-5`}
      onClick={() => window.open(url, "_blank")}
    >
      <div className="overflow-hidden rounded-2xl">
        <Image
          width={400}
          height={400}
          loading="lazy"
          src={src}
          alt="blog-image"
          className="lg:h-68 h-auto w-full rounded-2xl border  object-cover  dark:border-slate-100/10"
        />
      </div>
      <div className="flex flex-col items-start space-y-3">
        <h3>{title}</h3>
        <h3 className="description">{desc}</h3>
        <div className="flex w-full flex-row items-center justify-between">
          {" "}
          <h4 className="w-auto rounded-lg  border bg-customGray px-3 py-1 text-sm  font-extralight dark:border-slate-100/10 dark:bg-hoverBlack">
            {category}
          </h4>
          <HiArrowUpRight
            style={{ strokeWidth: "1" }}
            className="h-7 w-7 rounded-full border p-1.5 text-secondary group-hover:text-black dark:border-slate-100/10 dark:text-secondary dark:group-hover:text-primary"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
