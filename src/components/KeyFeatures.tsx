import React from 'react'
import { motion } from 'framer-motion'
import { FaComments, FaBolt, FaShieldAlt, FaChartBar } from 'react-icons/fa'

const KeyFeatures = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  const features = [
    {
      icon: FaComments,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      title: 'Native Telegram Experience',
      description: 'Built entirely inside Telegram. One tap opens the market, prices update live, and trades settle all without leaving the chat.'
    },
    {
      icon: FaBolt,
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      title: 'Community-Created Markets',
      description: 'Group owners launch custom markets on topics their members care about — from crypto and sports to niche community outcomes.'
    },
    {
      icon: FaShieldAlt,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      title: 'USDC Settlement',
      description: 'All trades settle in USDC, ensuring stable payouts, transparent accounting, and predictable outcomes.'
    },
    {
      icon: FaChartBar,
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
      title: 'Real Liquidity Access',
      description: 'ARKEN Markets connects community markets with established external liquidity, enabling participation in globally relevant events.'
    }
  ]

  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          {/* Key Features Button */}
          <motion.div
            variants={itemVariants}
            className="inline-block mb-8"
          >
         
            <button className="bg-gray-100 border text-base border-gray-200 text-gray-700 font-medium px-6 py-2 rounded-full hover:bg-gray-200 transition-colors">
            Key Features
            </button>
          </motion.div>

          {/* Main Title */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl  sm:text-7xl font-bold mb-16"
          >
            <span className="text-black font-geist">Explore Our</span>
            <br />
            <span className="text-[#0942C3] italic font-playfair">Standout Features</span>
          </motion.h2>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-blue-300 transition-all"
                >
                  {/* Icon */}
                  <div className={`${feature.iconBg} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                    <IconComponent className={`${feature.iconColor} text-2xl`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default KeyFeatures