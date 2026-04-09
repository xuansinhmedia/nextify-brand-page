import { Wifi, UserPlus, Send, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Wifi,
    step: "01",
    title: "Khách kết nối WiFi",
    description: "Khách hàng đến địa điểm và đăng nhập WiFi miễn phí. Trang chào hiển thị chương trình ưu đãi.",
  },
  {
    icon: UserPlus,
    step: "02",
    title: "Đăng ký thành viên",
    description: "Khách để lại thông tin: tên, số điện thoại, email để trở thành thành viên thân thiết.",
  },
  {
    icon: Send,
    step: "03",
    title: "Chăm sóc tự động",
    description: "Hệ thống tự động gửi tin chào mừng, coupons, lời mời đánh giá qua SMS, Email, Zalo.",
  },
  {
    icon: BarChart3,
    step: "04",
    title: "Đo lường & tối ưu",
    description: "Theo dõi tỷ lệ quay lại, phân tích hành vi khách hàng và tối ưu chiến dịch marketing.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Cách hoạt động</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Đơn giản chỉ với 4 bước
          </h2>
          <p className="text-muted-foreground text-lg">
            Từ kết nối WiFi đến khách hàng trung thành — tất cả đều tự động.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.step} className="relative text-center">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/30 to-accent/30" />
              )}
              <div className="w-20 h-20 mx-auto rounded-2xl gradient-bg flex items-center justify-center mb-5 shadow-brand relative z-10">
                <step.icon size={28} className="text-primary-foreground" />
              </div>
              <span className="text-xs font-bold text-primary tracking-widest">{step.step}</span>
              <h3 className="text-lg font-semibold text-foreground mt-2 mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
