"use client";

import { motion } from "framer-motion";

export default function Craftsmanship() {
  return (
    <section className="py-24 bg-emerald text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1 space-y-8"
          >
            <div>
              <h2 className="text-3xl font-serif text-champagne-light mb-4">Tay Nghề Kim Hoàn Đỉnh Cao</h2>
              <div className="w-12 h-[1px] bg-champagne" />
            </div>
            
            <p className="text-lg font-light leading-relaxed opacity-90">
              Thuộc top nghệ nhân kim hoàn hàng đầu Việt Nam, đội ngũ CAO cần mẫn trong từng công đoạn: từ phác thảo cánh hoa, đính từng viên đá đến đánh bóng từng đường cong dây cổ.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/20">
              <div>
                <h4 className="text-champagne font-serif text-xl mb-2">Vàng 18K</h4>
                <p className="text-sm font-light opacity-80">Chất liệu cao cấp, tạo độ phản quang rực rỡ và bền bỉ.</p>
              </div>
              <div>
                <h4 className="text-champagne font-serif text-xl mb-2">Đá Quý Tinh Tuyển</h4>
                <p className="text-sm font-light opacity-80">Tuyển chọn gắt gao theo tiêu chuẩn khắt khe, chứng nhận quốc tế.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2 aspect-[4/3] bg-neutral-charcoal relative rounded-sm overflow-hidden"
          >
             {/* Placeholder ảnh craftsmanship */}
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589674781759-c21c37956a44?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
