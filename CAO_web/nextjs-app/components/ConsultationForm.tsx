"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const fullname = formData.get("fullname") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const contactChannel = formData.get("contact_channel") as string;
    const preferredTime = formData.get("preferred_time") as string;
    const notes = formData.get("notes") as string;

    const mergedNote = `Kênh liên hệ: ${contactChannel}. Thời gian: ${preferredTime}.${notes ? ' Ghi chú thêm: ' + notes : ''}`;

    const data = {
      name: fullname,
      phone: phone,
      email: email,
      payment: "Chưa thanh toán",
      sendEmail: "Chờ gửi",
      sendZalo: contactChannel === "Zalo" ? "Cần gửi Zalo" : "Chờ gửi",
      note: mergedNote
    };

    // URL Apps Script Web App của bạn
    const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL || "https://script.google.com/macros/s/AKfycbxohDDtB6jcmrBfdXkJXgl1nK5HmGG86fgSOlmLSzi3GCJrAeDbaknNfT9_kZ6-sukn/exec";

    try {
      // Sử dụng mode: "no-cors" và text/plain để tránh preflight OPTIONS từ trình duyệt
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(data),
      });

      setSubmitted(true);
    } catch (error) {
      console.error("Lỗi gửi dữ liệu:", error);
      setErrorMsg("Có lỗi xảy ra khi gửi thông tin. Vui lòng thử lại!");
    } finally {
      setIsSubmitting(false);
    }
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
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-emerald-dark mb-2">Họ & Tên</label>
                <input name="fullname" required type="text" className="w-full p-4 bg-neutral-warm border border-transparent focus:border-champagne outline-none transition-colors" placeholder="Nguyễn Văn A" />
              </div>
              <div>
                <label className="block text-sm font-medium text-emerald-dark mb-2">Số điện thoại</label>
                <input name="phone" required type="tel" className="w-full p-4 bg-neutral-warm border border-transparent focus:border-champagne outline-none transition-colors" placeholder="0901234567" />
              </div>
              <div>
                <label className="block text-sm font-medium text-emerald-dark mb-2">Email</label>
                <input name="email" required type="email" className="w-full p-4 bg-neutral-warm border border-transparent focus:border-champagne outline-none transition-colors" placeholder="nguyenvana@gmail.com" />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-emerald-dark mb-2">Kênh liên hệ mong muốn</label>
                <select name="contact_channel" className="w-full p-4 bg-neutral-warm border border-transparent focus:border-champagne outline-none transition-colors">
                  <option>Gọi điện trực tiếp</option>
                  <option>Zalo</option>
                  <option>Tại Boutique</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-emerald-dark mb-2">Thời gian phù hợp</label>
                <select name="preferred_time" className="w-full p-4 bg-neutral-warm border border-transparent focus:border-champagne outline-none transition-colors">
                  <option>Sáng (09:00 - 12:00)</option>
                  <option>Chiều (13:00 - 17:00)</option>
                  <option>Tối (18:00 - 20:00)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-emerald-dark mb-2">Ghi chú thêm (Tùy chọn)</label>
              <textarea name="notes" rows={4} className="w-full p-4 bg-neutral-warm border border-transparent focus:border-champagne outline-none transition-colors resize-none" placeholder="Dịp đặc biệt, yêu cầu riêng..."></textarea>
            </div>

            {errorMsg && (
              <p className="text-red-500 text-sm text-center">{errorMsg}</p>
            )}

            <div className="text-center pt-4">
              <button disabled={isSubmitting} type="submit" className="px-12 py-4 bg-emerald text-white font-medium tracking-wide hover:bg-emerald-light transition-colors w-full sm:w-auto disabled:opacity-50">
                {isSubmitting ? "Đang gửi..." : "Gửi Yêu Cầu Tư Vấn"}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
