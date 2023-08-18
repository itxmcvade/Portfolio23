import Navbar from "../components/reusable/Navbar";
import Layout from "../components/reusable/Layout";
import SEO from "../components/reusable/SEO";
import DiscountBanner from "../components/reusable/DiscountBanner";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import path from "path";
import Footer from "../components/reusable/Footer";

const Blogs = ({ posts }) => {
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

        <div className="mt-20 flex  flex-col justify-center lg:mt-32">
          <div className="flex flex-col items-start space-y-5 md:px-5">
            <h1>Blogs</h1>
            <h4>
              Sharing and writing about my thoughts and tutorials on design,
              development and one-person business.
            </h4>
          </div>

          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-x-0 lg:gap-y-5">
            {posts?.map(({ slug, frontmatter }) => (
              <div key={slug}>
                <Link href={`/blogs/${slug}`}>
                  <div
                    className={`group cursor-pointer space-y-5 rounded-2xl transition duration-300 ease-out  hover:-translate-y-2 hover:bg-hoverGray dark:hover:bg-hoverBlack p-4`}
                  >
                    <div className="overflow-hidden rounded-2xl">
                      <Image
                        width={400}
                        height={400}
                        loading="lazy"
                        src={frontmatter.cover}
                        alt="blog-image"
                        className="lg:h-68 h-auto w-full rounded-2xl border  object-cover  dark:border-slate-100/10"
                      />
                    </div>
                    <div className="flex flex-col items-start space-y-3">
                      <h3>{frontmatter.title}</h3>
                      <h6>{frontmatter.desc}</h6>
                      <h4 className="category">{frontmatter.category}</h4>
                      
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </Layout>
    </>
  );
};

export default Blogs;

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("blogs"));
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");

    const readFile = fs.readFileSync(path.join("blogs", fileName)).toString();

    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  posts.sort((a, b) => {
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
  });

  return {
    props: {
      posts,
    },
  };
}
