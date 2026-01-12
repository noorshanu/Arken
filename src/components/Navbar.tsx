import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
                  className="text-black hover:text-blue-200 transition-colors text-sm font-medium"
                >
                  Features
                </a>
                <a 
                  href="#how-it-works" 
                  className="text-black hover:text-blue-200 transition-colors text-sm font-medium"
                >
                  How it Works
                </a>
                <a 
                  href="#docs" 
                  className="text-black hover:text-blue-200 transition-colors text-sm font-medium"
                >
                  Docs
                </a>
              </div>

              {/* Launch App Button */}
              <a
                href="/app"
                className="bg-black text-white font-bold px-6 py-2.5 rounded-full hover:bg-gray-100 transition-colors text-sm uppercase tracking-wide"
              >
                Launch App
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar