import { useState } from "react";
import { Menu, X, Leaf } from "lucide-react";

// Đã xóa hoàn toàn khối interface NavbarProps của TypeScript tại đây

const navLinks = [
  { id: "home", label: "Trang Chủ" },
  { id: "activities", label: "Hoạt Động" },
  { id: "food", label: "Ẩm Thực" },
  { id: "map", label: "Tọa Lạc" },
  { id: "promotions", label: "Ưu Đãi" },
  { id: "contact", label: "Liên Hệ" },
];

export function Navbar({ currentPage, onNavigate }) {
  // Đã bỏ phần định nghĩa kiểu dữ liệu ở tham số đầu vào
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => { onNavigate("home"); setMenuOpen(false); }}
            className="flex items-center gap-2 text-primary-foreground hover:opacity-80 transition-opacity"
          >
            {/* THAY ĐỔI: Thay thế div chứa biểu tượng <Leaf /> cũ bằng thẻ <img> dưới đây */}
            <img src="/images/2.png" alt="Green Park Logo" className="w-8 h-8 object-contain" />
            
            <div className="text-left">
              <div className="font-['Vollkorn'] font-semibold text-base leading-tight">Green Park</div>
              <div className="text-xs text-accent/80 leading-tight">Củ Chi · Be Able VN</div>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`px-3 py-1.5 rounded-md text-sm transition-all duration-200 ${
                  currentPage === link.id
                    ? "bg-accent text-accent-foreground font-semibold"
                    : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/10"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-primary-foreground p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-primary border-t border-white/10">
          <div className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => { onNavigate(link.id); setMenuOpen(false); }}
                className={`w-full text-left px-4 py-2.5 rounded-md text-sm transition-all ${
                  currentPage === link.id
                    ? "bg-accent text-accent-foreground font-semibold"
                    : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/10"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}