import { ArrowLeft, Target, Eye, Heart, Users, Lightbulb, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const team = [
  { name: "Nguyễn Minh Tuấn", role: "CEO & Co-founder", bio: "10+ năm kinh nghiệm trong lĩnh vực công nghệ và marketing số." },
  { name: "Trần Thị Mai", role: "CTO & Co-founder", bio: "Chuyên gia phát triển phần mềm, từng làm việc tại các tập đoàn công nghệ lớn." },
  { name: "Lê Hoàng Nam", role: "Head of Product", bio: "Đam mê xây dựng sản phẩm giải quyết vấn đề thực tế cho doanh nghiệp." },
  { name: "Phạm Thanh Hà", role: "Head of Marketing", bio: "Kinh nghiệm triển khai chiến lược marketing cho hơn 200 doanh nghiệp." },
];

const values = [
  { icon: Target, title: "Tập trung vào kết quả", description: "Mọi tính năng đều hướng đến việc mang lại giá trị đo lường được cho doanh nghiệp." },
  { icon: Lightbulb, title: "Đổi mới liên tục", description: "Không ngừng nghiên cứu và áp dụng công nghệ mới để cải thiện sản phẩm." },
  { icon: Heart, title: "Khách hàng là trung tâm", description: "Lắng nghe và đồng hành cùng doanh nghiệp trong mọi giai đoạn phát triển." },
  { icon: Users, title: "Đội ngũ xuất sắc", description: "Quy tụ những chuyên gia giỏi nhất trong lĩnh vực công nghệ và marketing." },
];

const milestones = [
  { year: "2020", event: "Thành lập Nextify với sứ mệnh số hóa trải nghiệm khách hàng" },
  { year: "2021", event: "Ra mắt sản phẩm WiFi Marketing đầu tiên, phục vụ 50+ doanh nghiệp" },
  { year: "2022", event: "Mở rộng tính năng CRM tự động và phân tích khách hàng" },
  { year: "2023", event: "Đạt mốc 500+ doanh nghiệp sử dụng, mở rộng đội ngũ" },
  { year: "2024", event: "Ra mắt Loyalty Program và đạt 1,000+ khách hàng doanh nghiệp" },
  { year: "2025", event: "Mở rộng thị trường Đông Nam Á, tích hợp AI vào nền tảng" },
];

const AboutUs = () => {
  const storyAnim = useScrollAnimation();
  const valuesAnim = useScrollAnimation();
  const teamAnim = useScrollAnimation();
  const timelineAnim = useScrollAnimation();

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
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Về chúng tôi</span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Câu chuyện <span className="gradient-text">Nextify</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Chúng tôi tin rằng mỗi doanh nghiệp địa điểm đều xứng đáng có công cụ marketing thông minh — không cần đội ngũ IT, không cần ngân sách lớn.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div
          ref={storyAnim.ref}
          className={`container mx-auto px-4 transition-all duration-700 ${storyAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Sứ mệnh của chúng tôi</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nextify được thành lập với mục tiêu giúp các doanh nghiệp địa điểm — quán cà phê, nhà hàng, salon, phòng gym — biến mỗi lượt ghé thăm thành cơ hội xây dựng mối quan hệ lâu dài với khách hàng.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Chúng tôi nhận thấy rằng phần lớn doanh nghiệp vừa và nhỏ bỏ lỡ hàng nghìn cơ hội kết nối với khách hàng mỗi ngày — chỉ vì thiếu công cụ phù hợp.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nextify ra đời để lấp đầy khoảng trống đó: một nền tảng all-in-one giúp thu thập dữ liệu, tự động chăm sóc và giữ chân khách hàng — tất cả thông qua mạng WiFi mà bạn đã có sẵn.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-3xl gradient-bg opacity-10 absolute -inset-4" />
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-3xl bg-card border border-border/50 flex items-center justify-center relative">
                  <div className="text-center p-8">
                    <Rocket size={48} className="text-primary mx-auto mb-4" />
                    <p className="text-4xl font-bold text-foreground mb-2">1,000+</p>
                    <p className="text-muted-foreground text-sm">Doanh nghiệp tin tưởng sử dụng</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div
          ref={valuesAnim.ref}
          className={`container mx-auto px-4 transition-all duration-700 ${valuesAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Giá trị cốt lõi</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((v) => (
              <div key={v.title} className="p-6 rounded-2xl bg-card border border-border/50 text-center hover:shadow-card hover:border-primary/20 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div
          ref={teamAnim.ref}
          className={`container mx-auto px-4 transition-all duration-700 ${teamAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">Đội ngũ lãnh đạo</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Những người đứng sau sứ mệnh giúp doanh nghiệp địa điểm tăng trưởng bền vững.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {team.map((m) => (
              <div key={m.name} className="p-6 rounded-2xl bg-card border border-border/50 text-center hover:shadow-card transition-all duration-300">
                <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground text-2xl font-bold">
                    {m.name.split(" ").pop()?.[0]}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{m.name}</h3>
                <p className="text-primary text-sm font-medium mb-3">{m.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24">
        <div
          ref={timelineAnim.ref}
          className={`container mx-auto px-4 transition-all duration-700 ${timelineAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Hành trình phát triển</h2>
          <div className="max-w-2xl mx-auto relative">
            <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-border" />
            <div className="space-y-8">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center flex-shrink-0 z-10">
                    <span className="text-primary-foreground text-xs font-bold">{m.year.slice(2)}</span>
                  </div>
                  <div className="pt-1.5">
                    <span className="text-primary font-semibold text-sm">{m.year}</span>
                    <p className="text-foreground mt-1">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 gradient-bg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Cùng Nextify tăng trưởng</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            Hãy để chúng tôi đồng hành cùng doanh nghiệp của bạn trên hành trình chuyển đổi số.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/#pricing">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                Dùng thử miễn phí
              </Button>
            </Link>
            <Link to="/#contact">
              <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground/10">
                Liên hệ tư vấn
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
