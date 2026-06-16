import { useState } from "react";
import { X, Star, ChevronRight } from "lucide-react";
import { PROMOTION_DESTINATIONS } from "../data/content";

export function PromotionsPage({ onNavigate }) {
  const [activePromo, setActivePromo] = useState(null);
  const activeItem = PROMOTION_DESTINATIONS.find((d) => d.id === activePromo);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="relative h-64 sm:h-80 overflow-hidden">
        {/* THAY ĐỔI: Đổi đường dẫn ảnh Unsplash cũ thành /8.png */}
        <img
          src="/images/8.png"
          alt="Ưu đãi Green Park"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-primary/30" />
        <div className="absolute inset-0 flex items-end pb-10 px-4 sm:px-8">
          <div className="max-w-7xl w-full mx-auto">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">Green Park Củ Chi</p>
            <h1 className="font-['Vollkorn'] text-white text-3xl sm:text-5xl font-semibold">Chương Trình Ưu Đãi</h1>
            <p className="text-white/70 mt-2 text-sm sm:text-base">Tối ưu chi phí — nhân đôi trải nghiệm</p>
          </div>
        </div>
      </div>

      {/* Promo cards */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-8">
        {PROMOTION_DESTINATIONS.map((promo, idx) => (
          <div
            key={promo.id}
            className={`relative bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col ${
              idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Image */}
            <div className="md:w-2/5 overflow-hidden h-56 md:h-auto shrink-0">
              <img
                src={promo.image}
                alt={promo.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
              <div>
                <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${promo.categoryColor}`}>
                  {promo.categoryLabel}
                </span>
                <h2 className="font-['Vollkorn'] text-foreground text-xl sm:text-2xl mb-2 leading-snug">
                  {promo.title}
                </h2>
                <p className="text-sm text-accent italic mb-4">{promo.subtitle}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{promo.excerpt}</p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                {promo.price && (
                  <div className="bg-primary/10 rounded-xl px-4 py-2.5">
                    <p className="text-xs text-muted-foreground">Mức giá</p>
                    <p className="font-['Vollkorn'] text-primary font-semibold">{promo.price}</p>
                  </div>
                )}
                <button
                  onClick={() => onNavigate("detail", promo.id)}
                  className="flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
                >
                  Khám phá ngay
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Star badge */}
            <div className="absolute top-4 right-4 bg-accent rounded-full w-9 h-9 flex items-center justify-center shadow-md">
              <Star className="w-4 h-4 text-accent-foreground fill-current" />
            </div>
          </div>
        ))}
      </div>

      {/* Price table */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
          <div className="bg-primary px-6 py-4">
            <h3 className="font-['Vollkorn'] text-primary-foreground text-xl">Bảng giá tham khảo nhanh</h3>
          </div>
          <div className="divide-y divide-border">
            {[
              { label: "Vé vào cổng phổ thông", price: "60.000 – 70.000 VNĐ/khách", note: "Miễn phí cho bé dưới 2 tuổi" },
              { label: "Ao bắt cá + nướng tại chỗ", price: "395.000 VNĐ/ao", note: "3–5 người/ao, dụng cụ đầy đủ" },
              { label: "Thuê trang phục bà ba", price: "30.000 VNĐ/bộ", note: "" },
              { label: "Phân khu Suối Thơ (check-in)", price: "35.000 VNĐ/lượt", note: "" },
              { label: "Hồ bơi trẻ em", price: "25.000 VNĐ/lượt", note: "An toàn cho học sinh" },
              { label: "Thuê thuyền dạo hồ", price: "50.000 VNĐ/chiếc", note: "3–5 khách/chiếc" },
              { label: "Tour học đường (nửa ngày)", price: "270.000 VNĐ/HS", note: "Bao gồm xe, HDV, bảo hiểm" },
              { label: "Tour học đường (cả ngày)", price: "325.000 VNĐ/HS", note: "Thêm bữa trưa & MC sự kiện" },
            ].map((row, i) => (
              <div key={i} className="flex justify-between items-center px-6 py-3.5">
                <div>
                  <p className="text-sm font-medium text-foreground">{row.label}</p>
                  {row.note && <p className="text-xs text-muted-foreground">{row.note}</p>}
                </div>
                <p className="text-sm font-semibold text-primary shrink-0 ml-4">{row.price}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => onNavigate("contact")}
            className="bg-accent text-accent-foreground font-semibold px-10 py-3.5 rounded-xl hover:brightness-95 transition-all shadow-md"
          >
            Liên hệ đặt chỗ ngay
          </button>
        </div>
      </div>

      {/* Detail modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto"
          onClick={() => setActivePromo(null)}
        >
          <div
            className="bg-card max-w-xl w-full rounded-2xl shadow-2xl overflow-hidden my-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img src={activeItem.image} alt={activeItem.title} className="w-full h-56 object-cover" />
              <button
                onClick={() => setActivePromo(null)}
                className="absolute top-3 right-3 bg-black/50 text-white rounded-full p-1.5"
              >
                <X className="w-4 h-4" />
              </button>
              <span className={`absolute bottom-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${activeItem.categoryColor}`}>
                {activeItem.categoryLabel}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-['Vollkorn'] text-foreground text-xl mb-2">{activeItem.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{activeItem.excerpt}</p>
              <ul className="space-y-2 mb-5">
                {activeItem.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                    <Star className="w-3.5 h-3.5 text-accent fill-current shrink-0 mt-0.5" />
                    {h}
                  </li>
                ))}
              </ul>
              {activeItem.note && (
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-3 text-xs text-foreground/70 mb-4">
                  {activeItem.note}
                </div>
              )}
              {activeItem.price && (
                <div className="bg-primary text-primary-foreground rounded-xl p-4 text-center mb-4">
                  <p className="text-xs opacity-70">Mức giá</p>
                  <p className="font-['Vollkorn'] text-xl text-accent font-semibold">{activeItem.price}</p>
                </div>
              )}
              <button
                onClick={() => { setActivePromo(null); onNavigate("contact"); }}
                className="w-full bg-accent text-accent-foreground font-semibold py-3 rounded-xl hover:brightness-95 transition-all"
              >
                Liên hệ đặt chỗ ngay
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}