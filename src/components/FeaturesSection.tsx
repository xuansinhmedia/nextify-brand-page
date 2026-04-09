import { Database, MessageSquare, TrendingUp, Users, Wifi, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: Wifi,
    title: "WiFi Marketing",
    description: "Trang chào WiFi cá nhân hóa theo từng nhóm khách hàng. Thu thập thông tin tự động khi khách đăng nhập WiFi.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Database,
    title: "Xây dựng dữ liệu",
    description: "Tự động ghi nhận mọi lượt đến, lưu thông tin khách hàng bao gồm tên, SĐT, email và sinh nhật.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: MessageSquare,
    title: "Tin nhắn tự động",
    description: "Gửi tin chào mừng, cảm ơn, sinh nhật và mời quay lại qua SMS, Email, Zalo và Facebook Messenger.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Users,
    title: "Phân nhóm khách hàng",
    description: "Tự động phân loại: khách mới, quay lại, thân thiết và chưa quay lại để chăm sóc hiệu quả.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: TrendingUp,
    title: "Đo lường hiệu quả",
    description: "Báo cáo chi tiết tỷ lệ khách quay lại, thời gian tại điểm và hiệu quả từng chiến dịch marketing.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Star,
    title: "Quản lý danh tiếng",
    description: "Mời khách đánh giá chất lượng dịch vụ, chia sẻ lên Facebook và Tripadvisor để tăng uy tín.",
    color: "bg-accent/10 text-accent",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Giải pháp</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Tất cả trong một nền tảng
          </h2>
          <p className="text-muted-foreground text-lg">
            Nextify cung cấp giải pháp toàn diện giúp doanh nghiệp địa điểm xây dựng, giữ chân và tăng trưởng khách hàng.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl bg-card border border-border/50 hover:shadow-card hover:border-primary/20 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-5`}>
                <feature.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
