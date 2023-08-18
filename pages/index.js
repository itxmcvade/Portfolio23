import Head from "next/head";
import Image from "next/image";
import Layout from "../components/reusable/Layout";
import SEO from "../components/reusable/SEO";
import HomePage from "../components/HomePage";
import DiscountBanner from "../components/reusable/DiscountBanner";
import Footer from "../components/reusable/Footer";
import fs from "fs";
import matter from "gray-matter";

import path from "path";

export default function Home({ posts }) {
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

        <HomePage posts={posts} />
      </Layout>
      {/* <Footer /> */}
    </>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("blogs"));
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");

    const readFile = fs.readFileSync(`blogs/${fileName}`, "utf-8");

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
