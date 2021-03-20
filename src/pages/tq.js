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

      <section className="h-screen grid place-content-center text-center p-10 md:px-20 lg:max-w-screen-md md:mx-auto">
        <h1 className="font-black text-gray-800 text-4xl md:text-5xl">
          Thank You For Signing Up For My Newsletter.
        </h1>
        <Link href="/" as="/" replace>
          <a>
            <button
              type="button"
              className="text-sm md:text-xl bg-orange-light text-white w-full md:w-5/6 font-bold p-3 mt-6 md:mt-10 focus:outline-none border-2 hover:bg-white hover:text-orange-light hover:border-orange-light"
            >
              BACK TO MAIN PAGE
            </button>
          </a>
        </Link>
        <p className="italic text-sm text-orange-light mt-3 md:mt-6">
          * Please check your email inbox to confirm your subscription.
        </p>
      </section>
    </div>
  );
}

export default ThankYou;
