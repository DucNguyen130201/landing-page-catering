'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'

const services = [
  {
    title: 'Employee Dining',
    description:
      'Daily meal solutions for company canteens and employee cafeterias. Nutritious, varied, and cost-effective options.',
    image: '/images/service-wedding.jpg',
    tag: '01',
  },
  {
    title: 'Corporate Events',
    description:
      'Conference catering, team lunches, seminars, and corporate functions. Professional service and large-scale meal delivery.',
    image: '/images/service-corporate.jpg',
    tag: '02',
  },
  {
    title: 'Industrial Catering',
    description:
      'On-site meal provision for construction sites, factories, and large work operations. Reliable delivery and quality assurance.',
    image: '/images/service-private.jpg',
    tag: '03',
  },
]

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0]
  index: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
      className="group relative rounded-2xl overflow-hidden bg-card shadow-md hover:shadow-xl transition-shadow duration-500 cursor-pointer"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-64">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-blue-gray/20 group-hover:bg-blue-gray/10 transition-colors duration-500" />
        <span className="absolute top-5 left-5 font-serif text-5xl font-light text-white/20 leading-none">
          {service.tag}
        </span>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="font-serif text-2xl text-foreground font-medium leading-tight text-pretty">
            {service.title}
          </h3>
          <span className="mt-1 flex-shrink-0 w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:border-primary group-hover:text-blue-gray transition-all duration-300">
            <ArrowUpRight size={16} />
          </span>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {service.description}
        </p>
        <div className="mt-6 h-px bg-border w-0 group-hover:w-full transition-all duration-500" />
      </div>
    </motion.article>
  )
}

export default function ServicesSection() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })

  return (
    <section id="services" className="py-28 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={titleRef}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary text-xs tracking-[0.35em] uppercase font-sans font-medium mb-4">
            Our Services
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground font-light text-balance leading-tight">
            Solutions for Every{' '}
            <span className="italic text-primary">Business</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto leading-relaxed text-pretty">
            From daily employee meals to large-scale industrial catering, we deliver quality,
            reliability, and professional service at scale.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
