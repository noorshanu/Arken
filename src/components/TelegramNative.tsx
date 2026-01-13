import React from 'react'
import { motion } from 'framer-motion'

const TelegramNative = () => {
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

  const features = [
    {
      color: 'bg-blue-300',
      text: 'Private & Invite-Only Markets'
    },
    {
      color: 'bg-blue-300',
      text: 'DAO & Research Group Use Cases'
    },
    {
      color: 'bg-white',
      text: 'Creator Earnings & Fee Sharing'
    },
    {
      color: 'bg-pink-300',
      text: 'Real-Time Market Pricing'
    },
    {
      color: 'bg-green-300',
      text: 'Clear Resolution Sources'
    }
  ]

  return (
    <section 
      className="relative py-20 overflow-hidden min-h-screen flex items-center "
      style={{
        backgroundImage: 'url(/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          {/* Top Text */}
          <motion.p
            variants={itemVariants}
            className="text-black text-xl md:text-2xl mb-12 font-geist"
          >
            ...and the rest happens in chat
          </motion.p>

          {/* Feature Boxes Network */}
          <div className="relative mb-20">
            {/* Top Row */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
              {features.slice(0, 3).map((feature, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-4 md:p-6 flex items-center gap-3 min-w-[200px]"
                >
                  <div className={`${feature.color} w-4 h-4 rounded`}></div>
                  <p className="text-white text-sm md:text-base">{feature.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Bottom Row */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {features.slice(3).map((feature, index) => (
                <motion.div
                  key={index + 3}
                  variants={cardVariants}
                  className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-4 md:p-6 flex items-center gap-3 min-w-[200px]"
                >
                  <div className={`${feature.color} w-4 h-4 rounded`}></div>
                  <p className="text-white text-sm md:text-base">{feature.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Image - Bottom Center */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-end"
          >
            <img 
              src="/telegramnative.png" 
              alt="Telegram Native App" 
              className="w-full  h-auto -mt-[230px]"
            />
          </motion.div>
        </motion.div>
      </div>


    </section>
  )
}

export default TelegramNative