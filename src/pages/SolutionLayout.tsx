import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

interface SolutionLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  icon: ReactNode;
  features: { title: string; description: string }[];
  benefits: string[];
  ctaText?: string;
}

const SolutionLayout = ({
  title,
  subtitle,
  description,
  icon,
  features,
  benefits,
  ctaText = "Dùng thử miễn phí",
}: SolutionLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">N</span>
            </div>
            <span className="text-xl font-bold text-foreground">Nextify</span>
          </Link>
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft size={16} />
              Trang chủ
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-6">
              {icon}
            </div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">{subtitle}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">{title}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-bg border-0 text-primary-foreground shadow-brand hover:opacity-90">
                {ctaText}
              </Button>
              <Link to="/#contact">
                <Button size="lg" variant="outline">Liên hệ tư vấn</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Tính năng nổi bật</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-2xl bg-card border border-border/50 hover:shadow-card hover:border-primary/20 transition-all duration-300">
                <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Lợi ích cho doanh nghiệp</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((b) => (
                <div key={b} className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-foreground text-xs font-bold">✓</span>
                  </div>
                  <p className="text-foreground text-sm">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 gradient-bg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Sẵn sàng bắt đầu?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            Trải nghiệm miễn phí và khám phá cách Nextify giúp doanh nghiệp của bạn tăng trưởng.
          </p>
          <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
            {ctaText}
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolutionLayout;
