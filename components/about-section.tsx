'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: '15+', label: 'Years of Excellence' },
  { value: '2,400+', label: 'Events Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '35', label: 'Expert Team Members' },
]

export default function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, margin: '-60px' })

  return (
    <section id="about" className="py-28 px-6 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left – image */}
          <motion.div
            ref={ref}
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <img
                src="/images/about.jpg"
                alt="Our passionate culinary team at work"
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Floating accent card */}
            <motion.div
              className="absolute -bottom-8 -right-6 lg:-right-12 bg-card rounded-2xl shadow-xl px-8 py-6 border border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <p className="font-serif text-5xl text-gold font-light leading-none mb-1">
                15<span className="text-2xl">+</span>
              </p>
              <p className="text-xs tracking-widest uppercase text-muted-foreground font-sans">
                Years of Excellence
              </p>
            </motion.div>
            {/* Gold decorative border */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-gold rounded-tl-2xl pointer-events-none" />
          </motion.div>

          {/* Right – text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          >
            <p className="text-gold text-xs tracking-[0.35em] uppercase font-sans font-medium mb-5">
              Our Story
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground font-light text-balance leading-tight mb-8">
              Passion on Every{' '}
              <span className="italic text-gold">Plate</span>
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-pretty">
              <p>
                Founded with a deep love for food and hospitality, The Caterers
                has grown into one of the most trusted names in luxury event
                catering. We believe that food is the heart of every
                celebration — a language spoken by all.
              </p>
              <p>
                Our team of passionate chefs and event specialists work closely
                with each client to design menus that reflect their story,
                vision, and taste. No two events are alike, and we cherish that.
              </p>
              <p>
                From seasonal ingredients sourced from local farms to bespoke
                table settings that dazzle, every detail is considered with care
                and intention.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => {
                  const el = document.querySelector('#cta')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-8 py-3.5 bg-foreground text-primary-foreground text-sm tracking-widest uppercase font-medium rounded-full hover:bg-gold hover:text-charcoal transition-all duration-300 cursor-pointer"
              >
                Work With Us
              </button>
              <button
                onClick={() => {
                  const el = document.querySelector('#services')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-8 py-3.5 border border-border text-foreground text-sm tracking-widest uppercase font-medium rounded-full hover:border-gold hover:text-gold transition-all duration-300 cursor-pointer"
              >
                Our Services
              </button>
            </div>

            {/* Stats row */}
            <div
              ref={statsRef}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14 pt-10 border-t border-border"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <p className="font-serif text-3xl text-foreground font-light mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground leading-tight text-pretty">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
