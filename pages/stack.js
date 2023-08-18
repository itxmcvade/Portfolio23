import React from "react";
import Navbar from "../components/reusable/Navbar";
import Layout from "../components/reusable/Layout";
import SEO from "../components/reusable/SEO";
import DiscountBanner from "../components/reusable/DiscountBanner";
import Image from "next/image";
import Footer from "../components/reusable/Footer";
import StackCard from "../components/reusable/StackCard";
import { StackData, SetupData } from "../data/data";
import SetupCard from "../components/reusable/SetupCard";

const Stack = () => {
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
        <div className="mt-20  flex flex-col justify-center md:px-5 lg:mt-32">
          <div className="flex flex-col items-start space-y-5 md:px-5">
            <h1>Apps</h1>
            <h4>
            The tools I employ to create awesome projects and organize my daily life.
            </h4>
          </div>
          <div className="mt-10 grid gap-10 justify-items-center md:justify-items-start md:grid-cols-3 lg:grid-cols-4 md:gap-5 lg:gap-x-10 lg:gap-y-10">
            {StackData.map((item, index) => (
              <StackCard
                key={index}
                url={item.url}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </div>
        </div>
        <div className="mt-40  flex flex-col justify-center md:px-5 lg:mt-32">
          
          
        </div>
        <Footer />
      </Layout>
    </>
  );
};

export default Stack;
