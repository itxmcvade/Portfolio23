import Navbar from "../components/reusable/Navbar";
import Layout from "../components/reusable/Layout";
import SEO from "../components/reusable/SEO";
import DiscountBanner from "../components/reusable/DiscountBanner";
import Image from "next/image";
import SocialCard from "../components/reusable/SocialCard";
import { SocialData } from "../data/data";
import Footer from "../components/reusable/Footer";
import { ContactData } from "../data/data";
import ContactCard from "../components/reusable/ContactCard";

const links = () => {
  return (
    <>
      {/* <DiscountBanner /> */}
      <Layout>
        <SEO
          title="Isaiah McVade - Developer & Designer"
          description="I'm a Front-End Engineer and Designer who enjoys conceptualizing and creating visually stunning products. I'm always looking to expand my knowledge and acquire new skills to make my work more efficient."
          link="https://IsaiahMcVade.com"
          image={"/images/thumbnail.png"}
        />
        <Navbar />

        <div className="mt-20  flex  flex-col items-center justify-center lg:mt-32   lg:flex-row lg:items-stretch ">
          {/* ----------About---------- */}
          <div className=" flex max-w-lg cursor-pointer flex-col items-start justify-center space-y-5 rounded-[40px] bg-primary px-10 py-10  dark:bg-hoverBlack lg:items-center  lg:px-0">
            <h4 className="text-lg font-semibold dark:text-secondary lg:text-2xl">
              <span className="text-black dark:text-primary">
                Hey, I&apos;m Isaiah
              </span>
            </h4>
            <Image
              width={200}
              height={70}
              loading="lazy"
              src="/images/Navpic.png"
              alt="profile-image"
              className="w-[200px] self-center border-none lg:w-[300px]"
            />
            <h2 className="text-lg font-semibold tracking-normal dark:text-secondary lg:text-2xl">
              <span className="text-black dark:text-primary"> Fusing </span>{" "}
              artistic design and code, I craft
              <span className="text-black dark:text-primary">
                {" "}
                unique{" "}
              </span>digital products,{" "}
              <span className="text-black dark:text-primary">
                enhancing{" "}
              </span>
              online brand presence for founders, startups, and creators.{" "}
              <span className="text-black dark:text-primary"></span>
            </h2>
          </div>
          {/* ----------Links---------- */}
          <div className="flex  w-full  flex-col">
            {ContactData.map((item) => (
              <ContactCard
                key={item.id}
                url={item.url}
                title={item.title}
                desc={item.desc}
                Icon={item.Icon}
                customBg={item.customBg}
              />
            ))}
          </div>
        </div>
        <Footer />
      </Layout>
    </>
  );
};

export default links;


