import { useState } from "react";
import { X, Info } from "lucide-react";

export function FoodPage({ onNavigate, destinations = [] }) {
  const [modalOpen, setModalOpen] = useState(null);
  
  // Trích lọc mảng động ẩm thực
  const foodDestinations = destinations.filter((d) => d.type === "food");
  const activeItem = foodDestinations.find((d) => d.id === modalOpen);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="relative h-64 sm:h-80 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1641440615059-42c8ed3af8c8?w=1400&h=500&fit=crop&auto=format"
          alt="Ẩm thực Green Park"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-primary/30" />
        <div className="absolute inset-0 flex items-end pb-10 px-4 sm:px-8">
          <div className="max-w-7xl w-full mx-auto">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">Green Park Củ Chi</p>
            <h1 className="font-['Vollkorn'] text-white text-3xl sm:text-5xl font-semibold">Ẩm Thực</h1>
            <p className="text-white/70 mt-2 text-sm sm:text-base">Hương vị đồng quê thuần túy miền Nam Bộ</p>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 pb-6 text-center">
        <h2 className="font-['Vollkorn'] text-foreground text-2xl sm:text-3xl mb-4">
          Thực đơn dân dã mang hồn quê hương
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Nhấp vào hình ảnh để khám phá thông tin chi tiết về từng món ăn đặc sản tại Green Park Củ Chi.
        </p>
      </div>

      {/* Zigzag layout */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
        {foodDestinations.map((item, idx) => (
          <div
            key={item.id}
            className={`flex flex-col ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center mb-16`}
          >
            {/* Image */}
            <div
              className="relative w-full md:w-1/2 cursor-pointer group"
              onClick={() => setModalOpen(item.id)}
            >
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl bg-black/30">
                <div className="bg-white/90 text-primary font-semibold text-sm px-4 py-2 rounded-full flex items-center gap-2">
                  <Info className="w-4 h-4" />
                  Xem chi tiết
                </div>
              </div>
              <span className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full ${item.categoryColor}`}>
                {item.categoryLabel}
              </span>
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2">
              <h3 className="font-['Vollkorn'] text-foreground text-xl sm:text-2xl mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-accent font-medium italic mb-4">{item.subtitle}</p>
              <p className="text-muted-foreground leading-relaxed mb-5">{item.excerpt}</p>
              <ul className="space-y-2 mb-6">
                {Array.isArray(item.highlights) && item.highlights.slice(0, 3).map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setModalOpen(item.id)}
                className="bg-accent text-accent-foreground font-semibold px-5 py-2.5 rounded-xl text-sm hover:brightness-95 transition-all"
              >
                Khám phá ngay
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-secondary py-10 text-center px-4">
        <h3 className="font-['Vollkorn'] text-foreground text-xl mb-3">Muốn thưởng thức trực tiếp?</h3>
        <p className="text-muted-foreground text-sm mb-5">Đặt chỗ ngay và không bỏ lỡ những hương vị đồng quê độc đáo này.</p>
        <button
          onClick={() => onNavigate("contact")}
          className="bg-primary text-primary-foreground font-semibold px-8 py-3 shadow-md hover:brightness-110 transition-all"
        >
          Liên hệ đặt chỗ
        </button>
      </div>

      {/* Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          onClick={() => setModalOpen(null)}
        >
          <div
            className="bg-card max-w-lg w-full rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img src={activeItem.image} alt={activeItem.title} className="w-full h-52 object-cover" />
              <button
                onClick={() => setModalOpen(null)}
                className="absolute top-3 right-3 bg-black/50 text-white rounded-full p-1.5 hover:bg-black/70 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <span className={`absolute bottom-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${activeItem.categoryColor}`}>
                {activeItem.categoryLabel}
              </span>
            </div>
            <div className="p-6 text-sm">
              <h3 className="font-['Vollkorn'] text-foreground text-lg mb-2 font-semibold">{activeItem.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{activeItem.excerpt}</p>
              {activeItem.note && (
                <div className="bg-accent/10 border border-accent/30 rounded-lg p-3 text-xs text-foreground/70 mb-4">
                  <strong>Lưu ý:</strong> {activeItem.note}
                </div>
              )}
              <button
                onClick={() => { setModalOpen(null); onNavigate("detail", activeItem.id); }}
                className="w-full bg-primary text-primary-foreground font-semibold py-2.5 rounded-xl hover:brightness-110 transition-all shadow-sm"
              >
                Xem bài viết đầy đủ
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}