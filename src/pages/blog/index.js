import React from "react";
import Head from "next/head";
import Link from "next/link";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByLatestDate } from "../../utils";

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("src/posts"));

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("src/posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: { posts: posts.sort(sortByLatestDate) },
  };
}

const Blog = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Keng Kee | Learning & Productivity Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="https://sendfox.com/js/form.js" as="script" />
      </Head>

      <header
        id="header"
        className="w-screen p-10 py-20 grid place-content-center bg-red-50"
      >
        <div className="w-full h-16 text-orange-light text-xl font-black grid place-items-center absolute top-0 left-0 md:h-20 md:text-3xl">
          KENGKEE.COM
        </div>
        <div className="xl:max-w-screen-md h-full m-auto">
          <h1 className="mt-10 text-center text-gray-800 font-black text-2xl md:text-4xl">
            Learning & Productivity Hacks Blog
          </h1>
          <p className="mt-3 text-sm text-center text-gray-500 md:text-base">
            Welcome to my blog. These are my stories and some sharing about
            learning and productivity hacks. Enjoy!
          </p>
        </div>
      </header>

      <section className="w-screen m-auto p-8 md:p-16 xl:px-0 xl:max-w-screen-md">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12">
          {posts.slice(0, 6).map((post, index) => (
            <Link key={index} href={`/${post.slug}`} as={`/${post.slug}`}>
              <div className="mb-4 shadow-xl cursor-pointer">
                <img
                  src={post.frontmatter.cover_image}
                  width="512px"
                  height="512px"
                  className="object-cover h-56 w-full"
                  alt="profile photo"
                />
                <h2 className="p-6 text-xl text-left text-gray-700 md:text-2xl">
                  {post.frontmatter.title}
                </h2>
                <div className="mt-4 p-4 w-32 text-center text-sm font-semibold text-orange-light ml-auto hover:bg-orange-light hover:text-white">
                  READ MORE
                </div>
              </div>
            </Link>
          ))}
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

export default Blog;
