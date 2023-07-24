import React from "react";
import Link from "next/link";
import {motion} from "framer-motion";

const MotionLink = motion(Link);
export const Logo = () => {
  return (
    <div className="items-center flex justify-center ">
      <MotionLink
        href="/"
        className=" bg-dark text-white font-bold rounded-full px-4 py-3 items-center flex justify-center "
        whileHover={{
            scale: 1.125,
            transition: { duration: 2 },
          }}
          whileTap={{ scale: 0.9 }}
      >
        Hamza_OK
      </MotionLink>
    </div>
  );
};
export default Logo;
