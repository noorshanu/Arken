import React from 'react'
import { motion } from 'framer-motion'

const MarketedBy = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9
      }
    }
  }

  const stats = [
    {
      icon: "/market.png",
      metric: "95%",
      label: "Market Accuracy",
      description: "Prediction market effectiveness in forecasting global events."
    },
    {
      icon: "/trading.png",
      metric: "$10 M+",
      label: "Trading Activity",
      description: "Liquidity sourced from community markets and external integrations."
    },
    {
      icon: "/success.png",
      metric: "99%",
      label: "Transparent Outcomes",
      description: "Clear resolution rules and on-chain settlement logic."
    }
  ]

  return (
    <section className="relative py-20 bg-[#FCFAF6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className=""
        >
          {/* Statistics Button */}
          <motion.div
            variants={itemVariants}
            className=" mb-8 flex justify-center items-center text-center mx-auto"
          >
                <button className="bg-gray-100 border text-base border-gray-200 text-gray-700 font-medium px-6 py-2 rounded-full hover:bg-gray-200 transition-colors">
                Statistics
            </button>
           
          </motion.div>

          {/* Main Title */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl  sm:text-7xl font-bold mb-16 text-center"
          >
            <span className="text-black font-geist">Markets Powered by</span>
            <br />
            <span className="text-[#0942C3] italic font-playfair">Real Insight</span>
          </motion.h2>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white border border-gray-200  rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                {/* Icon */}
                <div className="mb-6">
                  <img 
                    src={stat.icon} 
                    alt={stat.label}
                    className="w-12 h-12 object-contain"
                  />
                </div>

                {/* Metric */}
                <div className="text-5xl md:text-6xl font-bold text-black mb-4 font-geist">
                  {stat.metric}
                </div>

                {/* Label */}
                <div className="text-xl font-semibold text-black mb-3 font-geist">
                  {stat.label}
                </div>

                {/* Description */}
                <p className="text-[#737373] text-sm leading-relaxed font-geist">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MarketedBy