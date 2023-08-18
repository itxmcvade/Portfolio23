import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import md from "markdown-it";
import { marked } from "marked";
import Layout from "../../components/reusable/Layout";
import SEO from "../../components/reusable/SEO";
import Navbar from "../../components/reusable/Navbar";
import Image from "next/image";
import Footer from "../../components/reusable/Footer";

export default function PostPage({
  frontmatter: { title, desc, date, cover, icon },
  slug,
  content,
}) {
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
      </Layout>

      <div className="prose prose-sm mx-auto flex flex-col items-start justify-center overflow-hidden p-4 py-8 dark:prose-invert sm:prose lg:prose-lg xl:prose-xl sm:p-6 lg:pt-32">
        <h2>{title}</h2>
        <h5 className="text-blogLight">
          {desc.split("\n").map((item, key) => {
            return (
              <React.Fragment key={key}>
                {item}
                <br />
                <br />
              </React.Fragment>
            );
          })}
        </h5>
        <Image
          width={400}
          height={400}
          loading="lazy"
          src={cover}
          alt="blog-image"
          className="lg:h-68 h-auto w-full rounded-2xl border object-cover dark:border-slate-100/10"
        />
        <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
      </div>

      <Layout>
        <Footer />
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync("blogs");

  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`blogs/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
