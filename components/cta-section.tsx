'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function CtaSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="cta" className="relative py-32 px-6 overflow-hidden bg-cream">
      {/* Decorative gold lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gold/40" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gold/40" />

      <div className="max-w-4xl mx-auto text-center" ref={ref}>
        <motion.p
          className="text-gold text-xs tracking-[0.35em] uppercase font-sans font-medium mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Let&apos;s Create Together
        </motion.p>

        <motion.h2
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground font-light leading-tight text-balance mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Your Perfect Event{' '}
          <span className="italic text-gold">Starts Here</span>
        </motion.h2>

        <motion.p
          className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto mb-12 text-pretty"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Tell us about your vision and we&apos;ll bring it to life with
          culinary artistry and flawless hospitality. We&apos;d love to hear
          from you.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="mailto:hello@thecaterers.co"
            className="inline-block px-12 py-4 bg-foreground text-primary-foreground text-sm tracking-widest uppercase font-medium rounded-full hover:bg-gold hover:text-charcoal transition-all duration-300 cursor-pointer shadow-lg hover:scale-105"
          >
            Get in Touch
          </a>
          <a
            href="tel:+1800000000"
            className="inline-block px-12 py-4 border border-foreground text-foreground text-sm tracking-widest uppercase font-medium rounded-full hover:border-gold hover:text-gold transition-all duration-300 cursor-pointer hover:scale-105"
          >
            Call Us
          </a>
        </motion.div>

        {/* Decorative divider */}
        <motion.div
          className="mt-20 flex items-center gap-6 justify-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="h-px flex-1 max-w-24 bg-border" />
          <span className="font-serif text-xl italic text-muted-foreground">
            The Caterers
          </span>
          <div className="h-px flex-1 max-w-24 bg-border" />
        </motion.div>
      </div>
    </section>
  )
}
