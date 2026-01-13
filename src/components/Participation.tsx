import React from 'react'
import { motion } from 'framer-motion'

const Participation = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section 
      className="relative py-20 overflow-hidden"
    
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16"
          >
            <span className="text-black font-geist">Participation</span> <br />
            {' '}
            <span className="text-[#2970FF] italic font-playfair">That Pays</span>
          </motion.h2>

          {/* Data Points Container */}
          <div className="relative max-w-5xl mx-auto h-[280px]">
            {/* Connecting Lines */}
            <svg 
              className="absolute top-4 left-0 w-full h-full hidden md:block pointer-events-none"
              style={{ zIndex: 0 }}
            >
              {/* Horizontal line crossing through the middle of top-center card */}
              <line 
                x1="0%" 
                y1="20%" 
                x2="100%" 
                y2="20%" 
                stroke="#0034BF" 
                strokeWidth="2"
                strokeLinecap="round"
              />
              {/* Horizontal line crossing through the middle of bottom cards - spans between cards */}
              <line 
                x1="12%" 
                y1="70%" 
                x2="87%" 
                y2="70%" 
                stroke="#0034BF" 
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            
            {/* Top Center Card */}
            <motion.div
              variants={cardVariants}
              className="bg-white rounded-full py-6 sm:py-8 px-4 sm:px-12 mb-8 md:mb-0 md:absolute md:top-0 md:left-1/2 md:transform md:-translate-x-1/2 md:w-100 shadow-xl relative z-10 flex gap-4 "
            >
              <div className="text-5xl md:text-6xl font-light text-[#2970FF] mb-3">
                98%
              </div>
              <p className="text-gray-400 text-sm md:text-base text-start">
                Rule-Based Market Resolution
              </p>
            </motion.div>

            {/* Bottom Left Card */}
            <motion.div
              variants={cardVariants}
              className="bg-white rounded-full py-6 sm:py-8 px-4 sm:px-10 mb-8 md:mb-0 md:absolute md:bottom-0 md:left-0 md:w-105 shadow-xl relative z-10 flex gap-4 it "
            >
              <div className="text-5xl md:text-6xl font-light text-[#2970FF] mb-3">
                $10K+
              </div>
              <p className="text-gray-400 text-sm md:text-base text-start">
                Creator Monetization Potential
              </p>
            </motion.div>

            {/* Bottom Right Card */}
            <motion.div
              variants={cardVariants}
              className="rounded-full p-6 md:p-8 md:absolute md:bottom-0 md:right-0 md:w-100 shadow-xl relative z-10 flex gap-4 "
              style={{
                background: 'linear-gradient(97.66deg, #2D58D9 45%, #BFD7FF 100%)'
              }}
            >
              <div className="text-5xl md:text-6xl font-light text-white mb-3">
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
  )
}

export default Participation