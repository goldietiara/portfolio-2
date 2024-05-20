"use client";
import { ProjectImg } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 8,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
      className="w-[300px] sm:w-[600px] md:w-[750px] lg:w-[800px] h-[500px] font-mono text-sm"
    >
      <div className="h-full grid grid-cols-1 grid-rows-12 lg:grid-rows-1 lg:grid-cols-12">
        <section className="w-full h-full row-span-11 col-span-1 lg:col-span-11 lg:row-span-1 bg-pink-500 relative">
          <div className="absolute w-full h-full bg-stone-800 z-[70] grid grid-cols-4 grid-rows-2">
            <div className=" col-span-3 row-span-1 relative">
              {/* MY */}
              <Image
                src={"/svg/work/m.svg"}
                alt="m"
                width={90}
                height={90}
                className="hidden sm:flex absolute top-[58px] left-8 z-20"
              />
              <Image
                src={"/svg/work/y.svg"}
                alt="y"
                width={70}
                height={70}
                className="hidden sm:flex absolute top-[70px] left-[115px] z-10"
              />
              {/* xs */}
              <Image
                src={"/svg/work/m.svg"}
                alt="m"
                width={60}
                height={60}
                className="sm:hidden flex absolute top-[25px] left-5 z-20"
              />
              <Image
                src={"/svg/work/y.svg"}
                alt="y"
                width={45}
                height={45}
                className="sm:hidden flex absolute top-[35px] left-[75px] z-10"
              />
              {/* WORK */}
              <Image
                src={"/svg/work/w.svg"}
                alt="w"
                width={90}
                height={90}
                className="hidden sm:flex absolute top-[60px] left-[250px] z-10"
              />
              <Image
                src={"/svg/work/o.svg"}
                alt="o"
                width={67}
                height={67}
                className="hidden sm:flex absolute top-[85px] left-[330px] z-10"
              />
              <Image
                src={"/svg/work/r.svg"}
                alt="r"
                width={80}
                height={80}
                className="hidden sm:flex absolute top-[55px] left-[380px] z-0"
              />
              <Image
                src={"/svg/work/k.svg"}
                alt="k"
                width={60}
                height={60}
                className="hidden sm:flex absolute top-[75px] left-[450px] z-10"
              />
              {/* xs */}
              <Image
                src={"/svg/work/w.svg"}
                alt="w"
                width={60}
                height={60}
                className="sm:hidden flex absolute top-[120px] left-[30px] z-10"
              />
              <Image
                src={"/svg/work/o.svg"}
                alt="o"
                width={40}
                height={40}
                className="sm:hidden flex absolute top-[140px] left-[85px] z-10"
              />
              <Image
                src={"/svg/work/r.svg"}
                alt="r"
                width={50}
                height={50}
                className="sm:hidden flex absolute top-[120px] left-[115px] z-0"
              />
              <Image
                src={"/svg/work/k.svg"}
                alt="k"
                width={35}
                height={35}
                className="sm:hidden flex absolute top-[135px] left-[160px] z-10"
              />
            </div>
            <div className="w-full h-full relative">
              <Image
                src={"/work.jpg"}
                alt="work-pic"
                width={110}
                height={110}
                className="hidden md:flex absolute top-[90px] left-[25px] border-8 border-white z-0"
              />
              <Image
                src={"/work.jpg"}
                alt="work-pic"
                width={80}
                height={80}
                className="flex md:hidden absolute bottom-[120px] sm:-bottom-[35px] right-[35px] border-8 border-white z-0"
              />
              <div className="w-[70px] h-[20px] bg-red-500 absolute bottom-[175px] sm:bottom-[25px] right-[5px] md:top-[90px] md:left-[85px] rotate-[30deg] z-10"></div>
            </div>
            <div className=" col-span-4 row-span-2 relative p-2 pb-5 sm:p-5 flex items-end">
              <div className="w-full h-[80px] px-3 sm:px-0 sm:h-[120px] md:h-[150px] bg-white flex justify-evenly items-center text-[10px] text-stone-600 font-light tracking-wide">
                {ProjectImg.map((v, i) => {
                  return (
                    <div>
                      <div className="w-full flex justify-between ">
                        <p className=" hidden sm:flex">Code by Goldie</p>
                        <p className=" hidden sm:flex">+++</p>
                      </div>
                      <Image
                        src={v.projectImg}
                        alt={`${v.projectImg}-project`}
                        width={180}
                        height={40}
                        className="md:flex hidden w-fit h-fit"
                      />
                      <Image
                        src={v.projectImg}
                        alt={`${v.projectImg}-project`}
                        width={120}
                        height={40}
                        className="flex md:hidden w-fit h-fit"
                      />
                      <div className="w-full flex justify-between">
                        <p className=" hidden sm:flex">+++</p>
                        <p className=" hidden sm:flex">Code by Goldie</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col lg:flex-row text-xs md:text-sm">
          <div className="w-full h-[10px] lg:w-[10px] lg:h-full relative">
            <div className="absolute w-full h-full bg-stone-100 z-[60]"></div>
            <div className=" hidden lg:flex lg:justify-end absolute py-3 px-5 pl-14 w-[180px] bg-teal-200 -right-[130px] hover:-right-[150px] bottom-[380px] text-cyan-700 hover:animate-wiggler transition-all cursor-pointer z-40">
              <p>Project 1</p>
            </div>
            <div className=" hidden lg:flex lg:justify-end absolute py-3 px-5 pl-14 w-[180px] bg-sky-200 -right-[130px] hover:-right-[150px] bottom-[300px] text-blue-500 hover:animate-wiggler transition-all cursor-pointer z-40">
              <p>Project 2</p>
            </div>
            <div className="flex lg:hidden absolute w-[100px] md:w-fit py-2 px-4 pt-12 bg-teal-200 -bottom-[35px] left-[10px] md:left-[50px] hover:-bottom-[45px] hover:animate-wiggleb text-cyan-700  transition-all cursor-pointer z-50">
              <p>Project 1</p>
            </div>
            <div className="flex  lg:hidden absolute w-fit py-2 px-4 pt-24 bg-sky-200 -bottom-[58px] left-[60px] md:left-[180px] hover:-bottom-[68px] hover:animate-wiggleb text-blue-500 transition-all cursor-pointer z-40">
              <p>Project 2</p>
            </div>
          </div>
          <div className="w-full h-[10px] lg:w-[10px]  lg:h-full relative">
            <div className="absolute w-full h-full bg-stone-400 z-30"></div>
            <div className="hidden lg:flex lg:justify-end py-3 px-5 pl-14 absolute w-[180px] bg-yellow-200 -right-[130px] hover:-right-[150px] bottom-[180px] text-stone-500 hover:animate-wiggler transition-all cursor-pointer z-20">
              <p>Project 3</p>
            </div>
            <div className="flex lg:hidden absolute w-fit py-2 px-4 pt-28 bg-yellow-200 -bottom-[70px] right-[100px] sm:right-[300px] hover:-bottom-[80px] hover:animate-wiggleb text-stone-500 transition-all cursor-pointer z-20">
              <p>Project 3</p>
            </div>
          </div>
          <div className="w-full h-[10px] lg:w-[10px]  lg:h-full relative font-semibold">
            <div className="absolute w-full h-full bg-stone-100 z-10"></div>
            <Link
              href={"/my-work"}
              className="hidden lg:flex lg:justify-end absolute w-[180px] p-5 pl-14 bg-teal-500 -right-[140px] bottom-5 text-white  hover:-right-[160px] hover:animate-wiggler transition-all cursor-pointer z-0"
            >
              <p>All Projects</p>
            </Link>
            <Link
              href={"/my-work"}
              className="flex lg:hidden absolute w-[100px] text-center py-2 px-4 pt-32 bg-teal-500 -bottom-[85px] right-[10px] hover:-bottom-[95px] hover:animate-wiggleb text-white transition-all cursor-pointer z-0"
            >
              <p>All Projects</p>
            </Link>
          </div>
          <div className="w-full h-[10px] lg:w-[10px]  lg:h-full bg-stone-400" />
        </section>
      </div>
    </motion.div>
  );
};

export default Work;
