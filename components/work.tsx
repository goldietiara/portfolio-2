"use client";
import Image from "next/image";
import { useState } from "react";

type ProjectDetails = {
  projectName: string;
  description: string;
  stack: string[];
  images: string;
  link: string;
};

const WorkThumbnail = ({
  projectName,
  description,
  stack,
  images,
  link,
}: ProjectDetails) => {
  const [copied, setCopied] = useState(false);

  const copyLinkToClipboard = () => {
    // Create a temporary input element to hold the link
    const tempInput = document.createElement("input");
    tempInput.value = link;
    document.body.appendChild(tempInput);

    // Select the input field and copy the link
    tempInput.select();
    document.execCommand("copy");

    // Clean up by removing the temporary input element
    document.body.removeChild(tempInput);

    // Set copied state to true and display a message
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };

  return (
    <div className="w-[300px] sm:w-[600px] md:w-[700px] lg:w-[1000px] h-full relative flex justify-center font-mono text-sm">
      <div className="grid lg:grid-cols-2 grid-cols-1 w-full">
        <section className=" col-span-1 flex flex-col gap-5 lg:gap-10 mt-14 lg:mt-0">
          <div className=" w-full lg:w-[450px] bg-white border border-stone-300 text-stone-700 p-10 pt-10 pl-10 leading-relaxed relative">
            <div className="absolute lg:flex -top-[35px] -left-[15px] hidden">
              <div className="bg-yellow-300 w-[25px]" />
              <p className=" bg-yellow-200 px-5 py-3 tracking-wide font-thin text-3xl">
                {projectName}
              </p>
            </div>
            <p>{description}</p>
          </div>
          <div className="flex">
            <div className="bg-gray-200 w-[70px] p-3 flex justify-center items-center">
              <Image
                src={"/svg/work/stack.svg"}
                alt="tech-stack"
                width={100}
                height={100}
              />
            </div>
            <div className=" bg-white border border-gray-300 px-5 py-3 flex gap-3">
              {stack.map((v) => {
                return (
                  <div className="group relative flex justify-center">
                    <Image
                      src={`/svg/icons/${v}.svg`}
                      alt="stack"
                      width={40}
                      height={40}
                      className=" group-hover:scale-110 transition-all duration-150 z-10"
                    />
                    <p
                      className={`absolute -top-[35px] transition-all ease-in-out duration-100 text-xs p-1 text-emerald-400 uppercase hidden group-hover:flex`}
                    >
                      {v}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className=" col-span-1 flex justify-start lg:justify-end row-start-1 lg:col-start-2">
          <div className=" bg-white border border-stone-300 h-fit w-fit p-5  relative">
            <Image
              src={`/${images}`}
              alt="project"
              width={400}
              height={400}
              className="z-10"
            />
            <div className="absolute flex gap-3 -bottom-[35px] -right-[15px] z-20 bg-white border border-gray-300 px-5 py-3">
              <button
                onClick={copyLinkToClipboard}
                className="w-fit h-fit relative group"
              >
                <Image
                  src={"/svg/icons/get-link.svg"}
                  alt="get link"
                  width={40}
                  height={40}
                  className=" hover:scale-110 transition-all duration-150 cursor-pointer"
                />
                <p
                  className={`absolute -top-[15px] -left-[25px] -rotate-[30deg] transition-all ease-in-out duration-100 text-xs p-1 text-emerald-400 ${
                    copied ? "flex" : "hidden"
                  }`}
                >
                  Copied!
                </p>
                {/* {copied ? 'Copied!' : 'Copy Link'} */}
              </button>

              <a
                href={link}
                target="_blank"
                className=" hover:scale-110 transition-all duration-150 cursor-pointer"
              >
                <Image
                  src={"/svg/icons/to-link.svg"}
                  alt="to project"
                  width={40}
                  height={40}
                />
              </a>
            </div>
            <div className="absolute flex lg:hidden -top-[35px] -left-[15px] ">
              <div className="bg-yellow-300 w-[25px]" />
              <p className=" bg-yellow-200 px-5 py-3 tracking-wide font-thin text-3xl">
                {projectName}
              </p>
            </div>
            <div className=" bg-gray-400 w-[50px] h-[20px] absolute -z-10 -right-[13px] bottom-[25px] rotate-[30deg]" />
          </div>
        </section>
      </div>
    </div>
  );
};
export default WorkThumbnail;
