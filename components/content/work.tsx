"use client";
import { ProjectImg } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Work = () => {
  return (
    <div className="w-[300px] sm:w-[600px] md:w-[700px] lg:w-[1000px] h-[500px] relative flex md:justify-center font-mono text-sm">
      <div className="w-[800px] h-full grid grid-cols-12">
        <section className="w-full h-full col-span-11 bg-pink-500 relative">
          <div className="absolute w-full h-full bg-stone-800 z-[70] grid grid-cols-4 grid-rows-2">
            <div className=" col-span-3 row-span-1 relative">
              {/* MY */}
              <Image
                src={"/svg/work/m.svg"}
                alt="m"
                width={90}
                height={90}
                className="absolute top-[58px] left-8 z-20"
              />
              <Image
                src={"/svg/work/y.svg"}
                alt="y"
                width={70}
                height={70}
                className="absolute top-[70px] left-[115px] z-10"
              />
              {/* WORK */}
              <Image
                src={"/svg/work/w.svg"}
                alt="w"
                width={90}
                height={90}
                className="absolute top-[60px] left-[250px] z-10"
              />
              <Image
                src={"/svg/work/o.svg"}
                alt="o"
                width={67}
                height={67}
                className="absolute top-[85px] left-[330px] z-10"
              />
              <Image
                src={"/svg/work/r.svg"}
                alt="r"
                width={80}
                height={80}
                className="absolute top-[55px] left-[380px] z-0"
              />
              <Image
                src={"/svg/work/k.svg"}
                alt="k"
                width={60}
                height={60}
                className="absolute top-[75px] left-[450px] z-10"
              />
            </div>
            <div className="w-full h-full relative">
              <Image
                src={"/work.jpg"}
                alt="work-pic"
                width={110}
                height={110}
                className="absolute top-[90px] left-[25px] border-8 border-white z-0"
              />
              <div className="w-[70px] h-[20px] bg-red-500 absolute top-[90px] left-[85px] rotate-[30deg] z-10"></div>
            </div>
            <div className=" col-span-4 row-span-2 relative p-5 flex items-end">
              <div className="w-full h-[150px] bg-white flex justify-evenly items-center text-[10px] text-stone-600 font-light tracking-wide">
                {ProjectImg.map((v, i) => {
                  return (
                    <div>
                      <div className="w-full flex justify-between">
                        <p>Code by Goldie</p>
                        <p>+++</p>
                      </div>
                      <Image
                        src={v.projectImg}
                        alt={`${v.projectImg}-project`}
                        width={180}
                        height={40}
                        className="w-fit h-fit"
                      />
                      <div className="w-full flex justify-between">
                        <p>Code by Goldie</p>
                        <p>+++</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section className="flex ">
          <div className="w-[10px] h-full relative">
            <div className="absolute w-full h-full bg-stone-100 z-50"></div>
            <div className="absolute w-[180px] bg-teal-200 -right-[130px] bottom-[380px] text-cyan-700 hover:-right-[150px] hover:animate-wiggler transition-all cursor-pointer z-40">
              <p className="p-3 pl-14 text-center">Project 1</p>
            </div>
            <div className="absolute w-[180px] bg-sky-200 -right-[130px] bottom-[300px] text-blue-500 hover:-right-[150px] hover:animate-wiggler transition-all cursor-pointer z-40">
              <p className="p-3 pl-14 text-center">Project 2</p>
            </div>
          </div>
          <div className="w-[10px] h-full relative">
            <div className="absolute w-full h-full bg-stone-400 z-30"></div>
            <div className="absolute w-[180px] bg-yellow-200 -right-[130px] bottom-[180px] text-stone-500 hover:-right-[150px] hover:animate-wiggler transition-all cursor-pointer z-20">
              <p className="p-3 pl-14 text-center">Project 3</p>
            </div>
          </div>
          <div className="w-[10px] h-full relative">
            <div className="absolute w-full h-full bg-stone-100 z-10"></div>
            <Link
              href={"/my-work"}
              className="absolute w-[180px] bg-teal-500 -right-[140px] bottom-5 text-white font-semibold hover:-right-[160px] hover:animate-wiggler transition-all cursor-pointer z-0"
            >
              <p className="p-5 pl-14 text-center">All Projects</p>
            </Link>
          </div>
          <div className="w-[10px] h-full bg-stone-400" />
        </section>
      </div>
    </div>
  );
};

export default Work;
