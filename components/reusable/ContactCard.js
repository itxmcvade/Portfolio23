import { useRouter } from "next/router";

const ContactCard = ({ key, url, title, desc, Icon, customBg }) => {
  const router = useRouter();
  const colors = {
    purple: "#8843F9",
    green: "#D9FC00",
    pink: "#FF90E7",
    orange: "#F97B22",
    white: "#f2f2f2",
  };
  const bgColor = colors[customBg];

  return (
    <div
      onClick={() => {
        if (title === "Socials") {
          router.push("/links/socials");
        } else {
          window.open(url, "_blank");
        }
      }}
      key={key}
      style={{ backgroundColor: bgColor }}
      className="group w-full cursor-pointer rounded-full p-9  px-12 lg:w-[500px]"
    >
      <div className="flex flex-row items-center justify-between lg:h-12">
        <div className="flex flex-col items-start justify-center  ">
          <div className="absolute flex items-center space-y-6">
            <h2 className="leading-0 absolute rounded-full text-2xl font-semibold text-black transition-transform duration-300 group-hover:translate-y-[-50%] dark:text-black">
              {title}
            </h2>

            <h4 className="relative inline-flex w-full translate-y-4 rounded-full  text-xl font-semibold  tracking-normal text-black opacity-0  duration-300 ease-in-out group-hover:-translate-y-0 group-hover:opacity-60 dark:text-black">
              {desc}
            </h4>
          </div>
        </div>
        <Icon
          style={{ strokeWidth: "1.8" }}
          className="h-8 w-8 transform text-black transition-transform duration-300 group-hover:rotate-12"
        />
      </div>
    </div>
  );
};

export default ContactCard;
