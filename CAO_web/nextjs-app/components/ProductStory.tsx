"use client";

import { motion } from "framer-motion";

export default function ProductStory() {
  return (
    <section className="py-24 md:py-32 bg-neutral-warm relative">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-emerald-dark mb-8">
            Câu chuyện Glamorosa
          </h2>
          
          <div className="w-12 h-[1px] bg-champagne mx-auto mb-12" />
          
          <p className="text-lg md:text-xl leading-relaxed text-neutral-charcoal/80 mb-8 font-light">
            Glamorosa mở ra một bản hòa ca giữa con người và vẻ đẹp phong phú của thiên nhiên – nơi mỗi sắc hoa được chắt lọc thành đường nét trang sức tinh xảo. Từ thiết kế đến chế tác, mọi chi tiết đều hướng đến một điều: tôn vinh vẻ đẹp nội tâm đang rực rỡ bên trong bạn.
          </p>

          <p className="text-lg md:text-xl leading-relaxed text-neutral-charcoal/80 font-light">
            Lấy cảm hứng từ vẻ đẹp phong phú của thiên nhiên, Glamorosa tôn vinh từng sắc thái cảm xúc qua nghệ thuật kim hoàn tinh xảo.
          </p>
          
          <div className="mt-16">
            <a href="#highlights" className="text-sm uppercase tracking-widest text-emerald font-medium border-b border-emerald pb-1 hover:text-emerald-light transition-colors">
              Khám phá thiết kế dây cổ
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
