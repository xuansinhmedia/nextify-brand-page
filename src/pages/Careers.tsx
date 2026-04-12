import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Zap, Heart, Users, Rocket } from "lucide-react";

const openings = [
  { title: "Senior Frontend Engineer", team: "Engineering", location: "Hà Nội / Remote", type: "Full-time" },
  { title: "Backend Engineer (Node.js)", team: "Engineering", location: "Hà Nội / Remote", type: "Full-time" },
  { title: "Product Designer (UI/UX)", team: "Design", location: "Hà Nội", type: "Full-time" },
  { title: "Customer Success Manager", team: "Customer Success", location: "TP. Hồ Chí Minh", type: "Full-time" },
  { title: "Digital Marketing Specialist", team: "Marketing", location: "Hà Nội / Remote", type: "Full-time" },
  { title: "Sales Executive (B2B)", team: "Sales", location: "TP. Hồ Chí Minh", type: "Full-time" },
];

const perks = [
  { icon: Zap, title: "Công nghệ tiên tiến", desc: "Làm việc với stack hiện đại, tự do thử nghiệm" },
  { icon: Heart, title: "Bảo hiểm toàn diện", desc: "Bảo hiểm sức khoẻ cho bạn và gia đình" },
  { icon: Clock, title: "Giờ làm linh hoạt", desc: "Hybrid/remote, tập trung vào kết quả" },
  { icon: Users, title: "Đội ngũ tuyệt vời", desc: "Văn hoá cởi mở, hỗ trợ và đầy năng lượng" },
  { icon: Rocket, title: "Phát triển nhanh", desc: "Budget học tập, mentoring, career path rõ ràng" },
  { icon: MapPin, title: "Văn phòng đẹp", desc: "Không gian sáng tạo tại trung tâm thành phố" },
];

const Careers = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: perksRef, isVisible: perksVisible } = useScrollAnimation();
  const { ref: jobsRef, isVisible: jobsVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-28 pb-16 bg-gradient-to-b from-accent/5 to-background">
        <div
          ref={heroRef}
          className={`container mx-auto px-4 text-center transition-all duration-700 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Gia nhập Nextify
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Cùng xây dựng nền tảng chăm sóc khách hàng hàng đầu Việt Nam
          </p>
          <Button className="gradient-bg border-0 text-primary-foreground shadow-brand" size="lg">
            Xem vị trí tuyển dụng ↓
          </Button>
        </div>
      </section>

      {/* Perks */}
      <section className="py-16">
        <div
          ref={perksRef}
          className={`container mx-auto px-4 transition-all duration-700 ${perksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            Tại sao chọn Nextify?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((p) => (
              <div key={p.title} className="p-6 rounded-2xl border border-border/50 bg-card hover:shadow-lg transition-shadow">
                <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center mb-4">
                  <p.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Openings */}
      <section className="py-16 bg-muted/30">
        <div
          ref={jobsRef}
          className={`container mx-auto px-4 transition-all duration-700 ${jobsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            Vị trí đang tuyển
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {openings.map((job) => (
              <div key={job.title} className="p-5 rounded-xl border border-border/50 bg-card flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:shadow-md transition-shadow">
                <div>
                  <h3 className="font-semibold text-foreground">{job.title}</h3>
                  <p className="text-sm text-muted-foreground">{job.team} · {job.location} · {job.type}</p>
                </div>
                <Button variant="outline" size="sm">Ứng tuyển</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
