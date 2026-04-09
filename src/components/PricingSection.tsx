import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "990K",
    period: "/tháng",
    description: "Phù hợp cho cửa hàng nhỏ, quán cafe",
    features: [
      "1 địa điểm WiFi",
      "Tối đa 500 khách/tháng",
      "Captive portal cơ bản",
      "Thu thập thông tin khách",
      "Báo cáo hàng tuần",
      "Hỗ trợ email",
    ],
    popular: false,
    cta: "Bắt đầu miễn phí",
  },
  {
    name: "Business",
    price: "2.490K",
    period: "/tháng",
    description: "Dành cho chuỗi cửa hàng & nhà hàng",
    features: [
      "Tối đa 5 địa điểm",
      "Không giới hạn khách",
      "Captive portal tùy chỉnh",
      "CRM & phân khúc khách hàng",
      "Auto-messaging (SMS, Email)",
      "Báo cáo realtime",
      "Tích hợp POS",
      "Hỗ trợ ưu tiên 24/7",
    ],
    popular: true,
    cta: "Dùng thử 14 ngày",
  },
  {
    name: "Enterprise",
    price: "Liên hệ",
    period: "",
    description: "Giải pháp toàn diện cho doanh nghiệp lớn",
    features: [
      "Không giới hạn địa điểm",
      "Không giới hạn khách",
      "White-label hoàn toàn",
      "API & webhook mở rộng",
      "CRM nâng cao + AI insights",
      "Chiến dịch marketing tự động",
      "Account manager riêng",
      "SLA 99.9% uptime",
    ],
    popular: false,
    cta: "Liên hệ tư vấn",
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
            Bảng giá
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Chọn gói phù hợp với{" "}
            <span className="gradient-text">doanh nghiệp của bạn</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Bắt đầu miễn phí, nâng cấp khi doanh nghiệp phát triển. Không cần thẻ tín dụng.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.popular
                  ? "bg-card border-2 border-primary shadow-brand scale-105"
                  : "bg-card border border-border shadow-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 gradient-bg text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full">
                  Phổ biến nhất
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-extrabold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check size={16} className="text-accent mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "gradient-bg border-0 text-primary-foreground shadow-brand hover:opacity-90 transition-opacity"
                    : ""
                }`}
                variant={plan.popular ? "default" : "outline"}
                size="lg"
              >
                {plan.cta}
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
