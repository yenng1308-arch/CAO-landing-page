"use client";

export default function Footer() {
  return (
    <footer className="bg-emerald-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 border-b border-white/20 pb-12 mb-8">
          <div>
            <h3 className="font-serif text-2xl tracking-widest text-champagne mb-6">CAO FINE JEWELLERY</h3>
            <p className="font-light opacity-80 mb-4 max-w-sm">
              Khởi nguồn từ di sản kim hoàn Việt. Thương hiệu trang sức cao cấp mang nét tinh tế giao thoa.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-sm tracking-widest uppercase mb-6 text-champagne">Liên Hệ</h4>
            <ul className="space-y-3 font-light opacity-80">
              <li>Hotline: 1800 1234</li>
              <li>Email: contact@caofinejewellery.com.vn</li>
              <li>Zalo: CAO Fine Jewellery Official</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-sm tracking-widest uppercase mb-6 text-champagne">Chính Sách</h4>
            <ul className="space-y-3 font-light opacity-80">
              <li><a href="#" className="hover:text-champagne transition-colors">Điều khoản bảo hành</a></li>
              <li><a href="#" className="hover:text-champagne transition-colors">Chế độ thu đổi</a></li>
              <li><a href="#" className="hover:text-champagne transition-colors">Chính sách bảo mật</a></li>
            </ul>
          </div>
        </div>
        
        <div className="text-center font-light text-sm opacity-60">
          <p>&copy; {new Date().getFullYear()} CAO Fine Jewellery. All rights reserved.</p>
        </div>
      </div>
      
      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-neutral-warm md:hidden z-50 flex gap-2 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
        <a href="#consultation" className="flex-1 bg-emerald text-white text-center py-3 text-sm font-medium">Đặt lịch tư vấn</a>
        <a href="#" className="w-12 bg-champagne text-emerald-dark flex items-center justify-center">
          <span className="sr-only">Zalo</span>
          {/* Zalo Icon Placeholder */}
          <div className="w-6 h-6 bg-emerald-dark/20 rounded-full" />
        </a>
      </div>
    </footer>
  );
}
