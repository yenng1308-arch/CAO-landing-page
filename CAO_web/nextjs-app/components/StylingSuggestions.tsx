"use client";

import { motion } from "framer-motion";

export default function StylingSuggestions() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl font-serif text-emerald-dark mb-4">Dấu Ấn Thanh Lịch Mọi Khoảnh Khắc</h2>
        <div className="w-12 h-[1px] bg-champagne mx-auto mb-12" />
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-lg text-neutral-charcoal/80 font-light max-w-2xl mx-auto mb-16"
        >
          Ở văn phòng, dây cổ đủ thanh lịch khi kết hợp với áo sơ mi trắng và blazer trung tính; trong tiệc tối, chỉ cần một chiếc đầm đen trễ vai là ánh sáng hoa đã đủ lên tiếng.
        </motion.p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="aspect-[3/4] bg-neutral-warm relative group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center" />
            <div className="absolute bottom-6 left-0 right-0 text-center z-10">
              <span className="bg-white/90 text-emerald-dark px-6 py-2 text-sm font-serif tracking-widest">BUSINESS CHIC</span>
            </div>
          </div>
          <div className="aspect-[3/4] bg-neutral-warm relative group md:translate-y-12">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566958769312-82cef41d19ef?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center" />
            <div className="absolute bottom-6 left-0 right-0 text-center z-10">
              <span className="bg-white/90 text-emerald-dark px-6 py-2 text-sm font-serif tracking-widest">EVENING ELEGANCE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
