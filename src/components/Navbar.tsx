import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <nav className={`fixed top-2 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'py-2' : 'py-2'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Glassmorphism Navbar Container */}
          <div className="backdrop-blur-md bg-white border border-white/10 rounded-full shadow-lg">
            <div className="flex items-center justify-between px-6 py-2">
              {/* Logo and Brand Name */}
              <div className="flex items-center space-x-3">
                <img 
                  src="/logo.png" 
                  alt="Arken Logo" 
                  className="w-[120px] h-auto"
                />
             
              </div>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-8">
                <a 
                  href="#features" 
                  className="text-black hover:text-[#0942C3] transition-colors text-sm font-medium font-geist cursor-pointer  "
                >
                  Features
                </a>
                <a 
                  href="#how-it-works" 
                  className="text-black hover:text-[#0942C3] transition-colors text-sm font-medium font-geist cursor-pointer  "
                >
                  How it Works
                </a>
                <a 
                  href="#docs" 
                  className="text-black hover:text-[#0942C3] transition-colors text-sm font-medium font-geist"
                >
                  Docs
                </a>
              </div>

              {/* Desktop Launch App Button */}
              <a
                href="/app"
                className="hidden md:block bg-black text-white font-bold px-6 py-2.5 rounded-full hover:bg-gray-800 transition-colors text-sm uppercase tracking-wide"
              >
                Launch App
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-black focus:outline-none"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                  <motion.span
                    animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                    className="block h-0.5 w-6 bg-black transition-all"
                  />
                  <motion.span
                    animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="block h-0.5 w-6 bg-black transition-all"
                  />
                  <motion.span
                    animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                    className="block h-0.5 w-6 bg-black transition-all"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Slide-in Menu */}
            <motion.div
              ref={menuRef}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <img 
                    src="/logo.png" 
                    alt="Arken Logo" 
                    className="w-[120px] h-auto"
                  />
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 text-gray-600 hover:text-gray-900"
                    aria-label="Close menu"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Menu Links */}
                <nav className="flex-1 px-6 py-8 space-y-6">
                  <motion.a
                    href="#features"
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    Features
                  </motion.a>
                  <motion.a
                    href="#how-it-works"
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    How it Works
                  </motion.a>
                  <motion.a
                    href="#docs"
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    Docs
                  </motion.a>
                </nav>

                {/* Menu Footer with CTA */}
                <div className="p-6 border-t border-gray-200">
                  <motion.a
                    href="/app"
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="block w-full bg-black text-white font-bold px-6 py-3 rounded-full hover:bg-gray-800 transition-colors text-center text-sm uppercase tracking-wide"
                  >
                    Launch App
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar