import { useState } from "react";
import { MapPin, Navigation, Clock, Car, Bike, ExternalLink } from "lucide-react";

// Đã xóa hoàn toàn khối interface MapPageProps của TypeScript tại đây

const MARKERS = [
  {
    id: "entrance",
    name: "Cổng chính Green Park (83/13)",
    category: "Cổng vào",
    x: 48,
    y: 45,
    color: "#2D5A0F",
  },
  {
    id: "cafe",
    name: "Tiệm Cà Phê Bình Yên (83/21)",
    category: "Dịch vụ",
    x: 65,
    y: 58,
    color: "#8B6914",
  },
  {
    id: "eco-farm",
    name: "Phân khu Nông trại Sinh thái",
    category: "Hoạt động",
    x: 35,
    y: 35,
    color: "#2D5A0F",
  },
  {
    id: "sasuke",
    name: "Phân khu Sasuke & Vận động",
    category: "Hoạt động",
    x: 55,
    y: 30,
    color: "#5B8A3C",
  },
  {
    id: "water",
    name: "Phân khu Tương tác Nước",
    category: "Hoạt động",
    x: 70,
    y: 42,
    color: "#1E6B8C",
  },
  {
    id: "workshop",
    name: "Phân khu Workshop Văn hóa",
    category: "Hoạt động",
    x: 42,
    y: 62,
    color: "#8B6914",
  },
];

const TRAVEL_ROUTES = [
  {
    icon: Car,
    label: "Xe cá nhân",
    time: "1h30 – 1h33",
    desc: "Theo QL22 hướng Tây Bắc → Nguyễn Kim Cương → số 83/13 hoặc 83/21",
  },
  {
    icon: Bike,
    label: "Xe máy",
    time: "1h15 – 1h25",
    desc: "Tương tự tuyến xe cá nhân, thuận tiện hơn tránh kẹt xe",
  },
  {
    icon: Navigation,
    label: "Theo chỉ đường Google Maps",
    time: "Tùy theo vị trí xuất phát",
    desc: "Tọa độ: 10.937°N, 106.510°E. Tìm \"Green Park Củ Chi\" trên Google Maps",
  },
];

export function MapPage({ onNavigate }) {
  // Đã bỏ phần <string | null> ở dòng dưới đây
  const [activeMarker, setActiveMarker] = useState(null);
  const active = MARKERS.find((m) => m.id === activeMarker);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      {/* THAY ĐỔI: Chuyển khối tiêu đề cũ thành khối có chứa ảnh nền /7.png đồng bộ với các trang khác */}
      <div className="relative h-64 sm:h-80 overflow-hidden">
        <img
          src="/images/7.png"
          alt="Bản đồ Green Park"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-primary/30" />
        <div className="absolute inset-0 flex items-end pb-10 px-4 sm:px-8">
          <div className="max-w-7xl w-full mx-auto">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">Tọa Lạc</p>
            <h1 className="font-['Vollkorn'] text-white text-3xl sm:text-5xl font-semibold">
              Bản Đồ Green Park Củ Chi
            </h1>
            <p className="text-white/70 mt-3 text-base max-w-2xl">
              83/13 & 83/21 Đường Nguyễn Kim Cương, Ấp 10, Xã Phú Hòa Đông, Củ Chi, TP.HCM
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Interactive map */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
              <div className="p-4 border-b border-border flex items-center justify-between">
                <h2 className="font-['Vollkorn'] text-foreground text-lg">Sơ đồ khu vực</h2>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-primary text-sm font-semibold hover:underline"
                >
                  Mở Google Maps
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* SVG map illustration */}
              <div className="relative bg-[#C8DFA8] h-80 sm:h-96 overflow-hidden">
                {/* Background terrain */}
                <svg viewBox="0 0 100 80" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
                  {/* Water/canal */}
                  <path d="M0,55 Q25,50 50,55 Q75,60 100,55 L100,80 L0,80 Z" fill="#A8D0E6" opacity="0.6"/>
                  {/* Rice fields */}
                  <rect x="5" y="10" width="25" height="20" fill="#8BC34A" opacity="0.5" rx="1"/>
                  <rect x="8" y="12" width="3" height="16" fill="#558B2F" opacity="0.3"/>
                  <rect x="14" y="12" width="3" height="16" fill="#558B2F" opacity="0.3"/>
                  <rect x="20" y="12" width="3" height="16" fill="#558B2F" opacity="0.3"/>
                  <rect x="26" y="12" width="3" height="16" fill="#558B2F" opacity="0.3"/>
                  {/* Paths */}
                  <path d="M0,45 L100,45" stroke="#D4A017" strokeWidth="1" strokeDasharray="3,2" opacity="0.6"/>
                  <path d="M50,0 L50,80" stroke="#D4A017" strokeWidth="0.8" strokeDasharray="3,2" opacity="0.4"/>
                  {/* Trees */}
                  {[15,30,70,85].map((x, i) => (
                    <circle key={i} cx={x} cy={20} r="4" fill="#2D5A0F" opacity="0.5"/>
                  ))}
                  {/* Label: Nguyễn Kim Cương */}
                  <text x="50" y="48" textAnchor="middle" fill="#8B6914" fontSize="3" fontWeight="600">Đường Nguyễn Kim Cương</text>
                </svg>

                {/* Markers */}
                {MARKERS.map((marker) => (
                  <button
                    key={marker.id}
                    onClick={() => setActiveMarker(activeMarker === marker.id ? null : marker.id)}
                    className="absolute transform -translate-x-1/2 -translate-y-full transition-all hover:scale-110"
                    style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
                  >
                    <div className="flex flex-col items-center">
                      <div
                        className="w-7 h-7 rounded-full border-2 border-white shadow-lg flex items-center justify-center"
                        style={{ backgroundColor: marker.color }}
                      >
                        <MapPin className="w-3.5 h-3.5 text-white" />
                      </div>
                      {activeMarker === marker.id && (
                        <div
                          className="absolute bottom-full mb-1 bg-white text-foreground text-xs rounded-lg shadow-lg px-2.5 py-1.5 whitespace-nowrap max-w-40 text-center border border-border z-10"
                        >
                          <p className="font-semibold text-xs">{marker.name}</p>
                          <p className="text-muted-foreground" style={{ fontSize: "10px" }}>{marker.category}</p>
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* Legend */}
              <div className="p-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
                {MARKERS.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setActiveMarker(m.id === activeMarker ? null : m.id)}
                    className={`flex items-center gap-2 text-xs p-2 rounded-lg transition-colors ${
                      activeMarker === m.id ? "bg-muted" : "hover:bg-muted/50"
                    }`}
                  >
                    <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: m.color }} />
                    <span className="text-foreground/80 text-left">{m.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Travel info */}
          <div className="space-y-4">
            <div className="bg-card rounded-2xl border border-border p-5">
              <h3 className="font-['Vollkorn'] text-foreground text-lg mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                Giờ tham quan
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Khu dã ngoại</span>
                  <span className="font-semibold text-foreground">07:30 – 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tiệm cà phê</span>
                  <span className="font-semibold text-foreground">07:00 – 21:30</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Ngày mở cửa</span>
                  <span className="font-semibold text-foreground">Thứ 2 – CN</span>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl border border-border p-5">
              <h3 className="font-['Vollkorn'] text-foreground text-lg mb-4 flex items-center gap-2">
                <Navigation className="w-4 h-4 text-primary" />
                Gợi ý di chuyển
              </h3>
              <div className="space-y-4">
                {TRAVEL_ROUTES.map((route, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <route.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{route.label}</p>
                      <p className="text-xs text-accent font-medium">{route.time}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{route.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary rounded-2xl p-5 text-primary-foreground">
              <p className="text-sm font-semibold text-accent mb-2">Thời điểm lý tưởng</p>
              <p className="text-sm text-primary-foreground/80">
                Sáng Chủ nhật, đến sớm trước 8h để có trải nghiệm tốt nhất và tránh đông đúc.
              </p>
            </div>

            <button
              onClick={() => onNavigate("contact")}
              className="w-full bg-accent text-accent-foreground font-semibold py-3 rounded-xl hover:brightness-95 transition-all"
            >
              Đặt chỗ trước
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}