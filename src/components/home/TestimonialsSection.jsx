import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Hafez Idrees delivers exceptional legal work with precision and attention to detail. Their expertise in Gulf legal matters is truly impressive.",
    name: "Ahmad Al-Rashidi",
    title: "Managing Partner",
    location: "Dubai, UAE",
  },
  {
    quote: "The quality and professionalism we receive from Hafez Idrees consistently exceeds expectations. They understand the nuances of regional legal frameworks perfectly.",
    name: "Dr. Fatima Al-Suwaidi",
    title: "Senior Legal Counsel",
    location: "Riyadh, KSA",
  },
  {
    quote: "Working with Hafez Idrees has been transformative for our practice. Their responsiveness and legal acumen are second to none.",
    name: "Mohammed Al-Thani",
    title: "Head of Corporate Affairs",
    location: "Doha, Qatar",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section ref={ref} className="relative bg-[#0a1628] py-24 lg:py-32 overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a96e]/20 to-transparent" />
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-[#c9a96e]/[0.03] blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center"
        >
          <Quote size={48} className="text-[#c9a96e]/20 mx-auto mb-8" />

          <div className="relative min-h-[200px]">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={false}
                animate={{
                  opacity: i === current ? 1 : 0,
                  y: i === current ? 0 : 20,
                }}
                transition={{ duration: 0.5 }}
                className={`${i === current ? 'relative' : 'absolute inset-0 pointer-events-none'}`}
              >
                <p className="font-serif-display text-white text-2xl lg:text-3xl xl:text-4xl leading-relaxed mb-10 italic">
                  "{t.quote}"
                </p>
                <div>
                  <p className="text-[#c9a96e] font-medium text-lg">{t.name}</p>
                  <p className="text-white/40 text-sm">{t.title}</p>
                  <p className="text-white/30 text-xs mt-1">{t.location}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Nav */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prev}
              className="w-12 h-12 border border-white/10 flex items-center justify-center hover:border-[#c9a96e] hover:text-[#c9a96e] text-white/40 transition-all"
            >
              <ChevronLeft size={18} />
            </button>
            <span className="text-white/30 text-sm">
              {String(current + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
            </span>
            <button
              onClick={next}
              className="w-12 h-12 border border-white/10 flex items-center justify-center hover:border-[#c9a96e] hover:text-[#c9a96e] text-white/40 transition-all"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}