import Link from "next/link";
import Navbar from "./reusable/Navbar";
import { AllProducts } from "../data/data";
import Footer from "./reusable/Footer";
import ProductCard from "./reusable/ProductCard";
import TestimonialCard from "./reusable/TestimonialCard";
import { TestimonialsData } from "../data/data";
import BlogCard from "./reusable/BlogCard";
import {
  HiArrowUpRight,
  HiOutlineSparkles,
  HiArrowLongRight,
} from "react-icons/hi2";

const HomePage = ({ posts }) => {
  return (
    <div>
      <Navbar />
      {/* -----------HERO-SECTION----------- */}
      <div className="mt-20 flex flex-col items-start space-y-5 md:mt-32 md:space-y-7 md:px-5 lg:mt-32">
        <h1>
          Hey, I&apos;m Isaiah -- Front end developer by day, pixel perfectionist by night – I turn designs into digital dreams.
        </h1>
        <h2 className="dark:text-secondary">
          <span className="span"> Fusing </span>
          artistic design and code, I craft
          <span className="span"> unique & precise </span>digital products,
          <span className="span"> enhancing</span> online brand presence for founders, startups, and creators.
          
        </h2>

        <h3 className="description relative flex items-center pl-5">
          Available for new opportunities
          <span className="absolute left-0 top-1/2 flex h-2 w-2 -translate-y-1/2 pl-1">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blcklight pl-1 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-blcklight pl-2"></span>
          </span>
        </h3>

        <div className="flex w-full flex-col items-center justify-center space-y-5 md:flex-row md:justify-start md:space-x-5 md:space-y-0">
          <button
            onClick={() => window.open("https://tally.so/r/w542kZ", "_blank")}
            className="cta-btn group bg-blcklight text-white"
          >
            Hire Me
            <HiArrowUpRight
              style={{ strokeWidth: "1.5" }}
              className="cta-btn-icons"
            />
          </button>
          <button
            onClick={() =>
              window.open(
                "https://Isaiah.lemonsqueezy.com/checkout?cart=05159033-b7d2-4b00-b5f0-511d9cd5345a",
                "_blank"
              )
            }
            className="cta-btn group border border-gray-200 bg-hoverGray text-black shadow-sm hover:bg-white  dark:border-slate-100/10 dark:bg-hoverBlack dark:text-primary dark:hover:bg-black"
          >
            Get Template
            <HiOutlineSparkles
              style={{ strokeWidth: "1.5" }}
              className="cta-btn-icons h-4 w-4"
            />
          </button>
        </div>
      </div>
      {/* -------------LATEST DROPS ------------- */}
      <div className="mt-28 lg:mt-32">
        

        
        {/* ---------------BLOGS--------------- 
        <div className="mt-28 lg:mt-32">
          <h4 className="home-sections-heading">BLOGS</h4>
          <div className="mt-12 grid gap-5 lg:grid-cols-2 lg:gap-10">
            {posts?.slice(0, 4).map(({ slug, frontmatter }) => (
              <div key={slug}>
                <Link href={`/blogs/${slug}`}>
                  <BlogCard
                    id={slug}
                    slug={slug}
                    title={frontmatter.title}
                    date={frontmatter.date}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div> */}

        {/* -------------TESTIMONIALS-------------
        <div className="mt-28 flex flex-col lg:mt-32 ">
          <h4 className="home-sections-heading">HEAR IT FROM OTHERS</h4>

          <div className="mt-12 grid gap-5  md:grid-cols-3 md:gap-5  md:px-5">
            {TestimonialsData.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                src={testimonial.src}
                title={testimonial.title}
                role={testimonial.role}
                stars={testimonial.stars}
                layout={testimonial.layout}
                testimonial={testimonial.testimonial}
              />
            ))}
          </div>
          <button
            onClick={() =>
              window.open(
                "https://widget.senja.io/widget/a4b9d9c7-3377-4fe1-b983-3333b96fef27",
                "_blank"
              )
            }
            className="cta-btn group self-end text-black shadow-none dark:text-primary"
          >
            View All
            <HiArrowLongRight
              style={{ strokeWidth: "1.5" }}
              className="cta-btn-icons h-4 w-4"
            />
          </button>
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
