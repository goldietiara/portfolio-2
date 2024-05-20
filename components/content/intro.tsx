"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { intro, hello } from "@/constants";

const Intro = () => {
  return (
    <div className="w-[350px] sm:w-[600px] md:w-[750px] lg:w-[800px] h-full font-mono text-sm flex flex-col items-center relative mb-36">
      <div className="w-[360px] h-[130px] relative">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0,
          }}
          className="z-0 absolute left-0 top-0"
        >
          <Image src={"/svg/intro/h.svg"} alt={"h"} width={100} height={100} />
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.15,
          }}
          className="z-10 absolute left-[90px] top-[20px]"
        >
          <Image src={"/svg/intro/e.svg"} alt={"e"} width={70} height={70} />
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.3,
          }}
          className="z-0 absolute left-[153px] top-[15px]"
        >
          <Image src={"/svg/intro/l-1.svg"} alt={"l"} width={80} height={80} />
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.45,
          }}
          className="z-10 absolute left-[225px] top-[10px]"
        >
          <Image src={"/svg/intro/l-2.svg"} alt={"l"} width={70} height={70} />
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.6,
          }}
          className="z-20 absolute left-[285px] top-[30px]"
        >
          <Image src={"/svg/intro/o.svg"} alt={"o"} width={70} height={70} />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="w-full flex flex-wrap justify-center gap-2 pt-5"
      >
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
      </motion.div>
      <div className="w-full h-full absolute">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-full h-full relative"
        >
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
            className="absolute bottom-[45px] -right-[10px] md:-right-[30px]"
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
            alt={`farmer-motion`}
            height={40}
            width={40}
            className="absolute top-[115px] -left-[10px] md:top-[70px] md:left-[0px]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
