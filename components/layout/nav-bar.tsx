"use client";
// import { motion } from "framer-motion";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className=" bg-transparent py-5 px-16 h-fit w-full flex justify-between items-center">
      <h1 className=" text-xl font-mono text-gray-700">Goldie Portfolio</h1>
      <div className="flex text-white font-mono text-sm">
        <p className=" bg-yellow-400 py-2 px-5 rotate-0 hover:animate-wiggle hover:rotate-12  duration-150 ease-in-out transition-all cursor-pointer">
          Work
        </p>
        <p className=" bg-sky-300 py-2 px-5 rotate-0 hover:animate-wiggle2 hover:-rotate-12 duration-150 ease-in-out transition-all cursor-pointer">
          About
        </p>
        <p className=" bg-sky-400 py-2 px-5 rotate-0 hover:animate-wiggle hover:rotate-12 duration-150 ease-in-out transition-all cursor-pointer">
          Contact
        </p>
      </div>
    </nav>
  );
};

export default NavBar;
