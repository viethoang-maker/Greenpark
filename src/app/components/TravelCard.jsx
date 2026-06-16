import { ArrowRight, Tag } from "lucide-react";

// Đã xóa hoàn toàn khối interface TravelCardProps của TypeScript tại đây

export function TravelCard({ image, category, categoryColor = "bg-accent text-accent-foreground", title, excerpt, note, onClick }) {
  // Đã bỏ phần định nghĩa kiểu : TravelCardProps ở trên
  return (
    <article
      onClick={onClick}
      className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-border"
    >
      <div className="relative overflow-hidden h-52">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span className={`absolute top-3 left-3 inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColor}`}>
          <Tag className="w-3 h-3" />
          {category}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-['Vollkorn'] text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-3">
          {excerpt}
        </p>
        {note && (
          <p className="text-xs text-accent font-medium bg-accent/10 px-2.5 py-1.5 rounded-md mb-3">
            {note}
          </p>
        )}
        <div className="flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
          Xem chi tiết
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </article>
  );
}