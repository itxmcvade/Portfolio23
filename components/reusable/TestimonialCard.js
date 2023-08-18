import Image from "next/image";

const TestimonialCard = ({ src, title, role, stars, testimonial }) => {
  return (
    <div
      className={`flex flex-col items-start space-y-2 rounded-2xl border border-gray-200 bg-hoverGray p-5 text-black dark:border-slate-100/10 dark:bg-hoverBlack dark:text-primary md:items-center md:p-3 lg:items-start lg:p-5`}
    >
      <div className="flex flex-row items-center justify-center space-x-2 md:flex-col lg:flex-row">
        <Image
          width={100}
          height={70}
          loading="lazy"
          src={src}
          alt="profile-image"
          className="w-[60px] rounded-full border-none"
        />
        <div className="flex flex-col items-start space-y-0 md:items-center lg:items-start">
          <h3 className="font-medium">{title}</h3>
          <h4 className="w-auto text-sm  font-medium">{role}</h4>
        </div>
      </div>
      <h3>{stars}</h3>
      <h3 className="line-clamp-6 description">{testimonial}</h3>
    </div>
  );
};

export default TestimonialCard;
