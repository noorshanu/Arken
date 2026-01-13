import React from 'react'
import { motion } from 'framer-motion'
import { CiLock } from "react-icons/ci";
import { BsLightningCharge } from "react-icons/bs";

const Workflow = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1
      }
    }
  }

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1
      }
    }
  }

  return (
    <section className="relative py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left Section - Application Window */}
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src="/con.png" 
                alt="ARKEN Mini App Interface" 
                className="w-full h-auto "
              />
            </div>
          </motion.div>

          {/* Right Section - Content */}
          <motion.div variants={rightVariants} className="order-1 lg:order-2">
            <h2 className="text-2xl sm:text-5xl  font-medium text-black mb-6 font-poppins">
              Native to Your Workflow.
            </h2>
            
            <p className=" text-sm sm:text-lg text-gray-600 mb-8 leading-relaxed font-light font-poppins">
              ARKEN isn't a web app trying to fit into Telegram. It's built from the ground up to leverage Telegram's native Mini App capabilities, providing a seamless, high-performance trading experience.
            </p>

            {/* Feature Highlights */}
            <div className="space-y-6">
              {/* Instant Execution */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-[#8B5CF61A] flex items-center justify-center shrink-0">
                  <BsLightningCharge className="text-[#8B5CF6] text-xl" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg  text-black font-medium font-poppins mb-2">Instant Execution</h3>
                  <p className="text-gray-600">
                    Trades settle on Polygon PoS. Fast, cheap, and secure.
                  </p>
                </div>
              </div>

              {/* Non-Custodial */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-[#D946EF1A] flex items-center justify-center shrink-0">
                  <CiLock className="text-[#E879F9] text-xl" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg  text-black font-medium font-poppins mb-2">Non-Custodial</h3>
                  <p className="text-gray-600">
                    Your keys, your crypto. Funds never leave your control.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Workflow