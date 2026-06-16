import { TravelCard } from "../components/TravelCard";
import { ACTIVITY_DESTINATIONS } from "../data/content";

// Đã xóa hoàn toàn khối interface của TypeScript tại đây

export function ActivitiesPage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Page header */}
      <div className="relative h-64 sm:h-80 overflow-hidden">
        {/* THAY ĐỔI: Đổi đường dẫn ảnh Unsplash cũ thành /5.png */}
        <img
          src="/images/5.png"
          alt="Hoạt động tại Green Park"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-primary/30" />
        <div className="absolute inset-0 flex items-end pb-10 px-4 sm:px-8">
          <div className="max-w-7xl w-full mx-auto">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">Green Park Củ Chi</p>
            <h1 className="font-['Vollkorn'] text-white text-3xl sm:text-5xl font-semibold">Các Hoạt Động</h1>
            <p className="text-white/70 mt-2 text-sm sm:text-base">5 phân khu trải nghiệm — từ nông nghiệp đến nghệ thuật</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACTIVITY_DESTINATIONS.map((dest) => (
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

        {/* Zones overview */}
        <div className="mt-16 bg-card rounded-2xl border border-border p-8">
          <h2 className="font-['Vollkorn'] text-foreground text-2xl mb-6">5 Phân Khu Trải Nghiệm</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Phân khu Nông trại Sinh thái & Thực nghiệm", color: "bg-primary/10 border-primary/20" },
              { name: "Phân khu Trò chơi Vận động Thể chất", color: "bg-[#5B8A3C]/10 border-[#5B8A3C]/20" },
              { name: "Phân khu Kỹ năng sống & Hoạt động Nhóm", color: "bg-accent/10 border-accent/20" },
              { name: "Phân khu Bảo tồn Văn hóa & Workshop", color: "bg-[#8B6914]/10 border-[#8B6914]/20" },
              { name: "Phân khu Tương tác Nước & Giải trí", color: "bg-[#1E6B8C]/10 border-[#1E6B8C]/20" },
            ].map((zone, i) => (
              <div key={i} className={`rounded-xl border p-4 ${zone.color}`}>
                <p className="text-sm font-semibold text-foreground">{zone.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}