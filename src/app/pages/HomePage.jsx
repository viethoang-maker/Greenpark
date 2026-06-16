import { useState } from "react";
import { ChevronDown, MapPin, Clock, Ticket } from "lucide-react";
import { TravelCard } from "../components/TravelCard";
import { DESTINATIONS, CATEGORIES } from "../data/content";

// Đã xóa hoàn toàn khối interface HomePageProps của TypeScript tại đây

const FILTER_CATEGORIES = [
  { id: "all", label: "Tất cả" },
  { id: "activity", label: "Hoạt động" },
  { id: "food", label: "Ẩm thực" },
  { id: "promotion", label: "Ưu đãi" },
];

export function HomePage({ onNavigate }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? DESTINATIONS
      : DESTINATIONS.filter((d) => d.type === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        {/* THAY ĐỔI: Đổi đường dẫn ảnh Unsplash cũ thành /3.png */}
        <img
          src="/images/3.png"
          alt="Cánh đồng lúa xanh Củ Chi"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />

        {/* Decorative grain texture overlay */}
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")" }}
        />

        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-8">
          <span className="inline-block bg-accent/20 backdrop-blur-sm border border-accent/50 text-accent text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
            Nông Trại Sinh Thái · Củ Chi · TP.HCM
          </span>
          <h1
            className="font-['Vollkorn'] text-white text-4xl sm:text-6xl md:text-7xl font-semibold max-w-4xl leading-tight mb-6"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}
          >
            Hành Trình Về Miền Đất Xanh Củ Chi
          </h1>
          <p className="text-white/85 text-base sm:text-xl max-w-2xl leading-relaxed mb-10">
            Nơi hạt ngọc nảy mầm và những đôi tay viết nên câu chuyện lớn khôn — ốc đảo sinh thái cách phố chỉ 25km.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => onNavigate("activities")}
              className="bg-accent text-accent-foreground font-semibold px-8 py-3.5 rounded-xl hover:brightness-95 transition-all shadow-lg"
            >
              Khám Phá Hoạt Động
            </button>
            <button
              onClick={() => onNavigate("map")}
              className="bg-white/15 backdrop-blur-sm border border-white/40 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/25 transition-all"
            >
              Xem Tọa Lạc
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <ChevronDown className="w-6 h-6 text-white/60" />
        </div>
      </section>

      {/* Info strip */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-accent shrink-0" />
            <div>
              <p className="font-semibold">Giờ mở cửa</p>
              <p className="text-primary-foreground/70">07:30 – 18:00 (Hàng ngày)</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Ticket className="w-5 h-5 text-accent shrink-0" />
            <div>
              <p className="font-semibold">Vé vào cổng</p>
              <p className="text-primary-foreground/70">Từ 60.000 – 70.000 VNĐ</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-accent shrink-0" />
            <div>
              <p className="font-semibold">Vị trí</p>
              <p className="text-primary-foreground/70">Xã Phú Hòa Đông, Củ Chi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-3 block">Về chúng tôi</span>
            <h2 className="font-['Vollkorn'] text-foreground mb-5 text-3xl sm:text-4xl leading-tight">
              Củ Chi – Mảnh Đất Thép Kiên Cường Bên Dòng Kênh Rạch Hiền Hòa
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Green Park là bản giao hương của những cánh đồng lúa nước trĩu hạt, của bóng mát nón lá nghiêng che và của nền nông nghiệp di sản được gìn giữ qua bao thế hệ.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Đây là nơi lý tưởng để các bạn nhỏ được trực tiếp lội bùn, cấy lúa, tát mương bắt cá — những trải nghiệm mang giá trị cảm xúc vượt trội hơn bất kỳ bảo tàng hay công viên nhân tạo nào.
            </p>
            <button
              onClick={() => onNavigate("activities")}
              className="bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:brightness-110 transition-all"
            >
              Xem tất cả hoạt động
            </button>
          </div>
          <div className="relative">
            {/* THAY ĐỔI: Đổi đường dẫn ảnh minh họa giới thiệu thành /4.png */}
            <img
              src="/images/4.png"
              alt="Nông trại sinh thái xanh"
              className="w-full h-80 sm:h-96 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-4 py-3 rounded-xl shadow-lg">
              <p className="text-xs font-semibold">Cách trung tâm</p>
              <p className="font-['Vollkorn'] text-xl font-semibold">25 km</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter + Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <div className="text-center mb-8">
          <h2 className="font-['Vollkorn'] text-foreground text-3xl mb-2">Khám Phá Green Park</h2>
          <p className="text-muted-foreground">9 điểm đến, 5 phân loại trải nghiệm độc đáo</p>
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {FILTER_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                activeFilter === cat.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card border border-border text-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((dest) => (
            <TravelCard
              key={dest.id}
              image={dest.image}
              category={dest.categoryLabel}
              categoryColor={dest.categoryColor}
              title={dest.title}
              excerpt={dest.excerpt}
              note={dest.note || undefined}
              onClick={() => onNavigate("detail", dest.id)}
            />
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 text-center">
          <h2 className="font-['Vollkorn'] text-primary-foreground text-3xl sm:text-4xl mb-4">
            Sẵn sàng đưa con về miền xanh?
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
            Liên hệ ngay hôm nay để đặt chỗ và nhận tư vấn chương trình phù hợp nhất cho gia đình hoặc nhóm trường học của bạn.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => onNavigate("contact")}
              className="bg-accent text-accent-foreground font-semibold px-8 py-3.5 rounded-xl hover:brightness-95 transition-all"
            >
              Liên hệ ngay
            </button>
            <button
              onClick={() => onNavigate("promotions")}
              className="bg-white/10 border border-white/30 text-primary-foreground font-semibold px-8 py-3.5 rounded-xl hover:bg-white/20 transition-all"
            >
              Xem ưu đãi
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}