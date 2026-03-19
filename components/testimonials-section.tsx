'use client'

import { useRef, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'The Caterers turned our wedding reception into a culinary masterpiece. Every guest was still talking about the food weeks later. Truly exceptional service from start to finish.',
    author: 'Sophia & James Laurent',
    role: 'Wedding Clients — Château des Lumières',
    initials: 'SJ',
  },
  {
    quote:
      "We've hosted our annual gala with The Caterers for three consecutive years. Their attention to detail, seasonal menus, and flawless execution make them irreplaceable partners.",
    author: 'Marcus Chen',
    role: 'CEO, Luminary Group',
    initials: 'MC',
  },
  {
    quote:
      'From the first tasting to the final dessert, everything was perfect. The team was professional, warm, and incredibly talented. Our guests were absolutely delighted.',
    author: 'Isabella Fontaine',
    role: 'Private Dining Client',
    initials: 'IF',
  },
  {
    quote:
      'We hosted a product launch dinner for 120 guests and the feedback was unanimous — the finest catering experience anyone had encountered. Impeccable presentation and flavour.',
    author: 'Olivier Beaumont',
    role: 'Head of Events, Maison Éclat',
    initials: 'OB',
  },
]

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })

  return (
    <section id="testimonials" className="py-28 px-6 bg-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={titleRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-gold text-xs tracking-[0.35em] uppercase font-sans font-medium mb-4">
            Kind Words
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-light text-balance leading-tight">
            What Our Clients{' '}
            <span className="italic text-gold">Say</span>
          </h2>
        </motion.div>

        {/* Slider */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10"
              >
                <Quote className="text-gold mb-6" size={28} />
                <blockquote className="font-serif text-lg text-white/85 font-light leading-relaxed mb-8 italic text-pretty">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold text-xs font-serif font-medium">
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-sans text-sm font-medium">
                      {t.author}
                    </p>
                    <p className="text-white/50 text-xs mt-0.5">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <button
            onClick={scrollPrev}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:border-gold hover:text-gold transition-colors duration-300 cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollNext}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:border-gold hover:text-gold transition-colors duration-300 cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
