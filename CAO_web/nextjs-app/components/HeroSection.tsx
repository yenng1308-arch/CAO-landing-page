"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-emerald text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/30 z-10" />
        {/* Placeholder cho background hình dây cổ trên nền tối sang trọng */}
        <div className="w-full h-full bg-[url('https://cdn.hstatic.net/themes/200000624013/1001449577/14/home_slider_image_1.jpg?v=458')] bg-cover bg-center" />
      </div>
      
      <div className="relative z-20 container mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-sm uppercase tracking-[0.2em] mb-4 text-champagne-light"
        >
          Fine Jewellery từ CAO
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif mb-6"
        >
          DÂY CỔ GLAMOROSA
          <span className="block text-3xl md:text-5xl mt-4 italic text-champagne">
            Mỗi sắc hoa, một dấu ấn kết nối
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg md:text-xl font-light opacity-90 mb-10"
        >
          Một tác phẩm fine jewellery tôn vinh vẻ đẹp ngàn hoa và hành trình của riêng bạn.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#consultation"
            className="px-8 py-4 bg-champagne text-emerald-dark font-medium tracking-wide hover:bg-champagne-light transition-colors w-full sm:w-auto"
          >
            Đặt lịch tư vấn riêng
          </a>
          <a
            href="#gallery"
            className="px-8 py-4 border border-white/30 hover:border-white transition-colors w-full sm:w-auto"
          >
            Xem chi tiết dây cổ
          </a>
        </motion.div>
      </div>
    </section>
  );
}
