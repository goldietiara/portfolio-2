"use client";
// import { motion } from "framer-motion";

import Link from "next/link";

const NavBar = () => {
  return (
    <nav className=" bg-white/80 py-5 md px-5 h-fit w-full flex justify-between items-center max-w-7xl mx-auto">
      <Link href={"/"} className=" text-xl font-mono text-gray-700">
        Goldie Portfolio
      </Link>
      <div className="md:flex text-white font-mono text-sm hidden">
        <Link
          className=" bg-yellow-400 py-2 px-5 rotate-0 hover:animate-wiggle hover:rotate-12  duration-150 ease-in-out transition-all cursor-pointer"
          href={"/my-work"}
        >
          <p>Work</p>
        </Link>
        <button className=" bg-sky-300 py-2 px-5 rotate-0 hover:animate-wiggle2 hover:-rotate-12 duration-150 ease-in-out transition-all cursor-pointer">
          <p>About</p>
        </button>
        <button className=" bg-sky-400 py-2 px-5 rotate-0 hover:animate-wiggle2 hover:-rotate-12 duration-150 ease-in-out transition-all cursor-pointer">
          <p>resume</p>
        </button>
        <button className=" bg-sky-500 py-2 px-5 rotate-0 hover:animate-wiggle hover:rotate-12 duration-150 ease-in-out transition-all cursor-pointer">
          <p>Contact</p>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
