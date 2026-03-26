'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#cta' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-sm'
            : 'bg-transparent'
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
          {/* Logo */}
          <div>
            <img
            src="/images/logo-removebg-preview.png"
            alt="Logo Catering"
            className="h-18 object-cover object-center"
            />
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              className={`font-serif text-2xl font-semibold tracking-widest transition-colors duration-300 ${
                scrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              <div>CÔNG TY TNHH <span className="text-primary italic font-light">KỲ THƯ</span></div>
              <div>Hẻm 36, DT 786, Tổ 17, Thanh Thuận, Phường Thanh Điền, Tỉnh Tây Ninh, Việt Nam</div>
            </a>
          </div>
          {/* <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center transition-opacity duration-300 hover:opacity-80"
          >
            <img
              src="/images/logo.jpg"
              alt="Corporate Meals Logo"
              className="h-10 w-auto object-contain"
            />
          </a> */}

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm tracking-widest uppercase font-sans font-medium transition-colors duration-300 hover:text-gold cursor-pointer ${
                  scrolled ? 'text-foreground/80' : 'text-white/90'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#cta')}
              className="ml-4 px-6 py-2.5 border text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:bg-primary hover:border-primary hover:text-blue-gray rounded-full cursor-pointer border-primary text-primary"
            >
              Get Quote
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 transition-colors ${scrolled ? 'text-foreground' : 'text-white'}`}
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-charcoal/95 backdrop-blur-sm flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="font-serif text-3xl text-white/90 hover:text-primary transition-colors italic cursor-pointer"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.07 }}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              onClick={() => handleNavClick('#cta')}
              className="mt-4 px-8 py-3 border border-primary text-primary text-sm tracking-widest uppercase rounded-full hover:bg-primary hover:text-blue-gray transition-all cursor-pointer"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: navLinks.length * 0.07 }}
            >
              Book Now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
