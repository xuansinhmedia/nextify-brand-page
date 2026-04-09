import { Button } from "@/components/ui/button";
import { ArrowRight, Wifi, Users, BarChart3 } from "lucide-react";
import heroImage from "@/assets/hero-illustration.jpg";

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      {/* Decorative gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Wifi size={14} />
              Nền tảng WiFi CRM #1 Việt Nam
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Smart WiFi.{" "}
              <span className="gradient-text">Smarter CRM.</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Biến mỗi kết nối WiFi thành mối quan hệ khách hàng bền vững.
              Nextify giúp doanh nghiệp địa điểm hiểu, gắn kết và tăng trưởng
              doanh thu thông qua giải pháp WiFi Marketing & CRM thông minh.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gradient-bg border-0 text-primary-foreground shadow-brand hover:opacity-90 transition-opacity text-base px-8">
                Bắt đầu miễn phí
                <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 border-border hover:bg-muted">
                Xem demo
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              {[
                { icon: Users, label: "50,000+", sub: "Khách hàng" },
                { icon: Wifi, label: "1,000+", sub: "Địa điểm" },
                { icon: BarChart3, label: "19%", sub: "Tăng quay lại" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <stat.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-foreground">{stat.label}</div>
                    <div className="text-xs text-muted-foreground">{stat.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img src={heroImage} alt="Nextify WiFi CRM Dashboard" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
