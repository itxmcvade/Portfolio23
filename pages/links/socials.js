import Navbar from "../../components/reusable/Navbar";
import Layout from "../../components/reusable/Layout";
import SEO from "../../components/reusable/SEO";
import DiscountBanner from "../../components/reusable/DiscountBanner";
import SocialCard from "../../components/reusable/SocialCard";
import { SocialData } from "../../data/data";
import Footer from "../../components/reusable/Footer";

const socials = () => {
  return (
    <>
      <Layout>
        <SEO
          title="Isaiah McVade - Developer & Designer"
          description="I'm a Front-End Engineer and Designer who enjoys conceptualizing and creating visually stunning products. I'm always looking to expand my knowledge and acquire new skills to make my work more efficient."
          link="https://IsaiahMcVade.com"
          image={"/images/thumbnail.png"}
        />
        <Navbar />
        <div className="mt-40 flex flex-col justify-center md:px-5 lg:mt-32">
          <div className="z-0 grid  grid-cols-4 gap-10 ">
            {SocialData.map((socials, index) => (
              <SocialCard
                key={index}
                url={socials.url}
                customBg={socials.customBg}
                src={socials.src}
                title={socials.title}
                desc={socials.desc}
              />
            ))}
          </div>
        </div>

        <Footer />
      </Layout>
    </>
  );
};

export default socials;
