import React from 'react'
import { motion } from 'framer-motion'

const PredictionMark = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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
          className="relative"
        >
          {/* Main Container */}
          <div 
            className="rounded-3xl p-12 md:p-16 lg:p-20 relative overflow-hidden min-h-[400px] md:min-h-[500px] lg:min-h-[563px]"
            style={{
              background: 'radial-gradient(100.09% 100.09% at 50% 3.11%, #0034BF 0%, #000000 100%)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            {/* Title */}
            <motion.h2
              variants={itemVariants}
              className="text-center mb-8 text-5xl md:text-7xl lg:text-8xl xl:text-[128px]"
              style={{
                fontWeight: 600,
                lineHeight: '1.1'
              }}
            >
              <span className="text-white/40">Prediction</span>
              {' '}
              <span className="text-white">Market</span>
            </motion.h2>

            {/* Supporting Text */}
            <motion.p
              variants={itemVariants}
              className="text-white text-lg md:text-xl max-w-3xl mx-auto text-left"
            >
              Markets live directly inside Telegram where opinions form, debates unfold, and information moves fastest.
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Light Blue Line at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-400"></div>
    </section>
  )
}

export default PredictionMark