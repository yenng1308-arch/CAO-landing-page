"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic gửi form (API/Zalo/Email)
    setSubmitted(true);
  };

  return (
    <section id="consultation" className="py-24 bg-white border-b border-neutral-warm">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-emerald-dark mb-4">Đặt Lịch Tư Vấn Riêng</h2>
          <div className="w-12 h-[1px] bg-champagne mx-auto mb-6" />
          <p className="text-neutral-charcoal/80 font-light">
            Để lại thông tin, đội ngũ CAO sẽ liên hệ trong vòng 24 giờ để gợi ý phiên bản Glamorosa phù hợp nhất với phong cách và dịp bạn mong muốn. Không bắt buộc mua hàng.
          </p>
        </div>

        {submitted ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-8 bg-neutral-warm text-center border border-champagne/30"
          >
            <h3 className="text-2xl font-serif text-emerald mb-2">Cảm ơn bạn</h3>
            <p className="text-neutral-charcoal/80">Yêu cầu tư vấn của bạn đã được gửi thành công. Chuyên gia của CAO sẽ sớm liên hệ.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-emerald-dark mb-2">Họ & Tên</label>
                <input required type="text" className="w-full p-4 bg-neutral-warm border border-transparent focus:border-champagne outline-none transition-colors" placeholder="Nguyễn Văn A" />
              </div>
              <div>
                <label className="block text-sm font-medium text-emerald-dark mb-2">Số điện thoại</label>
                <input required type="tel" className="w-full p-4 bg-neutral-warm border border-transparent focus:border-champagne outline-none transition-colors" placeholder="0901234567" />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-emerald-dark mb-2">Kênh liên hệ mong muốn</label>
                <select className="w-full p-4 bg-neutral-warm border border-transparent focus:border-champagne outline-none transition-colors">
                  <option>Gọi điện trực tiếp</option>
                  <option>Zalo</option>
                  <option>Tại Boutique</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-emerald-dark mb-2">Thời gian phù hợp</label>
                <select className="w-full p-4 bg-neutral-warm border border-transparent focus:border-champagne outline-none transition-colors">
                  <option>Sáng (09:00 - 12:00)</option>
                  <option>Chiều (13:00 - 17:00)</option>
                  <option>Tối (18:00 - 20:00)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-emerald-dark mb-2">Ghi chú thêm (Tùy chọn)</label>
              <textarea rows={4} className="w-full p-4 bg-neutral-warm border border-transparent focus:border-champagne outline-none transition-colors resize-none" placeholder="Dịp đặc biệt, yêu cầu riêng..."></textarea>
            </div>

            <div className="text-center pt-4">
              <button type="submit" className="px-12 py-4 bg-emerald text-white font-medium tracking-wide hover:bg-emerald-light transition-colors w-full sm:w-auto">
                Gửi Yêu Cầu Tư Vấn
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
