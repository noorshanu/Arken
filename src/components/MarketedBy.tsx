import React from 'react'
import { motion } from 'framer-motion'

const MarketedBy = () => {
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  const stats = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      metric: "95%",
      label: "Market Accuracy",
      description: "Prediction market effectiveness in forecasting global events."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      metric: "$10 M+",
      label: "Trading Activity",
      description: "Liquidity sourced from community markets and external integrations."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
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
          className="text-center"
        >
          {/* Statistics Button */}
          <motion.div
            variants={itemVariants}
            className="inline-block mb-8"
          >
            <button className=" font-medium text-[#17171766]/60">
              Statistics
            </button>
          </motion.div>

          {/* Main Title */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl  sm:text-6xl font-bold mb-16"
          >
            <span className="text-black font-geist">Markets Powered by</span>
            <br />
            <span className="text-blue-600 italic font-playfair">Real Insight</span>
          </motion.h2>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                {/* Icon */}
                <div className="text-blue-600 mb-6">
                  {stat.icon}
                </div>

                {/* Metric */}
                <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                  {stat.metric}
                </div>

                {/* Label */}
                <div className="text-xl font-semibold text-gray-900 mb-3">
                  {stat.label}
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
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