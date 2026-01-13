import React from 'react'
import { motion } from 'framer-motion'
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import { BsLightningCharge } from "react-icons/bs";
import { LuShieldCheck,LuChartColumn } from "react-icons/lu";

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
      icon: MdOutlineChatBubbleOutline,
      iconBg: 'bg-[#2B7FFF1A]',  
      iconColor: 'text-[#2B7FFF]',
      title: 'Native Telegram Experience',
      description: 'Built entirely inside Telegram. <br /> One tap opens the market, prices update live, and <br /> trades settle all without leaving the chat.'
    },
    {
      icon: BsLightningCharge,
      iconBg: 'bg-[#F0B1001A]',
      iconColor: 'text-[#EFB100]',
      title: 'Community-Created Markets',
      description: 'Group owners launch custom <br /> markets on topics their members <br /> care about — from crypto and sports <br/> to niche community outcomes.'
    },
    {
      icon: LuShieldCheck,
      iconBg: 'bg-[#00C9501A]',
      iconColor: 'text-[#00C950]',
      title: 'USDC Settlement',
      description: 'All trades settle in USDC, ensuring <br /> stable payouts, transparent <br/> accounting, and  predictable <br /> outcomes.'
    },
    {
      icon: LuChartColumn,
      iconBg: 'bg-[#FFB49B1A]',
      iconColor: 'text-[#FF4B4B]',
      title: 'Real Liquidity Access',
      description: 'ARKEN Markets connects community markets <br /> with established external liquidity, enabling <br /> participation in globally relevant events.'
    }
  ]

  return (
    <section className="relative py-20 ">
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
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* First Row */}
            <div className="flex flex-col md:flex-row gap-6 lg:gap-8">
              {/* Left Card - Large (800px) */}
              <motion.div
                variants={cardVariants}
                className="bg-white border-2 border-gray-200 rounded-[48px] py-16 px-8 hover:shadow-lg hover:border-blue-300 transition-all w-full md:w-[800px] h-[370px]"
              >
                {(() => {
                  const IconComponent = features[0].icon
                  return (
                    <>
                      {/* Icon */}
                      <div className={`${features[0].iconBg} w-14 h-14 rounded-2xl flex items-center justify-center mb-6`}>
                        <IconComponent className={`${features[0].iconColor} text-2xl`} />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-4 text-start">
                        {features[0].title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed text-start pr-8" dangerouslySetInnerHTML={{ __html: features[0].description }} />
                    </>
                  )
                })()}
              </motion.div>

              {/* Right Card - Small (400px) */}
              <motion.div
                variants={cardVariants}
                className="bg-white border-2 border-gray-200 rounded-[48px] py-16 px-8 hover:shadow-lg hover:border-blue-300 transition-all w-full md:w-[400px] h-[370px]"
              >
                {(() => {
                  const IconComponent = features[1].icon
                  return (
                    <>
                      {/* Icon */}
                      <div className={`${features[1].iconBg} w-14 h-14 rounded-2xl flex items-center justify-center mb-6`}>
                        <IconComponent className={`${features[1].iconColor} text-2xl`} />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-4 text-start">
                        {features[1].title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed text-start pr-8" dangerouslySetInnerHTML={{ __html: features[1].description }} />
                    </>
                  )
                })()}
              </motion.div>
            </div>

            {/* Second Row */}
            <div className="flex flex-col md:flex-row gap-6 lg:gap-8">
              {/* Left Card - Small (400px) */}
              <motion.div
                variants={cardVariants}
                className="bg-white border-2 border-gray-200 rounded-[48px] py-16 px-8 hover:shadow-lg hover:border-blue-300 transition-all w-full md:w-[400px] h-[370px]"
              >
                {(() => {
                  const IconComponent = features[2].icon
                  return (
                    <>
                      {/* Icon */}
                      <div className={`${features[2].iconBg} w-14 h-14 rounded-2xl flex items-center justify-center mb-6`}>
                        <IconComponent className={`${features[2].iconColor} text-2xl`} />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-4 text-start">
                        {features[2].title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed text-start" dangerouslySetInnerHTML={{ __html: features[2].description }} />
                    </>
                  )
                })()}
              </motion.div>

              {/* Right Card - Large (800px) */}
              <motion.div
                variants={cardVariants}
                className="bg-white border-2 border-gray-200 rounded-[48px] py-16 px-8 hover:shadow-lg hover:border-blue-300 transition-all w-full md:w-[800px] h-[370px]"
              >
                {(() => {
                  const IconComponent = features[3].icon
                  return (
                    <>
                      {/* Icon */}
                      <div className={`${features[3].iconBg} w-14 h-14 rounded-2xl flex items-center justify-center mb-6`}>
                        <IconComponent className={`${features[3].iconColor} text-2xl`} />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-4 text-start">
                        {features[3].title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed text-start" dangerouslySetInnerHTML={{ __html: features[3].description }} />
                    </>
                  )
                })()}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default KeyFeatures