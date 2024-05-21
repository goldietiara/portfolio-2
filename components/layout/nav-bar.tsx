"use client";
// import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { openPdf } from "@/composables/utils";
import Image from "next/image";

const NavBar = () => {
  const pathName = usePathname();
  const isActive = pathName === "/my-work";

  return (
    <nav className=" bg-white/80 py-5 md px-5 h-fit w-full flex justify-center md:justify-between items-center max-w-7xl mx-auto">
      <Link
        href={"/"}
        className=" text-xl font-mono text-gray-700 relative h-fit w-fit group flex md:hidden"
      >
        <Image
          src={"/svg/nav-bar/goldie-portfolio-2.svg"}
          alt="goldie-portfolio"
          width={270}
          height={27}
          className=" absolute hidden group-hover:flex group-hover:animate-blink"
        />
        <Image
          src={"/svg/nav-bar/goldie-portfolio.svg"}
          alt="goldie-portfolio"
          width={270}
          height={27}
        />
      </Link>
      <Link
        href={"/"}
        className=" text-xl font-mono text-gray-700 relative h-fit w-fit group hidden md:flex"
      >
        <Image
          src={"/svg/nav-bar/goldie-portfolio-2.svg"}
          alt="goldie-portfolio"
          width={347}
          height={30}
          className=" absolute hidden group-hover:flex group-hover:animate-blink"
        />
        <Image
          src={"/svg/nav-bar/goldie-portfolio.svg"}
          alt="goldie-portfolio"
          width={347}
          height={30}
        />
      </Link>
      <div className="md:flex text-white font-mono text-sm hidden">
        <Link
          className={` bg-yellow-400 py-2 px-5  
          ${isActive ? "rotate-12" : "rotate-0"}
          hover:animate-wiggle hover:rotate-12 duration-150 ease-in-out transition-all cursor-pointer`}
          href={"/my-work"}
        >
          <p>Work</p>
        </Link>
        <Link
          href={isActive ? "/#about" : "#about"}
          className=" bg-sky-300 py-2 px-5 rotate-0 hover:animate-wiggle2 hover:-rotate-12 duration-150 ease-in-out transition-all cursor-pointer"
        >
          <p>About</p>
        </Link>
        <button
          onClick={openPdf}
          className=" bg-sky-400 py-2 px-5 rotate-0 hover:animate-wiggle2 hover:-rotate-12 duration-150 ease-in-out transition-all cursor-pointer"
        >
          <p>CV</p>
        </button>
        <Link
          href={isActive ? "/#contact" : "#contact"}
          className=" bg-sky-500 py-2 px-5 rotate-0 hover:animate-wiggle hover:rotate-12 duration-150 ease-in-out transition-all cursor-pointer"
        >
          <p>Contact</p>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
