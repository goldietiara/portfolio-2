import Image from "next/image";
import { motion } from "framer-motion";
import { intro } from "@/constants";

const Intro = () => {
  return (
    <div className="w-[300px] sm:w-[600px] md:w-[750px] lg:w-[800px] h-full font-mono text-sm flex flex-col items-center relative">
      <div className="w-[360px] relative">
        <Image
          src={"/svg/intro/h.svg"}
          alt={"h"}
          width={100}
          height={100}
          className="z-0 absolute left-0 top-0"
        />
        <Image
          src={"/svg/intro/e.svg"}
          alt={"e"}
          width={70}
          height={70}
          className="z-10 absolute left-[90px] top-[20px]"
        />
        <Image
          src={"/svg/intro/l-1.svg"}
          alt={"l"}
          width={80}
          height={80}
          className="z-0 absolute left-[153px] top-[15px]"
        />
        <Image
          src={"/svg/intro/l-2.svg"}
          alt={"l"}
          width={70}
          height={70}
          className="z-10 absolute left-[225px] top-[10px]"
        />
        <Image
          src={"/svg/intro/o.svg"}
          alt={"o"}
          width={70}
          height={70}
          className="z-20 absolute left-[285px] top-[30px]"
        />
      </div>

      <div className="w-full flex flex-wrap justify-center gap-2 pt-36">
        {intro.map((v, i) => {
          return (
            <Image
              src={`/svg/intro/${v.name}.svg`}
              alt={`${v.name}`}
              height={v.height}
              width={v.width}
              key={i}
            />
          );
        })}
      </div>
      <div className="w-full h-full absolute">
        <div className="w-full h-full relative">
          <Image
            src={`/svg/icons/react.svg`}
            alt={`react`}
            height={40}
            width={40}
            className="absolute -bottom-[50px]"
          />
          <Image
            src={`/svg/icons/nuxt.svg`}
            alt={`nuxt`}
            height={40}
            width={40}
            className="absolute bottom-[50px] -right-[10px]"
          />
          <Image
            src={`/svg/icons/next.svg`}
            alt={`next`}
            height={40}
            width={40}
            className="absolute -top-[10px] md:top-[10px] -right-[10px]"
          />
          <Image
            src={`/svg/icons/figma.svg`}
            alt={`figma`}
            height={40}
            width={40}
            className="absolute -top-[30px] md:-top-[5px] right-[50px]"
          />
          <Image
            src={`/svg/icons/farmer-motion.svg`}
            alt={`figma`}
            height={40}
            width={40}
            className="absolute top-[115px] -left-[10px] md:top-[70px] md:left-[0px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
