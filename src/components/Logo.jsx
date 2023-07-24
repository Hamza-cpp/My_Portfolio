import React from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import { Logo_Light, Logo_Dark } from "./Icons";

const MotionLink = motion(Link);
export const Logo = () => {
  return (
    <div className="items-center flex justify-center">
      <MotionLink
        href="/"
        className=" items-center flex justify-center h-16 w-20"
        whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
      >
        <Logo_Dark />
      </MotionLink>

      {/* <motion.a
          href="#"
          target={"_blank"}
          className="mr-2 w-6"
          whileHover={{ y: -2 }}
        >
          <TwitterIcon />
        </motion.a> */}
    </div>

  );
};
export default Logo;
