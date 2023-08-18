import React from "react";
import { AllProducts } from "../data/data";
import Layout from "../components/reusable/Layout";
import SEO from "../components/reusable/SEO";
import Navbar from "../components/reusable/Navbar";
import Footer from "../components/reusable/Footer";
import ProductCard from "../components/reusable/ProductCard";

const Shop = () => {
  return (
    <div>
      {/* <DiscountBanner /> */}
      <Layout>
        <SEO
          title="Isaiah McVade - Developer & Designer"
          description="I'm a Front-End Engineer and Designer who enjoys conceptualizing and creating visually stunning products. I'm always looking to expand my knowledge and acquire new skills to make my work more efficient."
          link="https://IsaiahMcVade.com"
          image={"/images/thumbnail.png"}
        />
        <Navbar />

        <div className="mt-20  lg:mt-32 flex flex-col justify-center">
          <div className="flex flex-col items-start space-y-5 md:px-5">
            <h1>Shop</h1>
            <h4>
            Your one-stop-shop for cutting-edge digital products to elevate your brand, design, coding & productivity.
            </h4>
          </div>
          
        </div>
        <Footer />
      </Layout>
    </div>
  );
};

export default Shop;
