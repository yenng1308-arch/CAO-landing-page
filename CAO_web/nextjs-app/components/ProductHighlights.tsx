"use client";

import { motion } from "framer-motion";

const highlights = [
  {
    title: "Sắc Hoa Kết Nối",
    description: "Ngôn ngữ thiết kế hoa kết nối độc đáo: mỗi chi tiết lấy cảm hứng từ vẻ đẹp ngàn hoa, tạo nên một bố cục mềm mại nhưng có trật tự, dễ nhận diện.",
  },
  {
    title: "Điểm Nhấn Ánh Sáng",
    description: "Đường cong dây cổ ôm nhẹ theo dáng cổ, mỗi cụm hoa là một khoảnh khắc ánh sáng khác nhau – tựa như những cảm xúc phong phú bên trong bạn.",
  },
  {
    title: "Chất Liệu Tinh Tuyển",
    description: "Chế tác từ vàng 18K và đá quý tinh tuyển, bảo chứng cho chất lượng và giá trị thẩm mỹ bền vững qua năm tháng.",
  }
];

export default function ProductHighlights() {
  return (
    <section id="highlights" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/5] bg-neutral-warm relative rounded-sm overflow-hidden"
          >
            {/* Ảnh thiết kế chất liệu tinh tuyển */}
            <div className="absolute inset-0 bg-[url('https://cdn.hstatic.net/themes/200000624013/1001449577/14/home_about_img.jpg?v=458')] bg-cover bg-center" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-serif text-emerald-dark mb-4">Điểm Nhấn Thiết Kế</h2>
              <div className="w-12 h-[1px] bg-champagne" />
            </div>

            <div className="space-y-8">
              {highlights.map((item, index) => (
                <div key={index}>
                  <h3 className="text-xl font-serif text-emerald mb-2">{item.title}</h3>
                  <p className="text-neutral-charcoal/70 leading-relaxed font-light">{item.description}</p>
                </div>
              ))}
            </div>
            
            <div className="pt-4">
              <a href="#gallery" className="text-sm uppercase tracking-widest text-emerald font-medium border-b border-emerald pb-1 hover:text-emerald-light transition-colors">
                Xem tất cả góc nhìn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
