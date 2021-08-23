import React from "react";
import Head from "next/head";
import Link from "next/link";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("src/posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("src/posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}

const BlogPost = ({
  frontmatter: { title, description, date, cover_image },
  slug,
  content,
}) => {
  const structuredData = {
    "@context": "http://schema.org/",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `kengkee.com/${slug}`,
    },
    author: {
      "@type": "Person",
      name: "Keng Kee",
    },
    publisher: {
      "@type": "Organization",
      name: "",
      logo: {
        "@type": "ImageObject",
        url: "",
      },
    },
    headline: `${title}`,
    image: `${cover_image}`,
    datePublished: `${date}`,
  };

  return (
    <div>
      <Head>
        <title>{`${title}`}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="https://sendfox.com/js/form.js" as="script" />

        <meta name="title" content={`${title}`} />
        <meta name="description" content={`${description}`} />
        <meta name="keywords" content="test" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Keng Kee" />
        <meta property="og:title" content={`${title}`} />
        <meta property="og:site_name" content="kengkee.com" />
        <meta property="og:url" content={`kengkee.com/${slug}`} />
        <meta property="og:description" content={`${description}`} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={`${cover_image}`} />
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${title}`} />
        <meta name="twitter:site" content="@kengkee" />
        <meta name="twitter:description" content={`${description}`} />
        <meta name="twitter:image" content={`${cover_image}`} /> */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <header id="header" className="w-screen">
        <nav className="w-full h-20 m-auto px-10 flex justify-between items-center xl:max-w-screen-md">
          <Link href="/blog" as="/blog">
            <div className="text-orange-light text-xl font-black cursor-pointer md:text-3xl">
              KENGKEE.COM
            </div>
          </Link>
          <div>Menu</div>
        </nav>
        <div className="w-screen xl:max-w-screen-lg m-auto">
          <img src={cover_image} className="object-contain w-full h-auto" />
        </div>
      </header>

      <section className="w-screen">
        <div className="relative p-10 xl:-mt-36 mx-auto max-w-screen-md bg-white z-50 shadow-xl">
          <article
            className="m-auto prose lg:prose-lg"
            dangerouslySetInnerHTML={{ __html: marked(content) }}
          ></article>
        </div>
      </section>

      <section className="w-screen p-10 md:p-20">
        <div className="m-auto xl:px-0 xl:max-w-screen-md">
          <div className="text-2xl text-center text-gray-700 font-bold md:text-4xl">
            Get new posts via email:
          </div>
          <form
            method="post"
            action="https://sendfox.com/form/3z2w2e/1r65jv"
            className="sendfox-form w-full mx-auto mt-6 md:flex md:flex-row md:content-start md:justify-center md:mt-10"
            id="1r65jv"
            data-async="true"
            data-recaptcha="false"
          >
            <div className="w-full md:w-3/5 md:flex md:flex-col md:justify-items-start">
              <p>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  className="w-full md:text-xl border border-gray-300 p-3 italic box-border focus:outline-none focus:ring-2 focus:ring-orange-light"
                  required
                />
              </p>
              <p className="mt-2">
                <label className="text-gray-500 text-sm">
                  <input type="checkbox" name="gdpr" value="1" required /> I
                  agree to receive email updates and promotions.
                </label>
              </p>
              {/* no botz please */}
              <div
                style={{ position: "absolute", left: "-5000px" }}
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="a_password"
                  tabIndex="-1"
                  defaultValue=""
                  autoComplete="off"
                />
              </div>
            </div>
            <p className="md:w-2/5 md:pl-4">
              <button
                type="submit"
                className="text-sm md:text-xl bg-orange-light text-white w-full font-bold p-3 box-border mt-4 focus:outline-none border-2 hover:bg-white hover:text-orange-light hover:border-orange-light md:mt-0"
              >
                YES, SEND TO ME!
              </button>
            </p>
          </form>
        </div>
      </section>

      <footer className="p-10 text-center text-sm text-white w-full bg-orange-light">
        Copyright 2021 @ Keng Kee <br />- All Rights Reserved -
      </footer>
    </div>
  );
};

export default BlogPost;
