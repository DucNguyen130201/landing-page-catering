'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: '12+', label: 'Years of Service' },
  { value: '500+', label: 'Companies Served' },
  { value: '97%', label: 'Client Satisfaction' },
  { value: '50+', label: 'Catering Staff' },
]

export default function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true })

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
              <p className="font-serif text-5xl text-primary font-light leading-none mb-1">
                15<span className="text-2xl">+</span>
              </p>
              <p className="text-xs tracking-widest uppercase text-muted-foreground font-sans">
                Years of Excellence
              </p>
            </motion.div>
            {/* Gold decorative border */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-primary rounded-tl-2xl pointer-events-none" />
          </motion.div>

          {/* Right – text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          >
            <p className="text-primary text-xs tracking-[0.35em] uppercase font-sans font-medium mb-5">
              About Us
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground font-light text-balance leading-tight mb-8">
              Reliable Service,{' '}
              <span className="italic text-primary">Every Meal</span>
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-pretty">
              <p>
                With over a decade of experience, Corporate Meals is Vietnam's
                leading provider of industrial catering solutions. We specialize in
                large-scale meal delivery for companies, factories, and corporate
                events across the country.
              </p>
              <p>
                Our professional team combines food safety expertise, reliable
                logistics, and quality standards to ensure every meal meets your
                expectations. We understand the unique demands of corporate catering
                and deliver consistently, every single day.
              </p>
              <p>
                From employee canteens to conference catering to on-site industrial
                dining, we provide nutritious, varied menus adapted to your team's
                needs and dietary requirements.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => {
                  const el = document.querySelector('#cta')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-8 py-3.5 bg-foreground text-primary-foreground text-sm tracking-widest uppercase font-medium rounded-full hover:bg-primary hover:text-blue-gray transition-all duration-300 cursor-pointer"
              >
                Get In Touch
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
