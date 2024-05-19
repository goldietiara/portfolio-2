"use client";

import Image from "next/image";
import { FaSquareEnvelope } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { contacts } from "@/constants";

const Contact = () => {
  return (
    <div className="w-[300px] sm:w-[600px] md:w-[700px] lg:w-[1000px] h-full font-mono text-sm flex flex-wrap gap-10">
      <div className="w-full md:w-fit h-fit p-5 pt-16 sm:pt-28 mx-auto bg-stone-50 rounded-md border border-stone-300 flex flex-wrap relative">
        <section className="absolute -top-[15px] -left-[15px] z-20 flex">
          <div className=" w-fit h-fit bg-teal-500 py-3 px-2 md:px-4 relative -rotate-3">
            <div className=" absolute top-[0px] -left-[30px] bg-gray-300/40 w-[100px] h-[25px] -rotate-[30deg] z-30"></div>
            <Image
              src={"/svg/contact/lets-work.svg"}
              alt="lets-contact"
              width={250}
              height={250}
            />
          </div>
          <div className=" w-fit h-fit bg-teal-700 py-3 px-2 md:px-4 relative">
            <div className=" absolute top-[0px] -right-[30px] bg-gray-300/40 w-[100px] h-[25px] rotate-[10deg] z-30"></div>
            <div className=" absolute -top-[15px] -left-[55px] bg-gray-300/40 w-[100px] h-[25px] -rotate-[2deg] z-30"></div>
            <Image
              src={"/svg/contact/together.svg"}
              alt="contact"
              width={200}
              height={200}
            />
          </div>
        </section>
        <section className=" flex flex-col gap-5 md:gap-10 w-full items-center sm:items-start">
          <a
            className="group w-fit text-sm sm:text-2xl lg:text-3xl font-serif font-extralight italic text-pink-200 bg-pink-200 p-2 md:p-3 lg:p-5 rounded-e-full cursor-pointer relative"
            href={`mailto:goldietiara.acc@gmail.com`}
          >
            <div className="absolute bottom-0 left-0 text-stone-700 bg-yellow-200 p-2 md:p-3 lg:p-5 rounded-e-full origin-left -rotate-[2deg] group-hover:-rotate-[4deg] group-hover:animate-wigglet transition-all ease-in-out duration-150 cursor-pointer z-50">
              Goldietiara.acc@gmail.com
            </div>
            Goldietiara.acc@gmail.com
          </a>
          <div className=" bg-white p-2 sm:p-5 border border-stone-300 h-fit w-full sm:w-fit row-start-1">
            <div className=" bg-stone-100 flex justify-between gap-5 sm:gap-10">
              <div className="w-full p-2 sm:p-5 font-serif text-stone-700 flex flex-col items-center sm:justify-between gap-5 md:gap-0">
                <h1 className="text-xl md:text-3xl font-bold tracking-wide">
                  Goldie Tiara
                </h1>
                <Image
                  src={"/svg/contact/card.svg"}
                  alt="card-pic-sm"
                  width={100}
                  height={100}
                  className="flex sm:hidden"
                />

                <div className=" flex sm:justify-start justify-center w-full sm:mt-10 text-xl md:text-3xl text-left md:mt-0 gap-5">
                  {contacts.map((v, i) => {
                    return (
                      <a
                        href={v.link}
                        target="_blank"
                        className="group relative "
                        key={i}
                      >
                        {v.name.includes("Email") && (
                          <FaSquareEnvelope className="shrink-0  group-hover:scale-110 cursor-pointer ease-out transition-all duration-150" />
                        )}
                        {v.name.includes("LinkedIn") && (
                          <FaLinkedin className="shrink-0  group-hover:scale-110 cursor-pointer ease-out transition-all duration-150" />
                        )}
                        {v.name.includes("Github") && (
                          <FaGithubSquare className="shrink-0  group-hover:scale-110 cursor-pointer ease-out transition-all duration-150" />
                        )}
                      </a>
                    );
                  })}
                </div>
              </div>

              <Image
                src={"/svg/contact/card.svg"}
                alt="card-pic"
                width={200}
                height={200}
                className="hidden sm:flex"
              />
            </div>
          </div>
        </section>
      </div>
      <section className="relative place-self-start mt-[10px] ml-[15px]">
        <div className=" flex w-fit h-fit absolute -top-[10px] -left-[15px]">
          <div className="w-[20px] bg-yellow-300"></div>
          <div className="bg-yellow-100 p-2 px-3 font-serif font-extralight">
            <p>me waiting for your call:</p>
          </div>
        </div>

        <Image
          src={"/contact-sticker-1.png"}
          alt="contact-sticker-1"
          width={250}
          height={250}
        />
      </section>
    </div>
  );
};

export default Contact;
