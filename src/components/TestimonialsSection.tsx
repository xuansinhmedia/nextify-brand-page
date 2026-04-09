import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    quote: "Chúng tôi đã có thêm 50,000 số điện thoại vào dữ liệu khách hàng thân thiết chỉ đơn giản sử dụng Nextify WIFI cho các nhà hàng của chúng tôi.",
    author: "Mr. Thuân",
    role: "Chuỗi nhà hàng Bò Tơ Quán Mộc",
  },
  {
    quote: "Với việc dễ dàng tự động thu thập liên hệ của khách hàng và tự động gửi tin chăm sóc, chúng tôi có thể tập trung vào vận hành dịch vụ tốt hơn.",
    author: "Mrs. Giang",
    role: "Chuỗi Lofita Café",
  },
  {
    quote: "Báo cáo và biểu đồ từ Nextify giúp chúng tôi hiểu hơn về khách hàng và những gì họ kỳ vọng.",
    author: "Anh Tuấn",
    role: "Chuỗi Bia Tự Do & Lẩu Bò Tự Do",
  },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-background">
      <div ref={ref} className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Khách hàng nói gì</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Được tin tưởng bởi hàng ngàn doanh nghiệp
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="p-8 rounded-2xl bg-card border border-border/50 hover:shadow-card transition-all duration-300"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 text-sm">"{t.quote}"</p>
              <div>
                <div className="font-semibold text-foreground text-sm">{t.author}</div>
                <div className="text-muted-foreground text-xs">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
