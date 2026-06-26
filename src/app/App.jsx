import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation, useParams } from "react-router";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { ActivitiesPage } from "./pages/ActivitiesPage";
import { FoodPage } from "./pages/FoodPage";
import { MapPage } from "./pages/MapPage";
import { PromotionsPage } from "./pages/PromotionsPage";
import { ContactPage } from "./pages/ContactPage";
import { AdminPage } from "./pages/AdminPage"; // Import trang Quản lý vừa tạo
import { DetailPage } from "./components/DetailPage";
import { DESTINATIONS } from "./data/content";

// Firebase kết nối
import { db } from "../lib/firebase";
import { collection, onSnapshot } from "firebase/firestore";

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // State lưu trữ dữ liệu động đồng bộ toàn cục từ Firestore
  const [liveDestinations, setLiveDestinations] = useState([]);

  useEffect(() => {
    // Thiết lập kết nối thời gian thực với Firestore
    const unsubscribe = onSnapshot(collection(db, "destinations"), (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      // Nếu Firestore có data thì cập nhật, ngược lại dự phòng dùng dữ liệu local static
      setLiveDestinations(data.length > 0 ? data : DESTINATIONS);
    }, (error) => {
      console.error("Lỗi đồng bộ dữ liệu Firestore public: ", error);
      setLiveDestinations(DESTINATIONS); // Fallback khi lỗi kết nối
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const getCurrentPage = () => {
    if (location.pathname === "/") return "home";
    if (location.pathname.startsWith("/detail")) return "detail";
    if (location.pathname.startsWith("/admin")) return "admin";
    return location.pathname.replace("/", "");
  };

  const currentPage = getCurrentPage();

  const handleNavigate = (page, id) => {
    if (page === "detail" && id) {
      navigate(`/detail/${id}`);
    } else {
      navigate(`/${page === "home" ? "" : page}`);
    }
  };

  // Ẩn thanh điều hướng và chân trang khi đang ở giao diện quản trị /admin để mở rộng diện tích làm việc
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {!isAdminRoute && <Navbar currentPage={currentPage} onNavigate={handleNavigate} />}

      <main className={`flex-1 ${isAdminRoute ? "pt-4" : "pt-16"}`}>
        <Routes>
          <Route path="/" element={<HomePage onNavigate={handleNavigate} destinations={liveDestinations} />} />
          <Route path="/activities" element={<ActivitiesPage onNavigate={handleNavigate} destinations={liveDestinations} />} />
          <Route path="/food" element={<FoodPage onNavigate={handleNavigate} destinations={liveDestinations} />} />
          <Route path="/map" element={<MapPage onNavigate={handleNavigate} />} />
          <Route path="/promotions" element={<PromotionsPage onNavigate={handleNavigate} destinations={liveDestinations} />} />
          <Route path="/contact" element={<ContactPage onNavigate={handleNavigate} />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/detail/:id" element={<DetailPageWrapper onNavigate={handleNavigate} destinations={liveDestinations} />} />
        </Routes>
      </main>

      {!isAdminRoute && <Footer onNavigate={handleNavigate} />}
    </div>
  );
}

// Cấu trúc bọc trang chi tiết dựa vào nguồn dữ liệu động đồng bộ
function DetailPageWrapper({ onNavigate, destinations }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const selectedDestination = destinations.find((d) => d.id === id);

  if (!selectedDestination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Không tìm thấy thông tin điểm đến này trên hệ thống cơ sở dữ liệu.</p>
      </div>
    );
  }

  return (
    <DetailPage
      destination={selectedDestination}
      onBack={() => navigate(-1)}
      onNavigate={onNavigate}
    />
  );
}