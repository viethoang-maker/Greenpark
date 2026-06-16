import { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation, useParams } from "react-router";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { ActivitiesPage } from "./pages/ActivitiesPage";
import { FoodPage } from "./pages/FoodPage";
import { MapPage } from "./pages/MapPage";
import { PromotionsPage } from "./pages/PromotionsPage";
import { ContactPage } from "./pages/ContactPage";
import { DetailPage } from "./components/DetailPage";
import { DESTINATIONS } from "./data/content";

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // Tự động cuộn lên đầu mỗi khi URL thay đổi (thay thế cho scrollTo thủ công cũ)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  // Phân tích URL hiện tại để chuyển thành biến "currentPage" truyền cho Navbar sáng đèn chuẩn
  const getCurrentPage = () => {
    if (location.pathname === "/") return "home";
    if (location.pathname.startsWith("/detail")) return "detail";
    return location.pathname.replace("/", "");
  };

  const currentPage = getCurrentPage();

  // Hàm chuyển trang "bắc cầu" giữ nguyên cấu trúc cũ để các trang con gọi không bị lỗi
  const handleNavigate = (page, id) => {
    if (page === "detail" && id) {
      navigate(`/detail/${id}`);
    } else {
      navigate(`/${page === "home" ? "" : page}`);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Giữ nguyên Navbar, truyền currentPage tính từ URL và hàm điều hướng mới */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="flex-1 pt-16">
        <Routes>
          <Route path="/" element={<HomePage onNavigate={handleNavigate} />} />
          <Route path="/activities" element={<ActivitiesPage onNavigate={handleNavigate} />} />
          <Route path="/food" element={<FoodPage onNavigate={handleNavigate} />} />
          <Route path="/map" element={<MapPage onNavigate={handleNavigate} />} />
          <Route path="/promotions" element={<PromotionsPage onNavigate={handleNavigate} />} />
          <Route path="/contact" element={<ContactPage onNavigate={handleNavigate} />} />
          {/* Trang chi tiết giờ đây sẽ nhận id động từ URL dạng /detail/eco-farm */}
          <Route path="/detail/:id" element={<DetailPageWrapper onNavigate={handleNavigate} />} />
        </Routes>
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

// Component bọc trung gian: Đọc ID từ thanh URL, tìm dữ liệu tương ứng rồi nạp vào DetailPage độc lập
function DetailPageWrapper({ onNavigate }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const selectedDestination = DESTINATIONS.find((d) => d.id === id);

  if (!selectedDestination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Không tìm thấy thông tin điểm đến này.</p>
      </div>
    );
  }

  return (
    <DetailPage
      destination={selectedDestination}
      onBack={() => navigate(-1)} // Sử dụng -1 để lùi lại đúng trang trước đó dựa vào lịch sử trình duyệt
      onNavigate={onNavigate}
    />
  );
}