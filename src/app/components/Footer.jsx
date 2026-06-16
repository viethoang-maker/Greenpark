import { Leaf, MapPin, Phone, Clock } from "lucide-react";

// Đã xóa hoàn toàn khối interface FooterProps của TypeScript tại đây

export function Footer({ onNavigate }) {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* THAY ĐỔI: Thay thế khối div chứa biểu tượng <Leaf /> cũ bằng thẻ <img> dưới đây */}
              <img src="/images/2.png" alt="Green Park Logo" className="w-9 h-9 object-contain" loading="lazy" />
              
              <div>
                <div className="font-['Vollkorn'] font-semibold text-lg">Green Park Củ Chi</div>
                <div className="text-xs text-accent/70">Nông Trại Sinh Thái</div>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Hành trình về miền đất xanh Củ Chi — nơi hạt ngọc nảy mầm và những đôi tay viết nên câu chuyện lớn khôn.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-['Vollkorn'] font-semibold text-base mb-4 text-accent">Thông Tin Liên Hệ</h4>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span>83/13 & 83/21 Đường Nguyễn Kim Cương, Ấp 10, Xã Phú Hòa Đông, Củ Chi, TP.HCM</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent shrink-0" />
                <span>07:30 – 18:00 (Thứ Hai – Chủ Nhật)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>Vĩ Thành · Saigon Star Travel</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-['Vollkorn'] font-semibold text-base mb-4 text-accent">Khám Phá</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {[
                { id: "activities", label: "Hoạt Động" },
                { id: "food", label: "Ẩm Thực" },
                { id: "map", label: "Tọa Lạc" },
                { id: "promotions", label: "Ưu Đãi" },
                { id: "contact", label: "Liên Hệ" },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className="text-left text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-primary-foreground/50">
          <span>© 2026 Be Able VN · Green Park Củ Chi. All rights reserved.</span>
          <span>Vé vào cổng từ 60.000 – 70.000 VNĐ/khách</span>
        </div>
      </div>
    </footer>
  );
}