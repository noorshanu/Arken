import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

const CTA = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-[64px] bg-[#1A4ACA]"
      
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center rounded-3xl p-12 md:p-16"
        >
          {/* Top Banner */}
          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
            <p className="text-white text-sm uppercase tracking-widest font-semibold font-geist">
              GET STARTED TODAY
            </p>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-16 leading-tight"
          >
            <span className="font-bold">Turn</span>
            {' '}
            <span className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl italic font-serif" style={{ fontFamily: 'Playfair Display, serif' }}>
              Conversations
            </span>
            <br />
            <span className="font-bold">Into Markets</span>
          </motion.h2>

          {/* Descriptive Paragraph */}
          <motion.p
            variants={itemVariants}
            className="text-white/60 text-lg md:text-xl font-light font-geist max-w-2xl mx-auto mb-10"
          >
            ARKEN Markets transforms attention into liquidity and communities into market operators directly inside Telegram
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="/app"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-900 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
            >
              Launch Telegram App
            </motion.a>
            <motion.a
              href="/docs"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white/20 text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              Read Docs
              <FaArrowRight className="text-white" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA