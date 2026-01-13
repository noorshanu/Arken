import React from "react";
import { motion } from "framer-motion";

const Participation = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.9,
      },
    },
  };

  return (
    <section className="relative py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="text-center"
        >
          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16"
          >
            <span className="text-black font-geist">Participation</span> <br />{" "}
            <span className="text-[#2970FF] italic font-playfair">
              That Pays
            </span>
          </motion.h2>

          {/* Data Points Container */}
          <div className="relative mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 ">
            {/* Connecting Lines */}
            <img src="/doc1.png" alt="" className="" />

            {/* Top Center Card */}
            <motion.div
              variants={cardVariants}
              className="bg-[#F4F8FF] rounded-full    shadow-xl relative z-10 flex gap-4 items-center py-6 px-10 justify-center"
            >
              <div className="text-4xl md:text-5xl font-light text-[#2970FF] ">
                98%
              </div>
              <p className="text-gray-400 text-sm md:text-base text-start">
                Rule-Based Market Resolution
              </p>
            </motion.div>
            <img src="/doc1.png" alt="" className="" />

            {/* Bottom Left Card */}
            <motion.div
              variants={cardVariants}
              className="bg-white rounded-full  shadow-xl relative z-10 flex gap-4 items-center py-6 px-10 justify-center"
            >
              <div className="text-4xl md:text-5xl font-light text-[#2970FF] ">
                $10K+
              </div>
              <p className="text-gray-400 text-sm md:text-base text-start">
                Creator Monetization Potential
              </p>
            </motion.div>
            <img src="/doc2.png" alt="" className=" mx-auto" />
            {/* Bottom Right Card */}
            <motion.div
              variants={cardVariants}
              className="rounded-full  shadow-xl relative z-10 flex gap-4 items-center py-6 px-10 justify-center"
              style={{
                background:
                  "linear-gradient(97.66deg, #2D58D9 45%, #BFD7FF 100%)",
              }}
            >
              <div className="text-4xl md:text-5xl font-light text-white ">
                50%
              </div>
              <p className="text-white text-sm md:text-base text-start">
                Engagement Increase in Active Groups
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Participation;
