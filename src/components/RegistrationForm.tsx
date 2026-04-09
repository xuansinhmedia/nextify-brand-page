import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const RegistrationForm = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.company) {
      toast({
        title: "Vui lòng điền đầy đủ thông tin",
        variant: "destructive",
      });
      return;
    }
    setSubmitted(true);
    toast({ title: "Đăng ký thành công!", description: "Chúng tôi sẽ liên hệ bạn trong 24h." });
  };

  if (submitted) {
    return (
      <section id="register" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center space-y-4">
            <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto">
              <CheckCircle className="text-primary-foreground" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Cảm ơn bạn đã đăng ký!</h3>
            <p className="text-muted-foreground">Đội ngũ Nextify sẽ liên hệ bạn trong vòng 24 giờ.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          <div className="space-y-6">
            <span className="inline-block text-sm font-semibold text-primary tracking-wide uppercase">
              Đăng ký dùng thử
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Trải nghiệm Nextify{" "}
              <span className="gradient-text">miễn phí 14 ngày</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Không cần thẻ tín dụng. Thiết lập trong 5 phút. Hỗ trợ kỹ thuật hoàn toàn miễn phí trong thời gian dùng thử.
            </p>
            <ul className="space-y-3">
              {[
                "Truy cập đầy đủ tính năng Business",
                "Hỗ trợ cài đặt 1-1 từ đội ngũ kỹ thuật",
                "Không ràng buộc hợp đồng",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle size={16} className="text-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl border border-border p-8 shadow-card space-y-5"
          >
            <div className="space-y-2">
              <Label htmlFor="name">Họ và tên</Label>
              <Input
                id="name"
                placeholder="Nguyễn Văn A"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="email@congty.vn"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Số điện thoại</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="0912 345 678"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                maxLength={15}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Tên doanh nghiệp</Label>
              <Input
                id="company"
                placeholder="Tên công ty / cửa hàng"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                maxLength={200}
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full gradient-bg border-0 text-primary-foreground shadow-brand hover:opacity-90 transition-opacity"
            >
              Đăng ký dùng thử miễn phí
              <ArrowRight className="ml-2" size={18} />
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              Bằng việc đăng ký, bạn đồng ý với Điều khoản sử dụng của Nextify.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
