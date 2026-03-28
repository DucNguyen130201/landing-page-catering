"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, CheckCircle2 } from "lucide-react";

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

  const features = [
    "Dịch vụ cung cấp suất ăn công nghiệp",
    "Phục vụ Tây Ninh, Long An, Bình Dương",
    "Chuyên nghiệp, cam kết chất lượng",
    "Đầy đủ giấy phép, an toàn thực phẩm"
  ];

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12"
    >
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{ y: bgY }}
      >
        <img
          src="/images/hero-bg-6.jpg"
          alt="Dịch vụ cung cấp suất ăn công nghiệp"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 px-6 max-w-4xl mx-auto w-full"
        style={{ y: textY, opacity }}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            className="text-[#6de2ff] text-sm tracking-[0.35em] uppercase font-sans font-semibold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Nhà Cung Cấp Suất Ăn Công Nghiệp
          </motion.p>

          <motion.h1
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-light leading-tight text-balance mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            Chất Lượng <span className="text-primary">Tuyệt Vời</span>, Giá Hợp Lý
          </motion.h1>
        </div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-colors"
            >
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <p className="text-white/90 text-sm md:text-base font-sans font-light">
                {feature}
              </p>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button
            onClick={() => {
              const el = document.querySelector("#cta");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-10 py-4 bg-primary text-foreground text-sm tracking-widest uppercase font-semibold rounded-full hover:bg-accent hover:text-white transition-all duration-300 cursor-pointer shadow-lg hover:shadow-primary/40 hover:scale-105"
          >
            Nhận Báo Giá
          </button>
          <button
            onClick={() => {
              const el = document.querySelector("#portfolio");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-10 py-4 border-2 border-primary text-primary text-sm tracking-widest uppercase font-semibold rounded-full hover:bg-primary hover:text-foreground transition-all duration-300 cursor-pointer hover:scale-105"
          >
            Xem Dịch Vụ
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={handleScroll}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60 hover:text-primary transition-colors cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        aria-label="Cuộn xuống"
      >
        <span className="text-xs tracking-widest uppercase font-sans">
          Khám Phá
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
