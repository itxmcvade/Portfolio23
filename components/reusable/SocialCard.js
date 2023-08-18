import React from "react";
import Image from "next/image";

const SocialCard = ({ url, src, title, desc, customBg }) => {
  const colors = {
    github: "rgba(235, 235, 235, 0.1)",
    linkedin: "#086DCC",
    gmail: "rgba(235, 235, 235, 0.1)",
    
  };
  const bgColor = colors[customBg];

  return (
    <div
      onClick={() => window.open(url, "_blank")}
      className="group relative h-[200px] w-[200px] cursor-pointer overflow-hidden rounded-2xl   bg-hoverGray p-5  dark:bg-hoverBlack"
    >
      <span
        style={{ backgroundColor: bgColor }}
        className={`absolute top-5 z-0 h-12 w-12 rounded-full  transition-all duration-300 group-hover:scale-[10]`}
      ></span>
      <div className="relative z-10">
        <span
          style={{ backgroundColor: bgColor }}
          className={`grid h-12 w-12 place-items-center  rounded-full  transition-all duration-500`}
        >
          <Image
            width={50}
            height={50}
            loading="lazy"
            src={src}
            alt="social-logo"
            className="rounded-full border-none"
          />
        </span>
        <div className="mt-2">
          <h3 className="social-title font-normal">{title}</h3>
          <h6 className="social-desc group-hover:text-black dark:group-hover:text-white">
            {desc}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default SocialCard;
