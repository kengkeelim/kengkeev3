import Head from "next/head";

import styles from "../styles/Home.module.css";

import profile from "../assets/KK-Orange.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Keng Kee | My Personal Website</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="https://sendfox.com/js/form.js" as="script" />
      </Head>

      <header
        id="header"
        className="w-screen h-screen p-10 grid place-content-center md:h-5/6 md:p-28 lg:p-40 bg-red-50"
      >
        <div className="w-full h-16 text-orange-light text-xl font-black grid place-items-center absolute top-0 left-0 md:h-20 md:text-3xl">
          KENGKEE.COM
        </div>
        <div className="xl:max-w-screen-md h-full">
          <h1 className="text-center text-gray-800 font-black text-2xl mt-3 md:mt-6 md:text-4xl lg:text-6xl">
            Do you want to do more with less?
          </h1>
          <p className="text-sm md:text-base text-center text-gray-500 mt-3 md:mt-6">
            Hi, my name is Keng Kee (a.k.a KK). I like sharing about learning
            and productivity hacks. Get my BEST updates delivered to your inbox:
          </p>
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
      </header>

      <section className="w-screen p-10 md:p-20 lg:p-40">
        <div className="xl:max-w-screen-md mx-auto">
          <h2
            className={`text-2xl text-gray-700 font-bold ${styles.underline}`}
          >
            Who is Keng Kee?
          </h2>
          <div className="md:mt-16">
            <div className="md:flex md:flex-row md:justify-center">
              <img
                src={profile}
                width="512px"
                height="512px"
                className="mt-10 h-48 w-48 rounded-full shadow-xl m-auto md:m-0 md:h-56 md:w-56"
                alt="profile photo"
              />
              
              <div className="mt-10 md:ml-6 md:mt-0 md:w-1/2 md:grid md:place-content-center">
              </div>

            </div>

            <p className="mt-6 text-gray-500 text-sm md:text-base leading-7 md:mt-10">
              <span className="text-2xl font-bold">I</span> am a freelance
              digital marketer and front-end developer. I established myself as
              a strong executor in operations with almost 3 years of experience
              in building the backbone of the product catalog from 0 to 200k
              product assortments and growing the team from 4 to 10 persons. I
              pride myself to be an all-rounder with experience and achievements
              from the various background - Marketing, Sales, Customer Service,
              and Human Resources. Currently focusing on helping small
              businesses to run marketing campaigns and optimize business
              processes.
            </p>
          </div>

          <div className="md:mt-16 md:flex md:flex-row md:align-items-center md:justify-between">
            <div className="mt-10 md:mt-0">
              <h3 className="text-xl text-gray-600 font-semibold">SKILLS</h3>
              <ol className="list-disc list-inside text-sm md:text-base text-gray-500 mt-3">
                <li>Project Management</li>
                <li>Customer Service</li>
                <li>SOP Development</li>
                <li>Process Improvement</li>
                <li>Digital Marketing</li>
                <li>Front End Development</li>
              </ol>
            </div>
            <div className="mt-10 md:mt-0">
              <h3 className="text-xl text-gray-600 font-semibold">
                CERTIFICATIONS
              </h3>
              <ol className="list-decimal list-inside mt-3">
                <a>
                  <li className="text-gray-500 font-semibold">
                    <a
                      href="https://skillshop.exceedlms.com/student/award/SuVtDSjhJJfD7SQt3mqctU4s"
                      target="_blank"
                    >
                      <span className="text-sm md:text-base text-orange-light p-2 hover:text-white hover:bg-orange-light">
                        Google Ads Search Certification
                      </span>
                    </a>
                  </li>
                </a>
                <a>
                  <li className="text-gray-500 font-semibold mt-1">
                    <a
                      href="https://www.credential.net/bifqx6ll"
                      target="_blank"
                    >
                      <span className="text-sm md:text-base text-orange-light p-2 hover:text-white hover:bg-orange-light">
                        Build Front-End Web Apps from Scratch
                      </span>
                    </a>
                  </li>
                </a>
                <a>
                  <li className="text-gray-500 font-semibold mt-1">
                    <a
                      href="https://www.datacamp.com/statement-of-accomplishment/course/58c539167b497501e9c7c2874cfc5d28f8537895"
                      target="_blank"
                    >
                      <span className="text-sm md:text-base text-orange-light p-2 hover:text-white hover:bg-orange-light">
                        Data Analysis with Spreadsheets
                      </span>
                    </a>
                  </li>
                </a>
              </ol>
            </div>
          </div>

        </div>
      </section>

      <section
        className={`w-screen p-10 md:p-20 lg:p-40 ${styles.bgPatternFood}`}
      >
        <div className="xl:max-w-screen-md mx-auto">
          <h2 className="text-2xl text-gray-700 font-bold">
            Some of my works:
          </h2>
          <div className="mt-10 p-8 border border-orange-light bg-white rounded-lg">
            <h3 className="text-gray-600 font-semibold">Triune Centre</h3>
            <p className="mt-3 text-sm md:text-base text-gray-500">
              This is a coworking space that I help manage. I have created the
              SOP for the front office, implemented the accounting software, and
              run marketing campaigns for the company.
            </p>
            <a href="https://triune.com.my/" target="_blank">
              <div className="mt-6 p-2 w-32 text-center text-sm font-semibold text-orange-light ml-auto hover:bg-orange-light hover:text-white">
                LEARN MORE
              </div>
            </a>
          </div>
          <div className="mt-10 p-8 border border-orange-light bg-white rounded-lg">
            <h3 className="text-gray-600 font-semibold">Get CTO</h3>
            <p className="mt-3 text-sm md:text-base text-gray-500">
              They are a software house that provides training in programming
              language. I have organized and facilitated a few of their
              trainings.
            </p>
            <a href="https://uiux.getcto.asia/" target="_blank">
              <div className="mt-6 p-2 w-32 text-center text-sm font-semibold text-orange-light ml-auto hover:bg-orange-light hover:text-white">
                LEARN MORE
              </div>
            </a>
          </div>
          <div className="mt-10 p-8 border border-orange-light bg-white rounded-lg">
            <h3 className="text-gray-600 font-semibold">Motivo Ventures</h3>
            <p className="mt-3 text-sm md:text-base text-gray-500">
              I build this website for the objective to start my own agency and
              offer digital marketing services.
            </p>
            <a href="https://motivo.marketing/" target="_blank">
              <div className="mt-6 p-2 w-32 text-center text-sm font-semibold text-orange-light ml-auto hover:bg-orange-light hover:text-white">
                LEARN MORE
              </div>
            </a>
          </div>

          <div className="mt-16 md:mt-24 md:m-auto">
            <div className="text-2xl text-center text-gray-700 font-bold md:text-4xl">
              Need help in digital marketing and business operations?
            </div>
            <div className="w-full text-center">
              <a href="https://www.fiverr.com/kk_lim" target="_blank">
                <button
                  type="button"
                  className="text-sm md:text-xl bg-orange-light text-white w-full md:w-1/2 font-bold p-3 mt-6 focus:outline-none border-2 hover:bg-white hover:text-orange-light hover:border-orange-light"
                >
                  Hire Me!
                </button>
              </a>
            </div>
          </div>

        </div>
      </section>

      <footer className="p-10 text-center text-sm text-white w-full bg-orange-light">
        Copyright 2021 @ Keng Kee <br />- All Rights Reserved -
      </footer>
    </div>
  );
}
