import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

const CTA = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9
      }
    }
  }

  return (
    <section 
      className="relative py-20 overflow-hidden px-5 sm:px-0"
   
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-[64px] bg-[#1A4ACA]"
      
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center rounded-3xl p-10 sm:p-12 md:p-16"
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
            className="text-3xl sm:text-5xl font-bold text-white sm:mb-16 mb-2 leading-tight"
          >
            <span className="font-bold">Turn</span>
            {' '}
            <span className="text-3xl sm:text-5xl italic font-serif" style={{ fontFamily: 'Playfair Display, serif' }}>
              Conversations
            </span>
            <br />
            <span className="font-bold">Into Markets</span>
          </motion.h2>

          {/* Descriptive Paragraph */}
          <motion.p
            variants={itemVariants}
            className="text-white/60 text-sm md:text-xl font-light font-geist max-w-2xl mx-auto mb-4 sm:mb-10"
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