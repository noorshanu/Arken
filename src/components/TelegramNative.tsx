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
      color: 'bg-[#D1E0FF]',
      text: 'Private & <br /> Invite-Only Markets'
    },
    {
      color: 'bg-[#D1E0FF]',
      text: 'DAO & Research <br /> Group Use Cases'
    },
    {
      color: 'bg-[#E8F9FF]',
      text: 'Creator Earnings & <br /> Fee Sharing'
    },
    {
      color: 'bg-[#FFDEF3]',
      text: 'Real-Time <br /> Market Pricing'
    },
    {
      color: 'bg-[#DFF9E0]',
      text: 'Clear Resolution <br /> Sources'
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
            className="text-black text-xl sm:text-4xl mb-10 font-normal font-poppins"
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
                  className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-2 md:p-3 flex items-center gap-3 min-w-[250px]"
                >
                  <div className={`${feature.color} w-10 h-10 border-2 border-white rounded`}></div>
                  <p className="text-white text-sm md:text-base text-start font-medium font-poppins" dangerouslySetInnerHTML={{ __html: feature.text }} />
                </motion.div>
              ))}
            </div>

            {/* Bottom Row */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {features.slice(3).map((feature, index) => (
                <motion.div
                  key={index + 3}
                  variants={cardVariants}
                  className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-2 md:p-3 flex items-center gap-3 min-w-[250px]"
                >
                  <div className={`${feature.color} w-10 h-10 border-2 border-white rounded`}></div>
                  <p className="text-white text-sm md:text-base text-start font-medium font-poppins" dangerouslySetInnerHTML={{ __html: feature.text }} />
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
              className="w-full  h-auto -mt-[150px] sm:-mt-[230px]"
            />
          </motion.div>
        </motion.div>
      </div>


    </section>
  )
}

export default TelegramNative