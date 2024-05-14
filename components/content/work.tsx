"use client";

import Image from "next/image";

const Work = () => {
  const ProjectImg = [
    { projectImg: "/todo.png" },
    { projectImg: "/e-commerce.png" },
    { projectImg: "/twitter.png" },
  ];
  return (
    <div className="w-[1000px] h-[500px] relative flex justify-center font-mono text-sm">
      <div className="w-[800px] h-full grid grid-cols-12">
        <section className="w-full h-full col-span-11 bg-pink-500 relative">
          <div className="absolute w-full h-full bg-stone-800 z-40 grid grid-cols-4 grid-rows-2">
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
          <div className="absolute bg-teal-500 -right-36 bottom-5 text-white text-lg hover:-right-40 transition-all cursor-pointer z-0">
            <p className="p-5 pl-14 text-center">More Work</p>
          </div>
        </section>
        <section className="grid grid-cols-4 ">
          <div className="w-full h-full bg-stone-100"></div>
          <div className="w-full h-full bg-stone-400"></div>
          <div className="w-full h-full bg-stone-100"></div>
          <div className="w-full h-full bg-stone-400"></div>
        </section>
      </div>
    </div>
  );
};

export default Work;
