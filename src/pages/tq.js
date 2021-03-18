import Head from "next/head";
import Link from "next/link";

function ThankYou() {
  return (
    <div className="h-screen w-screen">
      <Head>
        <title>Keng Kee | Thank You</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex" />
      </Head>

      <section className="h-screen grid place-content-center text-center text-gray-800 p-10 md:px-20 md:w-3/4 md:mx-auto">
        <h1 className="text-4xl font-black md:text-6xl">
          Thank You For Signing Up My Newsletter.
        </h1>
        <Link href="/" as="/" replace>
          <a>
            <button
              type="button"
              className="text-sm bg-orange-light text-white w-full md:w-1/2 font-bold p-3 mt-6 focus:outline-none border-2 hover:bg-white hover:text-orange-light hover:border-orange-light"
            >
              BACK TO MAIN PAGE
            </button>
          </a>
        </Link>
      </section>
    </div>
  );
}

export default ThankYou;
