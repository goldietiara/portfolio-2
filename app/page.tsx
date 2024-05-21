"use client";
import AboutMe from "@/components/content/about-me";
import Work from "@/components/content/work";
import Contact from "@/components/content/contact";
import Intro from "@/components/content/intro";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      <div className="absolute p-10 w-full right-0 left-0 z-10 top-[100px] md:top-0">
        <div className="flex flex-col items-center mb-24">
          <section id="intro">
            <Intro />
          </section>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="flex flex-col items-center"
          >
            <section id="work" className=" z-40">
              <Work />
            </section>
            <section id="about">
              <AboutMe />
            </section>
            <section id="contact">
              <Contact />
            </section>
          </motion.div>
        </div>
      </div>

      <div className="w-full h-full flex justify-center items-center opacity-50 md:opacity-100 z-0">
        <div className="hidden lg:grid grid-cols-12 w-full h-full border-sky-200 border-[0.5px]">
          {Array.from({ length: 12 * 29 }, (_, i) => (
            <div
              key={i}
              className="border-sky-200 border-[0.5px] w-full h-8 sm:h-14 md:h-16 lg:h-20"
            />
          ))}
        </div>
        <div className="hidden md:grid lg:hidden grid-cols-12 w-full h-full border-sky-200 border-[0.5px]">
          {Array.from({ length: 12 * 40 }, (_, i) => (
            <div
              key={i}
              className="border-sky-200 border-[0.5px] w-full h-8 sm:h-14 md:h-16 lg:h-20"
            />
          ))}
        </div>
        <div className="hidden sm:grid md:hidden grid-cols-12 w-full h-full border-sky-200 border-[0.5px]">
          {Array.from({ length: 12 * 55 }, (_, i) => (
            <div
              key={i}
              className="border-sky-200 border-[0.5px] w-full h-8 sm:h-14 md:h-16 lg:h-20"
            />
          ))}
        </div>
        <div className="grid sm:hidden grid-cols-12 w-full h-full border-sky-200 border-[0.5px]">
          {Array.from({ length: 12 * 97 }, (_, i) => (
            <div
              key={i}
              className="border-sky-200 border-[0.5px] w-full h-8 sm:h-14 md:h-16 lg:h-20"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
