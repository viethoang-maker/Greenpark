import { MapPin, Clock, Phone, Mail, Users, ChevronRight } from "lucide-react";

// Đã xóa hoàn toàn khối interface ContactPageProps của TypeScript tại đây

export function ContactPage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="relative h-64 sm:h-80 overflow-hidden">
        {/* THAY ĐỔI: Đổi đường dẫn ảnh Unsplash cũ thành /4.png */}
        <img
          src="/images/4.png"
          alt="Liên hệ Green Park"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-primary/30" />
        <div className="absolute inset-0 flex items-end pb-10 px-4 sm:px-8">
          <div className="max-w-7xl w-full mx-auto">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">Kết nối với chúng tôi</p>
            <h1 className="font-['Vollkorn'] text-white text-3xl sm:text-5xl font-semibold">Liên Hệ</h1>
            <p className="text-white/70 mt-2">Chúng tôi luôn sẵn sàng hỗ trợ bạn</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <div>
            <h2 className="font-['Vollkorn'] text-foreground text-2xl mb-6">Thông Tin Liên Hệ</h2>
            <div className="space-y-5 mb-8">
              {[
                {
                  icon: MapPin,
                  title: "Địa chỉ",
                  content: "83/13 & 83/21, Đường Nguyễn Kim Cương, Ấp 10, Xã Phú Hòa Đông, Củ Chi, TP.HCM",
                  sub: "(Theo Nghị quyết số 1685/NQ-UBTVQH15)",
                },
                {
                  icon: Clock,
                  title: "Giờ mở cửa",
                  content: "07:30 – 18:00 (Thứ Hai đến Chủ Nhật hàng tuần)",
                  sub: "Tiệm cà phê: 07:00 – 21:30",
                },
                {
                  icon: Users,
                  title: "Đối tác quản lý",
                  content: "Công ty Vĩ Thành · Saigon Star Travel",
                  sub: "Liên kết tour trọn gói: Tour.Pro.Vn",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{item.title}</p>
                    <p className="text-muted-foreground text-sm mt-0.5">{item.content}</p>
                    {item.sub && <p className="text-muted-foreground text-xs mt-0.5 italic">{item.sub}</p>}
                  </div>
                </div>
              ))}
            </div>

            {/* Location map embed placeholder */}
            <div className="rounded-2xl overflow-hidden border border-border h-52 flex items-center justify-center relative">
              {/* THAY ĐỔI: Đổi đường dẫn ảnh Unsplash cũ thành /9.png và bỏ thuộc tính opacity vì đây là ảnh bản đồ gốc */}
              <img
                src="/images/9.png"
                alt="Vị trí Green Park"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="relative z-10 text-center bg-white/80 p-4 rounded-xl shadow-md max-w-xs mx-auto">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-1" />
                <p className="font-['Vollkorn'] text-foreground font-semibold text-sm">Green Park Củ Chi</p>
                <p className="text-xs text-muted-foreground">Xã Phú Hòa Đông, Củ Chi</p>
                <button
                  onClick={() => onNavigate("map")}
                  className="mt-2 bg-primary text-primary-foreground text-[11px] font-semibold px-3 py-1.5 rounded-full hover:brightness-110 transition-all"
                >
                  Xem bản đồ chi tiết
                </button>
              </div>
            </div>
          </div>

          {/* Contact form + Quick info */}
          <div>
            <div className="bg-card rounded-2xl border border-border p-6 mb-6">
              <h3 className="font-['Vollkorn'] text-foreground text-xl mb-5">Gửi yêu cầu đặt chỗ</h3>
              <form
                onSubmit={(e) => { e.preventDefault(); alert("Cảm ơn bạn! Chúng tôi sẽ liên hệ trong thời gian sớm nhất."); }}
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">Họ và tên</label>
                    <input
                      type="text"
                      placeholder="Nguyễn Văn A"
                      className="w-full bg-input-background border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">Số điện thoại</label>
                    <input
                      type="tel"
                      placeholder="0901 234 567"
                      className="w-full bg-input-background border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1.5">Email</label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className="w-full bg-input-background border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1.5">Loại nhóm</label>
                  <select className="w-full bg-input-background border border-border rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30">
                    <option value="">Chọn loại nhóm...</option>
                    <option>Gia đình</option>
                    <option>Trường học / Đoàn học sinh</option>
                    <option>Công ty / Tổ chức</option>
                    <option>Nhóm bạn bè</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1.5">Số lượng khách</label>
                  <input
                    type="number"
                    placeholder="Ví dụ: 4"
                    min="1"
                    className="w-full bg-input-background border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1.5">Ghi chú / Yêu cầu đặc biệt</label>
                  <textarea
                    rows={3}
                    placeholder="Ngày tham quan dự kiến, hoạt động quan tâm..."
                    className="w-full bg-input-background border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground font-semibold py-3 rounded-xl hover:brightness-95 transition-all"
                >
                  Gửi yêu cầu
                </button>
              </form>
            </div>

            {/* Quick links */}
            <div className="bg-primary rounded-2xl p-5 text-primary-foreground">
              <h4 className="font-['Vollkorn'] text-lg mb-3 text-accent">Khám phá thêm</h4>
              <div className="space-y-2">
                {[
                  { label: "Xem tất cả hoạt động", page: "activities" },
                  { label: "Ẩm thực đặc sản", page: "food" },
                  { label: "Xem bản đồ tọa lạc", page: "map" },
                  { label: "Chương trình ưu đãi", page: "promotions" },
                ].map((link) => (
                  <button
                    key={link.page}
                    onClick={() => onNavigate(link.page)}
                    className="w-full flex items-center justify-between py-2 border-b border-white/10 last:border-0 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}