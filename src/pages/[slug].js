import React, { useState } from "react";
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

  const [toggle, setToggle] = useState(false);

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
        <nav className="w-screen max-w-screen-md h-20 m-auto px-10 flex justify-between items-center lg:px-0">
          <Link href="/blog" as="/blog">
            <div className="text-orange-light text-xl font-black cursor-pointer md:text-3xl">
              KENGKEE.COM
            </div>
          </Link>
          <div
            className={`md:hidden ${
              toggle ? "text-orange-light" : "text-gray-500"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="512"
              height="512"
              viewBox="0 0 512 512"
              className="p-2 h-12 w-12 fill-current"
              onClick={() => setToggle(!toggle)}
            >
              <g>
                <g xmlns="http://www.w3.org/2000/svg">
                  <path d="m147.976 395.304c-4.784-9.647-8.308-19.911-10.381-30.414-3.689-18.698-2.926-37.566 2.268-56.081l12.253-43.679 14.197-50.608 32.516 33.953 31.757-50.623 25.414-40.511 25.413 40.51 31.757 50.623 32.516-33.953 14.197 50.608 12.253 43.679c5.194 18.515 5.957 37.383 2.268 56.081-2.072 10.503-5.597 20.768-10.381 30.414 53.23-41.995 80.659-114.07 60.521-185.857l-23.67-84.375-44.015 45.96-100.859-160.777-100.86 160.777-44.015-45.96-23.67 84.375c-20.138 71.788 7.291 143.864 60.521 185.858z" />
                  <path d="m343.252 316.912-12.253-43.679-22.785 23.792-52.214-83.231-52.213 83.231-22.785-23.792-12.253 43.679c-15.976 56.95 25.868 114.262 85.007 115.322 1.497.027 2.993.027 4.49 0 59.138-1.06 100.982-58.372 85.006-115.322z" />
                  <path d="m81.96 419.747c-20.622 7.921-30.919 31.06-22.997 51.683l1.785 4.648c7.921 20.622 31.06 30.919 51.683 22.997l104.882-40.286c-38.304-7.115-73.481-25.051-101.832-51.918z" />
                  <path d="m430.04 419.747-33.521-12.876c-28.351 26.867-63.528 44.803-101.832 51.918l104.882 40.286c20.622 7.921 43.762-2.375 51.683-22.997l1.785-4.648c7.922-20.623-2.374-43.762-22.997-51.683z" />
                  <path d="m472 351.215h-33.741c-5.192 10.093-11.202 19.77-17.97 28.866-1.293 1.738-2.615 3.447-3.954 5.136l24.463 6.524c17.454 6.704 31.253 19.805 38.855 36.887.919 2.066 1.73 4.162 2.441 6.279 17.204-4.472 29.906-20.108 29.906-38.712v-4.979c0-22.092-17.909-40.001-40-40.001z" />
                  <path d="m96.73 386.528c-1.705-2.114-3.387-4.253-5.018-6.446-6.768-9.096-12.778-18.773-17.97-28.866h-33.742c-22.091 0-40 17.909-40 40v4.979c0 18.605 12.702 34.24 29.907 38.713.711-2.117 1.522-4.212 2.441-6.279 7.601-17.083 21.4-30.183 38.855-36.887z" />
                </g>
              </g>
            </svg>
          </div>
          <div className="hidden md:block">
            <ul className="flex flex-row justify-between">
              <li className="px-2 text-gray-500">YouTube</li>
              <li className="px-2 text-gray-500">Instagram</li>
              <li className="px-2 text-gray-500">Linkedin</li>
            </ul>
          </div>
        </nav>
        <div className={`md:hidden ${toggle ? "block" : "hidden"}`}>
          <ul className="w-screen m-auto px-10 transition-all">
            <li className="py-2 text-gray-500">YouTube</li>
            <li className="py-2 text-gray-500">Instagram</li>
            <li className="py-2 text-gray-500">Linkedin</li>
          </ul>
        </div>

        <div className="w-4/5 max-w-screen-md m-auto border-gray-300 border-b md:w-11/12"></div>

        <div className="w-screen xl:max-w-screen-lg mt-4 m-auto">
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
