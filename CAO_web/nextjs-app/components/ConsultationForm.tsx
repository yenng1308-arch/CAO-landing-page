"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [orderInfo, setOrderInfo] = useState<{orderId: string, amount: string} | null>(null);
  const [countdown, setCountdown] = useState(30);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (submitted && !paymentConfirmed && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [submitted, paymentConfirmed, countdown]);

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

    const generatedOrderId = "AI" + Math.floor(1000000000 + Math.random() * 9000000000).toString();
    const fixedAmount = "19.000đ";

    const data = {
      name: fullname,
      phone: phone,
      email: email,
      payment: "Chưa thanh toán",
      sendEmail: "Chờ gửi",
      sendZalo: contactChannel === "Zalo" ? "Cần gửi Zalo" : "Chờ gửi",
      note: mergedNote,
      orderId: generatedOrderId,
      amount: fixedAmount
    };

    // URL Apps Script Web App của bạn
    const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL || "https://script.google.com/macros/s/AKfycby7s63-QdXDGv_Ow_2MQ5A_TOSiv01ygYH654fpafcCs84rJNF0EXq3iJCh2BE4Fqc/exec";

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

      setOrderInfo({ orderId: generatedOrderId, amount: fixedAmount });
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
            {!paymentConfirmed ? (
              <>
                <h3 className="text-2xl font-serif text-emerald mb-4">Thanh Toán Đơn Hàng</h3>
                <p className="text-neutral-charcoal/80 mb-6">Vui lòng quét mã QR dưới đây để hoàn tất thanh toán.</p>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-champagne/50 inline-block text-left mx-auto mb-6 max-w-sm w-full text-center">
                  <img src="https://printgo.vn/uploads/media/790919/tao-ma-qr-code-san-pham-1_1620927223.jpg" alt="Mã QR Thanh Toán" className="mx-auto mb-4 w-full h-auto object-cover rounded" />
                  {orderInfo && (
                    <>
                      <p className="text-neutral-charcoal mb-2 text-left"><span className="font-semibold">Mã đơn hàng:</span> <span className="text-emerald font-mono text-lg">{orderInfo.orderId}</span></p>
                      <p className="text-neutral-charcoal text-left"><span className="font-semibold">Số tiền:</span> <span className="text-emerald font-bold text-lg">{orderInfo.amount}</span></p>
                    </>
                  )}
                  <p className="text-sm text-neutral-charcoal/70 mt-4 italic">* Vui lòng ghi chú mã đơn hàng khi chuyển khoản.</p>
                </div>

                <div className="mt-4">
                  {countdown > 0 ? (
                    <p className="text-neutral-charcoal/80 font-medium">Đang chờ hệ thống tự động xác thực... ({countdown}s)</p>
                  ) : (
                    <button 
                      onClick={() => setPaymentConfirmed(true)}
                      className="px-8 py-3 bg-emerald text-white font-medium tracking-wide hover:bg-emerald-light transition-colors rounded">
                      Xác nhận đã chuyển khoản
                    </button>
                  )}
                </div>
              </>
            ) : (
              <>
                <h3 className="text-2xl font-serif text-emerald mb-4">Xác Nhận Thành Công</h3>
                <p className="text-neutral-charcoal/80 mb-6">Cảm ơn bạn đã thanh toán. Đội ngũ CAO sẽ sớm liên hệ để hỗ trợ bạn.</p>
                <a href="https://zalo.me/g/sdczb5ehiqm9tyimg1th" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-[#0068FF] text-white font-medium tracking-wide hover:bg-[#0052CC] transition-colors rounded shadow">
                  Tham gia Group Zalo Hỗ Trợ
                </a>
              </>
            )}
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
