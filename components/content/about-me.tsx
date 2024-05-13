"use client";

import Image from "next/image";

const AboutMe = () => {
  const Intro = [
    {
      h: "Role",
      p: "Software Engginer",
    },
    {
      h: "Specialized in",
      p: "Front-End",
    },
    {
      h: "Experienced at",
      p: "Software Development",
    },
    {
      h: "Years of Experience",
      p: "almost 2 years",
    },
  ];
  return (
    <div className="w-[900px] h-[500px] relative flex justify-center ">
      <section className="absolute  rotate-2 -z-10 right-5 top-4 lg:right-8 lg:top-4">
        <div className=" w-[780px] h-[400px] bg-stone-200 border border-stone-300"></div>
      </section>

      <section className=" w-fit h-fit bg-white p-3 border-[0.5px] md:border border-stone-300 font-mono text-sm text-sky-300 z-20 relative">
        <svg
          width="64"
          height="73"
          viewBox="0 0 64 73"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-10 -left-5 z-30 hidden md:flex"
        >
          <rect
            x="28.304"
            y="36.3843"
            width="5.76116"
            height="34.567"
            transform="rotate(-34.1547 28.304 36.3843)"
            fill="#D9D9D9"
          />
          <circle
            cx="22.5056"
            cy="23.3485"
            r="16.2033"
            transform="rotate(-34.1547 22.5056 23.3485)"
            fill="#EC4948"
          />
          <circle
            cx="21.6339"
            cy="14.3672"
            r="3.9608"
            transform="rotate(-34.1547 21.6339 14.3672)"
            fill="#F9F4E6"
          />
        </svg>
        <div className="w-full h-full border border-stone-300 grid grid-cols-3 ">
          <div className=" col-span-2 grid grid-cols-2">
            <div className=" col-span-2 border border-stone-300 p-5">
              <p>Name</p>
              <h1 className="text-2xl text-center py-5 text-stone-900">
                Goldie Tiara Putri
              </h1>
            </div>
            {Intro.map((v, i) => {
              return (
                <div className="border border-stone-300 p-5 flex flex-col">
                  <p>{v.h}</p>
                  <h1 className=" pt-3 pb-5 pr-5 text-stone-900 indent-5">
                    {v.p}
                  </h1>
                </div>
              );
            })}
          </div>
          <div className=" grid grid-cols-1 grid-rows-3">
            {/* FIX LATER */}
            <div className="flex items-center justify-center p-3 row-span-3 border border-stone-300">
              <Image
                src={"/profile-pic.jpg"}
                alt="photo"
                width={180}
                height={280}
                className="border-stone-300 border p-3"
              ></Image>
            </div>
            <div className="border border-stone-300 p-5 flex flex-col">
              <p>Location</p>
              <h1 className=" pt-3 pb-5 pr-5 text-stone-900 indent-5">
                Jakarta, ID
              </h1>
              <svg
                width="63"
                height="44"
                viewBox="0 0 63 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" absolute bottom-24 right-1 z-30"
              >
                <rect
                  x="23.2322"
                  y="4.5"
                  width="37.7059"
                  height="37.1275"
                  rx="18.5637"
                  fill="#D9D9D9"
                  stroke="#D9D9D9"
                  stroke-width="3"
                />
                <mask
                  id="mask0_297_2623"
                  maskUnits="userSpaceOnUse"
                  x="24"
                  y="6"
                  width="36"
                  height="35"
                >
                  <rect
                    x="24.7322"
                    y="6"
                    width="34.7059"
                    height="34.1275"
                    rx="17.0637"
                    fill="#F9F4E6"
                  />
                </mask>
                <g mask="url(#mask0_297_2623)">
                  <rect
                    x="24.7322"
                    y="6"
                    width="34.7059"
                    height="34.1275"
                    fill="white"
                  />
                  <rect
                    x="24.7322"
                    y="6"
                    width="34.7059"
                    height="17.0637"
                    fill="#EC4948"
                  />
                </g>
                <path
                  d="M13.4624 25.6889L5.61293 15.8253L17.4086 13.8749L13.4624 25.6889Z"
                  fill="#EC4948"
                  stroke="#EC4948"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <circle
                  cx="10.724"
                  cy="10.286"
                  r="8.94641"
                  transform="rotate(-9.38901 10.724 10.286)"
                  fill="#EC4948"
                />
                <circle
                  cx="10.9812"
                  cy="10.4702"
                  r="3.80222"
                  transform="rotate(-9.38901 10.9812 10.4702)"
                  fill="#F9F4E6"
                />
                <ellipse
                  cx="14.7394"
                  cy="33.1987"
                  rx="2.90758"
                  ry="1.34196"
                  transform="rotate(-9.38901 14.7394 33.1987)"
                  fill="#92D4EB"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
