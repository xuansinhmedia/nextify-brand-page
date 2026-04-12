import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: MapPin, label: "Địa chỉ", value: "Toà nhà ABC, 123 Nguyễn Huệ\nQuận 1, TP. Hồ Chí Minh" },
  { icon: Phone, label: "Hotline", value: "1900 xxxx" },
  { icon: Mail, label: "Email", value: "hello@nextify.vn" },
  { icon: Clock, label: "Giờ làm việc", value: "Thứ 2 – Thứ 6: 8:30 – 18:00\nThứ 7: 9:00 – 12:00" },
];

const Contact = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Gửi thành công!", description: "Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-28 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div
          ref={heroRef}
          className={`container mx-auto px-4 text-center transition-all duration-700 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Liên hệ với chúng tôi
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Đội ngũ Nextify luôn sẵn sàng lắng nghe và hỗ trợ bạn
          </p>
        </div>
      </section>

      <section className="py-16">
        <div
          ref={formRef}
          className={`container mx-auto px-4 transition-all duration-700 ${formVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              {contactInfo.map((c) => (
                <div key={c.label} className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                    <c.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">{c.label}</p>
                    <p className="text-muted-foreground text-sm whitespace-pre-line">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-5 p-8 rounded-2xl border border-border/50 bg-card">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Họ tên *</label>
                  <Input required placeholder="Nguyễn Văn A" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
                  <Input required type="email" placeholder="email@company.com" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Số điện thoại</label>
                  <Input placeholder="0912 345 678" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Công ty</label>
                  <Input placeholder="Tên doanh nghiệp" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Nội dung *</label>
                <Textarea required rows={5} placeholder="Bạn cần hỗ trợ gì?" />
              </div>
              <Button type="submit" className="gradient-bg border-0 text-primary-foreground shadow-brand w-full" size="lg" disabled={loading}>
                <Send className="w-4 h-4 mr-2" />
                {loading ? "Đang gửi..." : "Gửi tin nhắn"}
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
