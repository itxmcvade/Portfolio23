import React from "react";
import Image from "next/image";

const SetupCard = ({ url, title, desc }) => {
  return (
    <div className="group w-[300px] md:w-full flex cursor-pointer flex-col space-y-5 rounded-2xl bg-hoverGray  p-5 dark:bg-hoverBlack">
      <Image
        width={400}
        height={70}
        loading="lazy"
        src={url}
        alt={title}
        className="transform self-center border-none text-black transition-transform duration-300  group-hover:scale-110"
      />
      <div className="flex flex-col items-start space-y-2">
        <h3 className="font-normal">{title}</h3>
        <h4 className="w-auto rounded-lg  border bg-customGray px-3 py-1 text-sm  font-extralight dark:border-slate-100/10 dark:bg-hoverBlack">
          {desc}
        </h4>
      </div>
    </div>
  );
};

export default SetupCard;
