'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Plus } from 'lucide-react'

const galleryItems = [
  {
    src: '/images/gallery-1.jpg',
    alt: 'Outdoor wedding garden ceremony with catering',
    category: 'Weddings',
    span: 'row-span-2',
  },
  {
    src: '/images/gallery-2.jpg',
    alt: 'Gourmet canapés and appetizers presentation',
    category: 'Fine Dining',
    span: '',
  },
  {
    src: '/images/gallery-3.jpg',
    alt: 'Gala black tie dinner event',
    category: 'Galas',
    span: '',
  },
  {
    src: '/images/gallery-4.jpg',
    alt: 'Luxury dessert table with cakes and florals',
    category: 'Celebrations',
    span: '',
  },
]

function GalleryItem({
  item,
  index,
}: {
  item: (typeof galleryItems)[0]
  index: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden rounded-2xl group cursor-pointer ${item.span}`}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
    >
      <img
        src={item.src}
        alt={item.alt}
        className="w-full h-full object-cover object-center min-h-64 transition-transform duration-700 group-hover:scale-108"
        style={{ minHeight: item.span ? '28rem' : '16rem' }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-center justify-center gap-3">
        <span className="text-gold text-xs tracking-[0.3em] uppercase font-sans">
          {item.category}
        </span>
        <div className="w-10 h-10 rounded-full border border-white/60 flex items-center justify-center text-white">
          <Plus size={18} />
        </div>
      </div>
    </motion.div>
  )
}

export default function PortfolioSection() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })

  return (
    <section id="portfolio" className="py-28 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={titleRef}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div>
            <p className="text-gold text-xs tracking-[0.35em] uppercase font-sans font-medium mb-4">
              Our Portfolio
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground font-light text-balance leading-tight">
              Moments We&apos;ve{' '}
              <span className="italic text-gold">Crafted</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-xs leading-relaxed text-sm text-pretty md:text-right">
            A glimpse into the unforgettable experiences we&apos;ve had the
            privilege to create.
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[16rem]">
          {galleryItems.map((item, i) => (
            <GalleryItem key={item.alt} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
