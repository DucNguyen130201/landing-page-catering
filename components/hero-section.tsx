"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// useScroll without a target reads window scroll — no position requirement
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], ["0%", "30%"]);
  const textY = useTransform(scrollY, [0, 600], ["0%", "15%"]);
  const opacity = useTransform(scrollY, [0, 480], [1, 0]);

  const handleScroll = () => {
    const el = document.querySelector("#services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{ y: bgY }}
      >
        <img
          src="/images/hero-bg-5.jpg"
          alt="Luxury catering event"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0 
        bg-charcoal/55
        opacity-50
        backdrop-blur-lg
        backdrop-brightness-20
        "
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        style={{ y: textY, opacity }}
      >
        <motion.p
          className="text-primary text-sm tracking-[0.35em] uppercase font-sans font-medium mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Professional Industrial Catering
        </motion.p>

        <motion.h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-light leading-tight text-balance mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          Quality Meals for{" "}
          <span className="italic text-primary">Corporate Teams</span>
        </motion.h1>

        <motion.p
          className="text-white/75 text-lg md:text-xl font-sans font-light leading-relaxed max-w-2xl mx-auto mb-12 text-pretty"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Professional catering solutions for companies across Vietnam. We
          provide reliable, nutritious meals for employee dining, corporate
          events, and conference catering.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <button
            onClick={() => {
              const el = document.querySelector("#cta");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-10 py-4 bg-primary text-blue-gray text-sm tracking-widest uppercase font-medium rounded-full hover:bg-primary/80 hover:text-white transition-all duration-300 cursor-pointer shadow-lg hover:shadow-primary/30 hover:scale-105"
          >
            Get A Quote
          </button>
          <button
            onClick={() => {
              const el = document.querySelector("#portfolio");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-10 py-4 border border-white/60 text-white text-sm tracking-widest uppercase font-medium rounded-full hover:border-primary hover:text-primary transition-all duration-300 cursor-pointer hover:scale-105"
          >
            View Services
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={handleScroll}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60 hover:text-primary transition-colors cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase font-sans">
          Discover
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
}
