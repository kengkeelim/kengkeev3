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
          <h1 className="text-center text-gray-800 font-black text-2xl mt-6 md:mt-10 md:text-4xl lg:text-6xl">
            Do you want to do more with less?
          </h1>
          <p className="text-sm md:text-base text-center text-gray-500 mt-6 md:mt-10">
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
                <h3 className="text-gray-600 font-semibold">FOLLOW ME ON:</h3>
                <div className="flex flex-row justify-around text-gray-500 mt-6 md:justify-between">
                  <a href="https://facebook.com/kengkee.lim" target="_blank">
                    <svg
                      id="facebook"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 512 512"
                      className="p-2 h-10 w-10 md:h-12 md:w-12 fill-current hover:text-orange-light"
                    >
                      <g>
                        <g>
                          <path d="M288,176v-64c0-17.664,14.336-32,32-32h32V0h-64c-53.024,0-96,42.976-96,96v80h-64v80h64v256h96V256h64l32-80H288z" />
                        </g>
                      </g>
                    </svg>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/kengkeelim/"
                    target="_blank"
                  >
                    <svg
                      id="linkedin"
                      height="192px"
                      viewBox="-21 -35 682.66669 682"
                      width="192px"
                      xmlns="http://www.w3.org/2000/svg"
                      className="p-2 h-10 w-10 md:h-12 md:w-12 fill-current hover:text-orange-light md:mx-10"
                    >
                      <path d="m77.613281-.667969c-46.929687 0-77.613281 30.816407-77.613281 71.320313 0 39.609375 29.769531 71.304687 75.8125 71.304687h.890625c47.847656 0 77.625-31.695312 77.625-71.304687-.894531-40.503906-29.777344-71.320313-76.714844-71.320313zm0 0" />
                      <path d="m8.109375 198.3125h137.195313v412.757812h-137.195313zm0 0" />
                      <path d="m482.054688 188.625c-74.011719 0-123.640626 69.546875-123.640626 69.546875v-59.859375h-137.199218v412.757812h137.191406v-230.5c0-12.339843.894531-24.660156 4.519531-33.484374 9.917969-24.640626 32.488281-50.167969 70.390625-50.167969 49.644532 0 69.5 37.851562 69.5 93.339843v220.8125h137.183594v-236.667968c0-126.78125-67.6875-185.777344-157.945312-185.777344zm0 0" />
                    </svg>
                  </a>

                  <a href="https://github.com/kengkeelim" target="_blank">
                    <svg
                      id="github"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 478.613 478.613"
                      className="p-2 h-10 w-10 md:h-12 md:w-12 fill-current hover:text-orange-light"
                    >
                      <g id="XMLID_122_">
                        <g>
                          <path
                            d="M427.501,200.695c1.776-11.238,2.884-23.56,3.163-37.377c-0.107-59.246-28.468-80.21-33.925-90.038
			c8.037-44.89-1.331-65.309-5.688-72.299c-16.07-5.704-55.91,14.722-77.678,29.101c-35.491-10.389-110.494-9.375-138.621,2.689
			C122.856-4.389,95.408,1.277,95.408,1.277s-17.745,31.82-4.691,78.371c-17.075,21.759-29.802,37.143-29.802,77.949
			c0,9.773,0.607,19.008,1.637,27.893c14.705,77.318,75.97,110.674,136.15,116.426c-9.056,6.881-19.928,19.903-21.432,34.992
			c-11.379,7.357-34.268,9.789-52.067,4.193c-24.939-7.88-34.486-57.266-71.833-50.221c-8.081,1.512-6.475,6.842,0.523,11.386
			c11.378,7.38,22.094,16.554,30.354,36.185c6.344,15.072,19.687,41.982,61.873,41.982c16.747,0,28.477-1.979,28.477-1.979
			s0.319,38.406,0.319,53.385c0,17.238-23.264,22.078-23.264,30.348c0,3.289,7.7,3.601,13.888,3.601
			c12.229,0,37.673-10.186,37.673-28.103c0-14.237,0.227-62.081,0.227-70.46c0-18.307,9.811-24.136,9.811-24.136
			s1.201,97.727-2.361,110.829c-4.177,15.408-11.744,13.219-11.744,20.076c0,10.233,30.589,2.502,40.735-19.897
			c7.849-17.495,4.334-113.331,4.334-113.331l8.183-0.178c0,0,0.094,43.892-0.188,63.944c-0.295,20.769-2.438,47.025,9.898,59.417
			c8.097,8.15,32.903,22.451,32.903,9.382c0-7.574-17.371-13.833-17.371-34.353V344.45c10.553,0,12.734,31.072,12.734,31.072
			l3.804,57.727c0,0-2.526,21.065,22.756,29.856c8.925,3.126,28.018,3.976,28.913-1.271c0.897-5.26-22.99-13.038-23.217-29.342
			c-0.123-9.93,0.445-15.742,0.445-58.934c0-43.168-5.799-59.137-26.007-71.863C355.669,295.681,416.536,269.51,427.501,200.695z"
                          />
                        </g>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <p className="mt-6 text-gray-500 text-sm md:text-base leading-8 md:mt-10">
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
                      href="https://skillshop.exceedlms.com/student/award/58830251"
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
          <div className="mt-16 md:mt-24 md:m-auto">
            <div className="text-2xl text-center text-gray-700 font-bold md:text-4xl">
              Need help in digital marketing and business operations?
            </div>
            <div className="w-full text-center">
              <a href="https://forms.gle/oKDeiDTmJoKv7DqJ8">
                <button
                  type="button"
                  className="text-sm md:text-xl bg-orange-light text-white w-full md:w-1/2 font-bold p-3 mt-6 focus:outline-none border-2 hover:bg-white hover:text-orange-light hover:border-orange-light"
                >
                  YES, LET'S DO IT!
                </button>
              </a>
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
              Do you have many tasks pending in your to-do list for a long time?
            </div>
            <div className="w-full text-center">
              <a href="https://forms.gle/oKDeiDTmJoKv7DqJ8">
                <button
                  type="button"
                  className="text-sm md:text-xl bg-orange-light text-white w-full md:w-1/2 font-bold p-3 mt-6 focus:outline-none border-2 hover:bg-white hover:text-orange-light hover:border-orange-light"
                >
                  YES, LET'S EXPLORE!
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="w-screen p-10 md:p-20 lg:p-40">
        <div className="xl:max-w-screen-md mx-auto">
          <h2 className="text-2xl text-gray-700 font-bold">
            Interests & Hobbies
          </h2>
          <div className="mt-10 flex flex-row flex-wrap gap-1 justify-center">
            <p className="w-28 text-black font-medium text-sm leading-8 p-1 rounded-full bg-neonGreen md:w-36 text-center">
              Hiking
            </p>
            <p className="w-28 text-white font-medium text-sm leading-8 p-1 rounded-full bg-purpleMunsell md:w-36 text-center">
              Ukulele
            </p>
            <p className="w-28 text-white font-medium text-sm leading-8 p-1 rounded-full bg-starCommandBlue md:w-36 text-center">
              Diving
            </p>
            <p className="w-28 text-white font-medium text-sm leading-8 p-1 rounded-full bg-purpleMunsell md:w-36 text-center">
              Salsa Dancing
            </p>
            <p className="w-28 text-black font-medium text-sm leading-8 p-1 rounded-full bg-salmon md:w-36 text-center">
              Shawarma
            </p>
            <p className="w-28 text-black font-medium text-sm leading-8 p-1 rounded-full bg-neonGreen md:w-36 text-center">
              Yoga
            </p>
            <p className="w-28 text-white font-medium text-sm leading-8 p-1 rounded-full bg-purpleMunsell md:w-36 text-center">
              Caligraphy
            </p>
            <p className="w-28 text-black font-medium text-sm leading-8 p-1 rounded-full bg-salmon md:w-36 text-center">
              Zinger Burger
            </p>
            <p className="w-28 text-white font-medium text-sm leading-8 p-1 rounded-full bg-starCommandBlue md:w-36 text-center">
              Swimming
            </p>
            <p className="w-28 text-black font-medium text-sm leading-8 p-1 rounded-full bg-salmon md:w-36 text-center">
              Sushi
            </p>
            <p className="w-28 text-black font-medium text-sm leading-8 p-1 rounded-full bg-neonGreen md:w-36 text-center">
              Camping
            </p>
            <p className="w-28 text-white font-medium text-sm leading-8 p-1 rounded-full bg-purpleMunsell md:w-36 text-center">
              Tabata
            </p>
            <p className="w-28 text-white font-medium text-sm leading-8 p-1 rounded-full bg-purpleMunsell md:w-36 text-center">
              Singing
            </p>
            <p className="w-28 text-black font-medium text-sm leading-8 p-1 rounded-full bg-neonGreen md:w-36 text-center">
              Traveling
            </p>
            <p className="w-28 text-white font-medium text-sm leading-8 p-1 rounded-full bg-starCommandBlue md:w-36 text-center">
              Snorkeling
            </p>
            <p className="w-28 text-black font-medium text-sm leading-8 p-1 rounded-full bg-neonGreen md:w-36 text-center">
              Meditation
            </p>
            <p className="w-28 text-black font-medium text-sm leading-8 p-1 rounded-full bg-salmon md:w-36 text-center">
              Walking Taco
            </p>
            <p className="w-28 text-black font-medium text-sm leading-8 p-1 rounded-full bg-neonGreen md:w-36 text-center">
              Minimalism
            </p>
            <p className="w-28 text-black font-medium text-sm leading-8 p-1 rounded-full bg-salmon md:w-36 text-center">
              Kimchi Jjigae
            </p>
            <p className="w-28 text-white font-medium text-sm leading-8 p-1 rounded-full bg-purpleMunsell md:w-36 text-center">
              Reading
            </p>
          </div>
          <div className="mt-16 md:mt-24 md:m-auto">
            <div className="text-2xl text-center text-gray-700 font-bold md:text-4xl">
              Think we will click?
            </div>
            <div className="w-full text-center">
              <a href="https://t.me/VZYUIOQQDS">
                <button
                  type="button"
                  className="text-sm md:text-xl bg-orange-light text-white w-full md:w-1/2 font-bold p-3 mt-6 focus:outline-none border-2 hover:bg-white hover:text-orange-light hover:border-orange-light"
                >
                  YES, LET'S CHAT!
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
