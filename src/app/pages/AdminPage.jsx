import { useState, useEffect } from "react";
import { db } from "../../lib/firebase";
import { collection, onSnapshot, doc, setDoc, deleteDoc } from "firebase/firestore";
import { Plus, Edit2, Trash2, LogOut, Globe, Image, LayoutGrid, FileText } from "lucide-react";
// Thêm 'getDoc' vào đoạn import này
import { collection, onSnapshot, doc, setDoc, deleteDoc, getDoc } from "firebase/firestore"; //

export function AdminPage() {
  // Trạng thái đăng nhập
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem("admin_logged_in") === "true");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  // Trạng thái dữ liệu Firestore
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  // Trạng thái Form (Thêm/Sửa)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null); // null = Thêm mới, có giá trị = Đang sửa
  
  // Cấu trúc đối tượng form chuẩn hóa dữ liệu Green Park
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    subtitle: "",
    excerpt: "",
    bodyText: "", // Dùng xuống dòng \n để tách đoạn văn
    highlightsText: "", // Dùng xuống dòng \n để tách điểm nổi bật
    note: "",
    image: "",
    type: "activity", // activity | food | promotion
    category: "edutainment",
    categoryLabel: "Giáo dục trải nghiệm",
    categoryColor: "bg-primary text-primary-foreground",
    price: "",
  });

  // Lắng nghe dữ liệu thực tế từ Firestore
  useEffect(() => {
    if (!isLoggedIn) return;
    const unsubscribe = onSnapshot(collection(db, "destinations"), (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setDestinations(data);
      setLoading(false);
    }, (error) => {
      console.error("Lỗi đồng bộ dữ liệu: ", error);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [isLoggedIn]);

// Xử lý Đăng nhập từ Firestore
const handleLogin = async (e) => {
  e.preventDefault();
  setLoginError(""); // Xóa thông báo lỗi cũ nếu có

  try {
    // 1. Chỉ định tới chính xác document chứa tài khoản admin trên Firestore
    const adminDocRef = doc(db, "admin_users", "admin_account");
    const adminSnapshot = await getDoc(adminDocRef);

    if (adminSnapshot.exists()) {
      const adminData = adminSnapshot.data();

      // 2. So sánh dữ liệu người dùng nhập vào với dữ liệu trên Firestore
      if (username === adminData.username && password === adminData.password) {
        localStorage.setItem("admin_logged_in", "true"); //
        setIsLoggedIn(true); //
      } else {
        setLoginError("Tài khoản hoặc mật khẩu không chính xác!"); //
      }
    } else {
      setLoginError("Không tìm thấy cấu hình tài khoản hệ thống!");
    }
  } catch (error) {
    console.error("Lỗi đăng nhập:", error);
    setLoginError("Có lỗi xảy ra khi kết nối tới cơ sở dữ liệu!");
  }
};

  // Xử lý Đăng xuất
  const handleLogout = () => {
    localStorage.removeItem("admin_logged_in");
    setIsLoggedIn(false);
  };

  // Kích hoạt trạng thái Sửa bản ghi
  const openEditModal = (item) => {
    setEditingId(item.id);
    setFormData({
      id: item.id,
      title: item.title || "",
      subtitle: item.subtitle || "",
      excerpt: item.excerpt || "",
      bodyText: Array.isArray(item.body) ? item.body.join("\n") : "",
      highlightsText: Array.isArray(item.highlights) ? item.highlights.join("\n") : "",
      note: item.note || "",
      image: item.image || "",
      type: item.type || "activity",
      category: item.category || "edutainment",
      categoryLabel: item.categoryLabel || "",
      categoryColor: item.categoryColor || "",
      price: item.price || "",
    });
    setIsModalOpen(true);
  };

  // Kích hoạt trạng thái Thêm bản ghi mới
  const openAddModal = () => {
    setEditingId(null);
    setFormData({
      id: "", title: "", subtitle: "", excerpt: "",
      bodyText: "", highlightsText: "", note: "", image: "",
      type: "activity", category: "edutainment",
      categoryLabel: "Giáo dục trải nghiệm", categoryColor: "bg-primary text-primary-foreground",
      price: ""
    });
    setIsModalOpen(true);
  };

  // Tự động gán nhãn màu sắc tối ưu theo phân loại hệ thống
  const handleTypeChange = (typeValue) => {
    let category = "edutainment";
    let categoryLabel = "Giáo dục trải nghiệm";
    let categoryColor = "bg-primary text-primary-foreground";

    if (typeValue === "food") {
      category = "food";
      categoryLabel = "Ẩm thực";
      categoryColor = "bg-accent text-accent-foreground";
    } else if (typeValue === "promotion") {
      category = "promotion";
      categoryLabel = "Chương trình ưu đãi";
      categoryColor = "bg-red-600 text-white";
    }

    setFormData({ ...formData, type: typeValue, category, categoryLabel, categoryColor });
  };

  // Thực thi Submit Form (Lưu dữ liệu lên Firestore)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.id.trim()) return alert("Vui lòng nhập Mã định danh định tuyến (ID Slug)!");

    const docId = formData.id.trim().toLowerCase();
    const finalData = {
      title: formData.title,
      subtitle: formData.subtitle,
      excerpt: formData.excerpt,
      body: formData.bodyText.split("\n").filter(p => p.trim() !== ""),
      highlights: formData.highlightsText.split("\n").filter(h => h.trim() !== ""),
      note: formData.note,
      image: formData.image,
      type: formData.type,
      category: formData.category,
      categoryLabel: formData.categoryLabel,
      categoryColor: formData.categoryColor,
      price: formData.price || null,
    };

    try {
      await setDoc(doc(db, "destinations", docId), finalData);
      setIsModalOpen(false);
      alert(editingId ? "Cập nhật dữ liệu thành công!" : "Thêm điểm đến thành công!");
    } catch (error) {
      alert("Lỗi khi ghi dữ liệu: " + error.message);
    }
  };

  // Xử lý Xóa bản ghi dữ liệu
  const handleDelete = async (id) => {
    if (window.confirm(`Bạn có chắc chắn muốn xóa bản ghi [${id}] này không?`)) {
      try {
        await deleteDoc(doc(db, "destinations", id));
        alert("Đã xóa bản ghi thành công khỏi hệ thống!");
      } catch (error) {
        alert("Lỗi khi xóa dữ liệu: " + error.message);
      }
    }
  };

  // Giao diện cổng đăng nhập độc lập (Login Portal)
  if (!isLoggedIn) {
    return (
      <div className="min-h-[85vh] flex items-center justify-center px-4 bg-muted/30">
        <div className="bg-card w-full max-w-md p-8 rounded-2xl border border-border shadow-xl">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-primary">Hệ Thống Quản Trị</h1>
            <p className="text-xs text-muted-foreground mt-1">Green Park Củ Chi · Be Able VN</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold mb-1.5 text-foreground">Tài khoản</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-input-background border border-border rounded-lg px-3 py-2.5 text-sm"
                placeholder="Nhập tài khoản admin..."
                required
              />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1.5 text-foreground">Mật khẩu</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-input-background border border-border rounded-lg px-3 py-2.5 text-sm"
                placeholder="••••••••"
                required
              />
            </div>
            {loginError && <p className="text-xs text-destructive font-medium">{loginError}</p>}
            <button type="submit" className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-xl text-sm transition-all hover:brightness-110">
              Đăng Nhập Hệ Thống
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Giao diện quản lý nội dung chính (Dashboard)
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 min-h-screen">
      {/* Thanh Header Dashboard */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-border pb-6 mb-8 gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Quản Lý Điểm Đến & Bài Viết</h1>
          <p className="text-sm text-muted-foreground mt-0.5">Cập nhật nội dung luồng dữ liệu thời gian thực lên Firebase Firestore</p>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={openAddModal} className="bg-primary text-primary-foreground font-semibold px-4 py-2.5 rounded-xl text-sm flex items-center gap-2 hover:brightness-110 transition-all">
            <Plus className="w-4 h-4" /> Thêm Bài Viết
          </button>
          <button onClick={handleLogout} className="bg-muted text-muted-foreground hover:bg-destructive hover:text-white font-semibold px-4 py-2.5 rounded-xl text-sm flex items-center gap-2 transition-all">
            <LogOut className="w-4 h-4" /> Đăng xuất
          </button>
        </div>
      </div>

      {/* Bảng danh sách bài viết dữ liệu từ Database */}
      {loading ? (
        <div className="text-center py-20 text-muted-foreground text-sm">Đang đồng bộ dữ liệu từ đám mây...</div>
      ) : destinations.length === 0 ? (
        <div className="text-center py-20 border border-dashed border-border rounded-2xl bg-card">
          <p className="text-muted-foreground text-sm">Hiện tại chưa có bài viết nào trên cơ sở dữ liệu đám mây Firestore.</p>
          <button onClick={openAddModal} className="mt-3 text-sm text-primary font-bold underline">Thêm bài viết đầu tiên ngay</button>
        </div>
      ) : (
        <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-muted text-foreground font-medium">
                <tr>
                  <th className="p-4 w-24">Hình ảnh</th>
                  <th className="p-4 w-32">Mã định danh (ID)</th>
                  <th className="p-4">Tiêu đề & Nội dung tóm tắt</th>
                  <th className="p-4 w-28">Phân loại</th>
                  <th className="p-4 w-28 text-center">Hành động</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {destinations.map((item) => (
                  <tr key={item.id} className="hover:bg-muted/30 transition-colors">
                    <td className="p-4">
                      <div className="w-16 h-12 rounded-lg overflow-hidden border border-border bg-muted">
                        {item.image ? (
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-muted-foreground"><Image className="w-4 h-4" /></div>
                        )}
                      </div>
                    </td>
                    <td className="p-4 font-mono text-xs text-primary font-semibold">{item.id}</td>
                    <td className="p-4">
                      <p className="font-semibold text-foreground line-clamp-1">{item.title}</p>
                      <p className="text-muted-foreground text-xs line-clamp-1 mt-0.5">{item.excerpt}</p>
                    </td>
                    <td className="p-4">
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${item.categoryColor || 'bg-muted text-foreground'}`}>
                        {item.categoryLabel || item.type}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-center gap-1">
                        <button onClick={() => openEditModal(item)} className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors" title="Sửa bài viết">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button onClick={() => handleDelete(item.id)} className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors" title="Xóa bài viết">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* POPUP MODAL: Thêm mới hoặc Cập nhật bài viết */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
          <div className="bg-card w-full max-w-3xl rounded-2xl shadow-2xl border border-border max-h-[90vh] flex flex-col my-8">
            {/* Header Modal */}
            <div className="p-5 border-b border-border flex justify-between items-center bg-muted/40">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <LayoutGrid className="w-5 h-5 text-primary" />
                {editingId ? `Cấu hình bài viết: [${editingId}]` : "Tạo bài viết điểm đến mới"}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="text-muted-foreground hover:text-foreground text-xl font-semibold px-2">×</button>
            </div>

            {/* Form điền nội dung */}
            <form onSubmit={handleSubmit} className="p-6 overflow-y-auto flex-1 space-y-4 text-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1">Mã định danh định tuyến (ID Slug) *</label>
                  <input
                    type="text"
                    value={formData.id}
                    onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                    disabled={editingId !== null}
                    placeholder="v.d: eco-farm, khoai-mi"
                    className="w-full bg-input-background border border-border rounded-lg px-3 py-2 disabled:opacity-60 font-mono text-xs"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1">Phân hệ trang hiển thị *</label>
                  <select
                    value={formData.type}
                    onChange={(e) => handleTypeChange(e.target.value)}
                    className="w-full bg-input-background border border-border rounded-lg px-3 py-2"
                  >
                    <option value="activity">Hoạt động giải trí (Activities)</option>
                    <option value="food">Món ăn ẩm thực (Food)</option>
                    <option value="promotion">Gói ưu đãi / Thầu lữ hành (Promotions)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1">Mức giá tham khảo (Nếu có)</label>
                  <input
                    type="text"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    placeholder="v.d: 395.000 VNĐ/ao"
                    className="w-full bg-input-background border border-border rounded-lg px-3 py-2"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1">Tiêu đề bài viết *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Nhập tên hoạt động, tên đặc sản hoặc chương trình ưu đãi..."
                  className="w-full bg-input-background border border-border rounded-lg px-3 py-2 font-medium"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1">Tiêu đề phụ (Subtitle)</label>
                <input
                  type="text"
                  value={formData.subtitle}
                  onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                  placeholder="Dòng text bổ trợ mô tả cảm xúc ngắn ngắn bên dưới tiêu đề..."
                  className="w-full bg-input-background border border-border rounded-lg px-3 py-2 italic text-muted-foreground"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1">Mô tả tóm tắt ngắn (Excerpt) *</label>
                <textarea
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  rows={2}
                  placeholder="Nội dung ngắn hiển thị ở các thẻ danh sách bài viết ngoài trang chủ..."
                  className="w-full bg-input-background border border-border rounded-lg px-3 py-2 resize-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1 flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5" /> Nội dung bài viết chi tiết (Body) - *Nhấn Enter xuống dòng để tách thành đoạn văn mới*
                </label>
                <textarea
                  value={formData.bodyText}
                  onChange={(e) => setFormData({ ...formData, bodyText: e.target.value })}
                  rows={4}
                  placeholder="Nhập nội dung chi tiết. Mỗi lần nhấn Enter xuống dòng sẽ hiển thị thành 1 thẻ đoạn văn <p> tách biệt mượt mà."
                  className="w-full bg-input-background border border-border rounded-lg px-3 py-2 text-xs"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1 flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5" /> Các đặc điểm nổi bật (Highlights) - *Nhấn Enter xuống dòng cho mỗi điểm khác nhau*
                </label>
                <textarea
                  value={formData.highlightsText}
                  onChange={(e) => setFormData({ ...formData, highlightsText: e.target.value })}
                  rows={3}
                  placeholder="Đặc điểm 1&#10;Đặc điểm 2&#10;Đặc điểm 3"
                  className="w-full bg-input-background border border-border rounded-lg px-3 py-2 text-xs font-mono"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1 flex items-center gap-1">
                    <Image className="w-3.5 h-3.5" /> Đường dẫn ảnh hiển thị (Image URL) *
                  </label>
                  <input
                    type="text"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    placeholder="v.d: /images/10.png hoặc đường dẫn ảnh https://..."
                    className="w-full bg-input-background border border-border rounded-lg px-3 py-2 text-xs font-mono"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1">Ghi chú kèm theo (Note)</label>
                  <input
                    type="text"
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    placeholder="Lưu ý về trang phục, mức giá thuê phụ trợ kèm theo nếu có..."
                    className="w-full bg-input-background border border-border rounded-lg px-3 py-2"
                  />
                </div>
              </div>

              {/* Nhóm nút lưu trữ */}
              <div className="flex justify-end gap-2 border-t border-border pt-4 mt-6">
                <button type="button" onClick={() => setIsModalOpen(false)} className="bg-muted text-muted-foreground font-semibold px-5 py-2.5 rounded-xl transition-colors">
                  Hủy bỏ
                </button>
                <button type="submit" className="bg-primary text-primary-foreground font-semibold px-6 py-2.5 rounded-xl flex items-center gap-1 hover:brightness-110 transition-all">
                  Lưu bài viết lên đám mây
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}