import { ArrowLeft, CheckCircle, AlertCircle } from "lucide-react";
// Đã xóa dòng import Destination ở đây

// Đã xóa hoàn toàn khối interface DetailPageProps tại đây

export function DetailPage({ destination, onBack, onNavigate }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Cover image */}
      <div className="relative h-[50vh] min-h-[320px] overflow-hidden">
        <img
          src={destination.image}
          alt={destination.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
          <div className="max-w-3xl mx-auto">
            <span
              className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${destination.categoryColor}`}
            >
              {destination.categoryLabel}
            </span>
            <h1 className="font-['Vollkorn'] text-white text-2xl sm:text-4xl font-semibold leading-tight">
              {destination.title}
            </h1>
            <p className="text-white/80 mt-2 text-base italic">{destination.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-primary font-semibold mb-8 hover:gap-3 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Quay lại
        </button>

        {/* Body text */}
        <div className="space-y-4 mb-10">
          {destination.body.map((paragraph, i) => (
            <p key={i} className="text-foreground/80 leading-relaxed text-base">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Highlights */}
        {destination.highlights.length > 0 && (
          <div className="bg-card rounded-xl border border-border p-6 mb-6">
            <h3 className="font-['Vollkorn'] text-primary mb-4">Điểm nổi bật</h3>
            <ul className="space-y-3">
              {destination.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

        {/* Note */}
        {destination.note && (
          <div className="flex items-start gap-3 bg-accent/10 border border-accent/30 rounded-xl p-5 mb-8">
            <AlertCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-foreground mb-1">Lưu ý</p>
              <p className="text-sm text-foreground/70">{destination.note}</p>
            </div>
          </div>
        )}

        {/* Price if promotion */}
        {destination.price && (
          <div className="bg-primary text-primary-foreground rounded-xl p-6 mb-8 text-center">
            <p className="text-sm opacity-80 mb-1">Mức giá tham khảo</p>
            <p className="font-['Vollkorn'] text-2xl font-semibold text-accent">{destination.price}</p>
          </div>
        )}

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => onNavigate("contact")}
            className="flex-1 bg-accent text-accent-foreground font-semibold py-3 px-6 rounded-xl hover:brightness-95 transition-all"
          >
            Liên hệ đặt chỗ ngay
          </button>
          <button
            onClick={() => onNavigate("map")}
            className="flex-1 bg-card border-2 border-primary text-primary font-semibold py-3 px-6 rounded-xl hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Xem bản đồ
          </button>
        </div>
      </div>
    </div>
  );
}