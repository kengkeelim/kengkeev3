import Head from "next/head";
import Link from "next/link";

function ThankYou() {
  return (
    <div className="h-screen w-screen bg-gradient-to-br from-gray-100 via-zinc-50 to-pink-100">
      <Head>
        <title>Keng Kee | Thank You</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex" />
      </Head>

      <section className="h-screen grid place-content-center text-center p-10 md:px-20 lg:max-w-screen-md md:mx-auto">
        <h1 className="text-xl text-center text-stone-950 font-bold md:text-4xl">
          Thank you for signing up for my newsletter.
        </h1>
        <Link href="/" as="/" replace>
          <button
            type="button"
            className="text-sm sm:text-base md:text-lg bg-orange-400 text-stone-950 w-full max-w-xs h-12 font-bold p-2 box-border mt-6 md:mt-10 focus:outline-none hover:shadow-xl"
          >
            BACK TO MAIN PAGE
          </button>
        </Link>
        <p className="italic text-sm text-zinc-800 mt-3 md:mt-6">
          * Please check your email inbox to confirm your subscription.
        </p>
      </section>
    </div>
  );
}

export default ThankYou;
