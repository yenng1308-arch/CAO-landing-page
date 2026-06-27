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
          Ở văn phòng, thiết kế đủ thanh lịch để đồng hành cùng sơ mi và blazer thanh lịch; trong các đêm tiệc thượng lưu, sự kết hợp với đầm dạ hội trễ vai tôn vinh trọn vẹn vẻ kiêu kỳ cùng ánh sáng lấp lánh từ những viên kim cương và đá quý tinh tuyển.
        </motion.p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="aspect-[3/4] bg-neutral-warm relative group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center" />
            <div className="absolute bottom-6 left-0 right-0 text-center z-10">
              <span className="bg-white/90 text-emerald-dark px-6 py-2 text-sm font-serif tracking-widest">BUSINESS CHIC</span>
            </div>
          </div>
          <div className="aspect-[3/4] bg-neutral-warm relative group md:translate-y-12">
            <div className="absolute inset-0 bg-[url('/images/evening-elegance.jpg')] bg-cover bg-center" />
            <div className="absolute bottom-6 left-0 right-0 text-center z-10">
              <span className="bg-white/90 text-emerald-dark px-6 py-2 text-sm font-serif tracking-widest">EVENING ELEGANCE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
