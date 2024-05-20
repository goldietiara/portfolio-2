"use client";
import { openPdf } from "@/composables/utils";
import { Intro } from "@/constants";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="w-[300px] sm:w-[600px] md:w-[700px] lg:w-[900px] h-full md:h-[500px] relative flex justify-center pt-32">
      <section className="absolute rotate-2 -z-10 right-5 md:right-8 top-4 pt-32">
        <div className=" w-[300px] h-[730px] sm:w-[600px] sm:h-[770px] md:w-[700px] lg:w-[780px] md:h-[400px] bg-stone-200 border border-stone-300"></div>
      </section>

      <section className=" w-full md:w-fit h-fit bg-white p-3 border-[0.5px] md:border border-stone-300 font-mono text-xs lg:text-sm text-sky-300 z-20 relative">
        <svg
          width="64"
          height="73"
          viewBox="0 0 64 73"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-10 -left-5 z-30 flex"
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
        <div className="w-full h-full border border-stone-300 grid grid-cols-1 md:grid-cols-3 ">
          <div className=" md:col-span-2 grid grid-cols-1 md:grid-cols-2">
            <div className=" md:col-span-2 border border-stone-300 p-3 md:p-5 flex items-center flex-col text-left w-full relative">
              <p className="w-full">Name</p>
              <Image
                src={"/profile-pic.jpg"}
                alt="photo"
                width={180}
                height={280}
                className="flex md:hidden border-stone-300 border p-3 mb-5 sm:mb-8 sm:mt-3"
              ></Image>
              <Image
                src={"/svg/about-me/goldie-tiara.svg"}
                alt="goldie tiara"
                width={200}
                height={200}
                className=" w-full text-2xl md:text-center md:py-5 text-stone-900 px-5 py-3 sm:px-[100px]"
              />
              {/* cv */}
              <button
                onClick={openPdf}
                className=" flex md:hidden absolute bottom-[45px] -right-[40px] w-fit h-fit group hover:cursor-pointer rotate-[45deg]"
              >
                <Image
                  src={"/svg/about-me/cv-button.svg"}
                  alt="svg"
                  width={100}
                  height={100}
                  className=" origin-bottom rotate-0 group-hover:animate-wiggle2 group-hover:-rotate-12 duration-150 ease-in-out transition-all"
                />
                <Image
                  src={"/svg/about-me/cv.svg"}
                  alt="svg"
                  width={100}
                  height={100}
                  className=" origin-bottom-right absolute bottom-0 rotate-0 group-hover:animate-wiggle group-hover:rotate-12  duration-150 ease-in-out transition-all"
                />
              </button>
            </div>
            {Intro.map((v, i) => {
              return (
                <div
                  className="border border-stone-300 p-3 md:p-5 flex flex-col"
                  key={i}
                >
                  <p>{v.h}</p>
                  <h1 className=" pt-3 pb-2 md:pb-5 pr-0 lg:pr-5 text-stone-900 indent-2 lg:indent-5">
                    {v.p}
                  </h1>
                </div>
              );
            })}
          </div>
          <div className=" grid grid-cols-1 md:grid-rows-3">
            {/* FIX LATER */}
            <div className="hidden md:flex items-center justify-center p-3 sm:row-span-2 md:row-span-3 border border-stone-300">
              <Image
                src={"/profile-pic.jpg"}
                alt="photo"
                width={180}
                height={280}
                className="border-stone-300 border p-3"
              ></Image>
            </div>
            <div className="border border-stone-300 p-3 md:p-5 flex flex-col h-fit">
              <p>Location</p>
              <h1 className=" pt-3 pb-2 md:pb-5 pr-5 text-stone-900 indent-2 md:indent-5">
                Jakarta, ID
              </h1>
              <svg
                width="63"
                height="44"
                viewBox="0 0 63 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" absolute  bottom-[73px] md:bottom-24 right-1 z-30"
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
