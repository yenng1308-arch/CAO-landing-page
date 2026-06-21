"use client";

import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1000&auto=format&fit=crop"
];

export default function VisualGallery() {
  return (
    <section id="gallery" className="py-24 bg-neutral-warm/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-emerald-dark mb-4">Góc Nhìn Nghệ Thuật</h2>
          <div className="w-12 h-[1px] bg-champagne mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="aspect-square relative overflow-hidden group cursor-pointer"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url(${src})` }}
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-neutral-charcoal/70 italic font-serif mb-6">
            Mỗi góc độ đều ánh lên sự hoàn mỹ.
          </p>
          <a href="#consultation" className="text-sm uppercase tracking-widest text-emerald font-medium border-b border-emerald pb-1 hover:text-emerald-light transition-colors">
            Nhận thêm video thực tế qua Zalo
          </a>
        </div>
      </div>
    </section>
  );
}
