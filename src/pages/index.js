import Head from "next/head";

import styles from "../styles/Home.module.css";

import profile from "../assets/undraw_hello_re_3evm.svg";

export default function Home() {
  return (
    <div className={`${styles.container} bg-gradient-to-br from-gray-100 via-zinc-50 to-pink-100`}>
      <Head>
        <title>Keng Kee | My Personal Website</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="https://sendfox.com/js/form.js" as="script" />
      </Head>

      <header
        id="header"
        className="w-screen h-screen p-10 grid place-content-center sm:p-24"
      >
        <div className="lg:max-w-screen-md h-full">
          <h1 className="text-center text-stone-950 font-black text-5xl md:text-6xl lg:text-7xl">
            Do you want to <span className="text-orange-400">do more</span> with{" "}
            <span className="text-pink-600">less</span>?
          </h1>
          <p className="text-base leading-relaxed sm:leading-loose md:text-lg text-center text-zinc-800 mt-6 md:mt-10">
            Hi, my name is Keng Kee (a.k.a KK). I like sharing about learning
            and productivity hacks. Get my BEST updates delivered to your inbox:
          </p>
          <form
            method="post"
            action="https://sendfox.com/form/3z2w2e/1r65jv"
            className="sendfox-form w-full mx-auto mt-6 md:mt-10 md:flex md:flex-row md:content-start md:justify-center"
            id="1r65jv"
            data-async="true"
            data-recaptcha="false"
          >
            <div className="m-auto max-w-xs md:w-2/3 md:m-0 md:flex md:flex-col md:justify-items-start">
              <div>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  className="w-full h-12 text-base sm:text-lg border border-gray-300 p-2 italic box-border focus:outline-none focus:ring-2 focus:ring-orange-400"
                  required
                />
              </div>
              <div className="mt-4 text-zinc-800 text-sm flex flex-row items-center sm:text-base">
                  <input type="checkbox" name="gdpr" value="1" required />
                  <label className="ml-4 leading-tight">
                    I agree to receive email updates and promotions.
                  </label>
              </div>
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
            <div className="m-auto max-w-xs md:w-1/3 md:pl-4 md:m-0">
              <button
                type="submit"
                className="text-sm sm:text-base md:text-lg bg-orange-400 text-stone-950 w-full h-12 font-bold p-2 box-border mt-6 md:mt-0 focus:outline-none hover:shadow-xl"
              >
                SEND TO ME
              </button>
            </div>
          </form>
        </div>
      </header>

      <section className="w-screen p-10 sm:p-24">
        <div className="lg:max-w-screen-md mx-auto">
          <h2 className="text-3xl sm:text-4xl text-stone-950 font-bold underline underline-offset-8 decoration-8 decoration-orange-400">
            Who is Keng Kee?
          </h2>

          <div className="mt-10 md:mt-16">
            <div className="lg:w-fit">
              <img
                src={profile}
                width="512px"
                height="512px"
                className="m-auto h-48 w-48 sm:h-60 sm:w-60 rounded-full shadow-xl md:h-72 md:w-72"
                alt="profile photo"
              />
            </div>

            <p className="mt-10 md:mt-16 text-zinc-800 text-base leading-relaxed sm:leading-loose md:text-lg">
              I am a freelance digital marketer and front-end developer. I
              established myself as a strong executor in operations with almost
              3 years of experience in building the backbone of the product
              catalog from 0 to 200k product assortments and growing the team
              from 4 to 10 persons. I pride myself to be an all-rounder with
              experience and achievements from the various background -
              Marketing, Sales, Customer Service, and Human Resources. Currently
              focusing on helping small businesses to run marketing campaigns
              and optimize business processes.
            </p>
          </div>

          <div className="md:mt-16 md:flex md:flex-row md:align-items-center md:justify-between">
            <div className="mt-10 md:mt-0 md:w-2/5">
              <h3 className="text-xl text-stone-950 font-semibold">SKILLS</h3>
              <ol className="list-disc list-inside mt-3 text-base leading-relaxed sm:leading-loose text-zinc-800">
                <li>Project Management</li>
                <li>Customer Service</li>
                <li>SOP Development</li>
                <li>Process Improvement</li>
                <li>Digital Marketing</li>
                <li>Front End Development</li>
              </ol>
            </div>

            <div className="mt-10 md:mt-0 md:w-3/5">
              <h3 className="text-xl text-stone-950 font-semibold">
                CERTIFICATIONS
              </h3>
              <ol className="list-disc list-inside mt-3 text-base leading-relaxed sm:leading-loose text-zinc-800">
                <li>
                  <a
                    href="https://skillshop.exceedlms.com/student/award/SuVtDSjhJJfD7SQt3mqctU4s"
                    target="_blank"
                    className="hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-orange-400"
                  >
                    Google Ads Search Certification &#10138;
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.credential.net/bifqx6ll"
                    target="_blank"
                    className="hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-orange-400"
                  >
                    Build Front-End Web Apps from Scratch &#10138;
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.datacamp.com/statement-of-accomplishment/course/58c539167b497501e9c7c2874cfc5d28f8537895"
                    target="_blank"
                    className="hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-orange-400"
                  >
                    Data Analysis with Spreadsheets &#10138;
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="lg:max-w-screen-md mx-auto mt-10 md:mt-16">
          <h2 className="text-xl text-stone-950 font-semibold">MY WORK</h2>
          <div className="mt-10 p-8 bg-gray-100 rounded-lg drop-shadow-xl">
            <h3 className="text-lg text-stone-950 font-semibold">
              Triune Centre
            </h3>
            <p className="mt-3 text-base leading-relaxed sm:leading-loose text-zinc-800">
              This is a coworking space that I help manage. I have created the
              SOP for the front office, implemented the accounting software, and
              run marketing campaigns for the company.
            </p>
            <a href="https://triune.com.my/" target="_blank">
              <div className="mt-6 p-2 w-32 text-center text-sm text-stone-950 ml-auto hover:bg-orange-400">
                LEARN MORE &#9658;
              </div>
            </a>
          </div>
          <div className="mt-10 p-8 bg-gray-100 rounded-lg drop-shadow-xl">
            <h3 className="text-lg text-stone-950 font-semibold">Get CTO</h3>
            <p className="mt-3 text-base leading-relaxed sm:leading-loose text-zinc-800">
              They are a software house that provides training in programming
              language. I have organized and facilitated a few of their
              trainings.
            </p>
            <a href="https://uiux.getcto.asia/" target="_blank">
              <div className="mt-6 p-2 w-32 text-center text-sm text-stone-950 ml-auto hover:bg-orange-400">
                LEARN MORE &#9658;
              </div>
            </a>
          </div>
          <div className="mt-10 p-8 bg-gray-100 rounded-lg drop-shadow-xl">
            <h3 className="text-lg text-stone-950 font-semibold">
              Motivo Ventures
            </h3>
            <p className="mt-3 text-base leading-relaxed sm:leading-loose text-zinc-800">
              I build this website for the objective to start my own agency and
              offer digital marketing services.
            </p>
            <a href="https://motivo.marketing/" target="_blank">
              <div className="mt-6 p-2 w-32 text-center text-sm text-stone-950 ml-auto hover:bg-orange-400">
                LEARN MORE &#9658;
              </div>
            </a>
          </div>

          <div className="mt-20 md:mt-24">
            <div className="text-xl text-center text-stone-950 font-bold md:text-4xl">
              Need help in digital marketing and business operations?
            </div>
            <div className="w-full text-center">
              <a href="https://www.fiverr.com/kk_lim" target="_blank">
                <button
                  type="button"
                  className="text-sm sm:text-base md:text-lg bg-orange-400 text-stone-950 w-full max-w-xs h-12 font-bold p-2 box-border mt-6 md:mt-10 focus:outline-none hover:shadow-xl"
                >
                  HIRE KK
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="p-10 text-center text-sm md:text-base text-zinc-800 w-full">
        Copyright 2021 @ Keng Kee <br />- All Rights Reserved -
      </footer>
    </div>
  );
}
