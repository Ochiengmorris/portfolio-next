import { motion } from "framer-motion";
import React from "react";
import ImageHolder from "./ImageHolder";

const SidebarImageHolder = () => {
  return (
    <motion.div
      className="lg:hidden block ml-2 mr-1 mt-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* don't even ask how that width works but it works */}
      <div className="bg-card shadow-xl flex flex-col justify-center items-center">
        <ImageHolder imageClassses={"w-[300px] h-[300px]"} />

        <motion.a
          href={"/cv.pdf"}
          download
          className="px-8 py-3 my-4 rounded-full max-w-48  font-bold bg-black text-white "
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          DOWNLOAD CV
        </motion.a>
      </div>
    </motion.div>
  );
};

export default SidebarImageHolder;
