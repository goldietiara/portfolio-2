"use client";
// import { motion } from "framer-motion";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className=" bg-transparent py-5 md px-5 h-fit w-full flex justify-between items-center max-w-7xl mx-auto">
      <Link href={"/"} className=" text-xl font-mono text-gray-700">
        Goldie Portfolio
      </Link>
      <div className="md:flex text-white font-mono text-sm hidden">
        <button className=" bg-yellow-400 py-2 px-5 rotate-0 hover:animate-wiggle hover:rotate-12  duration-150 ease-in-out transition-all cursor-pointer">
          <p>Work</p>
        </button>
        <button className=" bg-sky-300 py-2 px-5 rotate-0 hover:animate-wiggle2 hover:-rotate-12 duration-150 ease-in-out transition-all cursor-pointer">
          <p>About</p>
        </button>
        <button className=" bg-sky-400 py-2 px-5 rotate-0 hover:animate-wiggle hover:rotate-12 duration-150 ease-in-out transition-all cursor-pointer">
          <p>Contact</p>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
