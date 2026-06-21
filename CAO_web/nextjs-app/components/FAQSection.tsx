"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Thời gian đặt & nhận sản phẩm là bao lâu?",
    a: "Với các mẫu có sẵn, CAO hỗ trợ giao hoặc xem tại boutique ngay trong ngày. Đối với các yêu cầu tùy chỉnh độ dài hay thay đổi loại đá, thời gian chế tác dự kiến từ 7 - 14 ngày làm việc."
  },
  {
    q: "Chính sách bảo hành và làm mới áp dụng như thế nào?",
    a: "CAO áp dụng chính sách bảo hành, làm sạch và làm mới trang sức miễn phí trọn đời cho các dòng sản phẩm fine jewellery."
  },
  {
    q: "Chính sách thu đổi áp dụng như thế nào?",
    a: "CAO áp dụng chế độ thu đổi linh hoạt riêng cho từng dòng sản phẩm. Vui lòng xem chi tiết tại trang Chế độ thu đổi trên website hoặc liên hệ tư vấn viên."
  },
  {
    q: "Tôi có thể yêu cầu khắc tên hoặc lời nhắn riêng không?",
    a: "Hoàn toàn có thể. Với dây cổ Glamorosa, nghệ nhân của CAO có thể chạm khắc lazer những thông điệp tinh tế ở vị trí kín đáo theo yêu cầu."
  }
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-neutral-warm/20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-serif text-emerald-dark text-center mb-12">Câu Hỏi Thường Gặp</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-neutral-charcoal/10 pb-4">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex justify-between items-center py-4 text-left font-serif text-lg text-emerald focus:outline-none"
              >
                {faq.q}
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openIdx === idx ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-4 text-neutral-charcoal/70 font-light leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
