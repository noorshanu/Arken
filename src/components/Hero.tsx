import React, { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const Hero = () => {
  const phoneRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 300,
    damping: 30
  })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 300,
    damping: 30
  })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (phoneRef.current) {
        const rect = phoneRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        
        const x = (e.clientX - centerX) / (rect.width / 2)
        const y = (e.clientY - centerY) / (rect.height / 2)
        
        mouseX.set(x)
        mouseY.set(y)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  const phoneVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.5
      }
    }
  }

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-50 pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Top Banner */}
          <motion.div
            variants={itemVariants}
            className="inline-block mb-8"
          >
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-6 py-2.5 shadow-sm">
              <p className="text-sm font-medium text-gray-700">
                Prediction markets, natively inside Telegram
              </p>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={textVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <motion.span variants={wordVariants} className="text-gray-900">
              Speculate
            </motion.span>
            {' '}
            <motion.span variants={wordVariants} className="text-blue-600">
              the Future,
            </motion.span>
            <br />
            <motion.span variants={wordVariants} className="text-gray-900">
              Without
            </motion.span>
            {' '}
            <motion.span variants={wordVariants} className="text-gray-900">
              Leaving Telegram
            </motion.span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12"
          >
            ARKEN Markets bring prediction markets directly into Telegram
            <br />
            chats turning live into real, tradable outcomes.
          </motion.p>

          {/* Phone Image with 3D Tilt Effect */}
          <motion.div
            ref={phoneRef}
            variants={phoneVariants}
            className="relative flex justify-center items-center my-16"
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
              perspective: 1000
            }}
          >
            <motion.img
              src="/phone.png"
              alt="Arken App on Phone"
              className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto drop-shadow-2xl"
              style={{
                transform: "translateZ(50px)"
              }}
            />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
          >
            <motion.a
              href="/app"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-900 text-white font-bold px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors shadow-lg"
            >
              Launch App
            </motion.a>
            <motion.a
              href="/markets"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-900 font-bold px-8 py-4 rounded-xl border-2 border-gray-900 hover:bg-gray-50 transition-colors shadow-lg"
            >
              View Markets
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}

export default Hero