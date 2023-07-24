import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  TwitterIcon,
} from "./Icons";
import Logo from "./Logo";
import { motion } from "framer-motion";

const CostumLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative text-base  group `}>
      {title}
      <span
        className={`h-[2px] inline-block bg-dark 
      absolute left-0 bottom-0 
      group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? "w-full" : "w-0"}
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="w-full bg-slate-500 px-16 py-8 flex justify-between items-center">
      <nav>
        <CostumLink href="/" title="Home" className="mr-4" />
        <CostumLink href="/about" title="About" className="mx-4" />
        <CostumLink href="/projects" title="Projects" className="mx-4" />
        <CostumLink href="/articles" title="Articles" className="ml-4" />
      </nav>
      <div className="absolute left-[50%] top-2  translate-x-[-50%] mt-3">
        <Logo />
      </div>
      <nav className="flex items-center flex-wrap justify-center">
        <motion.a
          href="#"
          target={"_blank"}
          className="mr-2 w-6"
          whileHover={{ y: -2 }}
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="#"
          target={"_blank"}
          className="mx-2 w-6"
          whileHover={{ y: -2 }}
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="#"
          target={"_blank"}
          className="mx-2 w-6"
          whileHover={{ y: -2 }}
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="#"
          target={"_blank"}
          className="mx-2 w-6"
          whileHover={{ y: -2 }}
        >
          <DribbbleIcon />
        </motion.a>
        <motion.a
          href="#"
          target={"_blank"}
          className="ml-2 w-6"
          whileHover={{ y: -2 }}
        >
          <PinterestIcon />
        </motion.a>
      </nav>
    </header>
  );
};

export default NavBar;
