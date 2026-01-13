import React from "react";
import { motion } from "framer-motion";

const PredictionMark = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="relative py-5 sm:py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Main Container */}
          <div
            className="rounded-[40px] py-10 sm:py-30 relative overflow-hidden "
            style={{
              background:
                "radial-gradient(100.09% 100.09% at 50% 3.11%, #0034BF 0%, #000000 100%)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <img src="/text.png" alt="" className="w-full h-auto mb-20  hidden sm:block" />
            {/* Title */}
            <motion.h2
              variants={itemVariants}
              className="text-center mb-8 font-poppins text-white text-4xl sm:hidden block  whitespace-nowrap"
            >
              <span className="text-white/30">Pred</span>iction{" "}
              <span className="text-white">M</span>
              <span className="text-white/50">a</span>
              <span className="text-white/30">rket</span>
            </motion.h2>
            <img src="/div.png" alt="" className="mx-auto mb-10 sm:mb-20 " />

            {/* Supporting Text */}
            <motion.p
              variants={itemVariants}
              className="text-white text-lg md:text-xl max-w-3xl mx-auto text-center"
            >
              Markets live directly inside Telegram where opinions form, debates
              unfold, and information moves fastest.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PredictionMark;
