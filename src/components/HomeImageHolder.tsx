"use client";

import React from "react";
import ImageHolder from "./ImageHolder";
import { motion } from "framer-motion";

const HomeImageHolder = () => {
  return (
    <motion.div className="lg:block hidden ml-2 mr-1 mt-[84px]">
      {/* don't even ask how that width works but it works */}
      <div className="bg-card shadow-xl flex flex-col justify-center items-center">
        <ImageHolder imageClassses={"w-[300px] h-[300px]"} />

        <a
          href={"/cv.pdf"}
          download
          className="px-8 py-3 my-4 rounded-full max-w-48  font-bold bg-black text-white "
          target="_blank"
          rel="noopener noreferrer"
        >
          DOWNLOAD CV
        </a>
      </div>
    </motion.div>
  );
};

export default HomeImageHolder;
