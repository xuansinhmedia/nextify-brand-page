import { Wifi, Shield, Monitor, Users, Building2, Radio, BarChart3, MessageSquare, Server, Globe, Landmark, FileText, Check, Router, Cpu, Cable, Wrench, Eye, HeadphonesIcon } from "lucide-react";
import SolutionLayout from "./SolutionLayout";
import heroImg from "@/assets/solution-smart-wifi-public.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const equipmentItems = [
  { icon: <Router size={20} className="text-primary" />, name: "Router chuyên dụng", desc: "Router Enterprise hỗ trợ VPN, quản lý tập trung, QoS" },
  { icon: <Radio size={20} className="text-primary" />, name: "2x Access Point WiFi 6", desc: "Chuẩn 802.11ax, OFDMA, MU-MIMO, 150+ clients đồng thời" },
  { icon: <Cpu size={20} className="text-primary" />, name: "Nguồn POE", desc: "Cấp nguồn qua cáp mạng cho Access Point" },
  { icon: <Cable size={20} className="text-primary" />, name: "Cáp mạng & vật tư", desc: "Cáp Cat6, đầu RJ45, ống gen, phụ kiện lắp đặt" },
];

const serviceItems = [
  { icon: <Wrench size={20} className="text-primary" />, name: "Triển khai lắp đặt", desc: "Khảo sát, thiết kế, lắp đặt, cấu hình, nghiệm thu" },
  { icon: <Globe size={20} className="text-primary" />, name: "Đường truyền Internet", desc: "500Mbps – 1Gbps, IP tĩnh, cam kết SLA 99.5%" },
  { icon: <Monitor size={20} className="text-primary" />, name: "Phần mềm WiFi Marketing", desc: "Captive Portal, thu thập data, analytics, báo cáo" },
  { icon: <Eye size={20} className="text-primary" />, name: "Vận hành & giám sát", desc: "NOC 24/7, monitoring realtime, cảnh báo sự cố" },
  { icon: <HeadphonesIcon size={20} className="text-primary" />, name: "Bảo trì & hỗ trợ", desc: "SLA 4h onsite, hotline 24/7, bảo hành thiết bị" },
];

const specs = [
  { label: "Access Point", value: "2 AP WiFi 6" },
  { label: "Client đồng thời", value: "120–150 thiết bị" },
  { label: "Băng thông", value: "500Mbps – 1Gbps" },
  { label: "Hợp đồng", value: "12 tháng" },
];

const PricingSection = () => {
  const anim = useScrollAnimation();
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div
        ref={anim.ref}
        className={`container mx-auto px-4 transition-all duration-700 ${anim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Gói dịch vụ trọn gói</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
            WiFi-MKT-PRO-150
          </h2>
          <p className="text-muted-foreground mt-2">Gói WiFi Marketing chuyên nghiệp · 120–150 clients · 12 tháng</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Price highlight */}
          <div className="rounded-2xl gradient-bg p-8 text-center mb-8">
            <p className="text-primary-foreground/70 text-sm mb-1">Đơn giá trọn gói / điểm / năm</p>
            <p className="text-4xl md:text-5xl font-extrabold text-primary-foreground tracking-tight">14,990,000 <span className="text-lg font-semibold">VNĐ</span></p>
            <p className="text-primary-foreground/70 text-sm mt-2">Đã bao gồm VAT · Bao gồm thiết bị, phần mềm, đường truyền & vận hành</p>
          </div>

          {/* Specs grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {specs.map((s) => (
              <div key={s.label} className="bg-card border border-border/50 rounded-xl p-4 text-center">
                <p className="text-xs text-muted-foreground mb-1">{s.label}</p>
                <p className="text-sm font-bold text-foreground">{s.value}</p>
              </div>
            ))}
          </div>

          {/* Two columns: Equipment + Services */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Equipment */}
            <div className="bg-card border border-border/50 rounded-2xl p-6">
              <h3 className="text-base font-bold text-foreground mb-4 flex items-center gap-2">
                <Server size={18} className="text-primary" />
                Thiết bị phần cứng
              </h3>
              <div className="space-y-3">
                {equipmentItems.map((item) => (
                  <div key={item.name} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-foreground">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                    <Check size={16} className="text-accent flex-shrink-0 mt-1" />
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="bg-card border border-border/50 rounded-2xl p-6">
              <h3 className="text-base font-bold text-foreground mb-4 flex items-center gap-2">
                <Wrench size={18} className="text-primary" />
                Dịch vụ triển khai & vận hành
              </h3>
              <div className="space-y-3">
                {serviceItems.map((item) => (
                  <div key={item.name} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-foreground">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                    <Check size={16} className="text-accent flex-shrink-0 mt-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SmartWifiPublic = () => (
  <SolutionLayout
    title="WiFi Thông Minh Hành Chính Công"
    subtitle="Giải pháp"
    icon={<Landmark size={28} className="text-primary-foreground" />}
    heroImage={heroImg}
    description="Hệ thống WiFi công cộng thông minh dành cho Nhà văn hóa thôn, tổ dân phố — kênh tuyên truyền chính sách, thúc đẩy chính quyền số và dịch vụ công trực tuyến tại cơ sở. Gói dịch vụ trọn gói bao gồm thiết bị, phần mềm, đường truyền và vận hành."
    features={[
      { title: "Cổng thông tin chính quyền", icon: <Building2 size={22} className="text-primary" />, description: "Captive Portal hiển thị thông báo, chủ trương, nghị quyết của Đảng và Nhà nước khi người dân đăng nhập WiFi." },
      { title: "Quản lý & giám sát tập trung", icon: <Monitor size={22} className="text-primary" />, description: "Hệ thống Cloud Management quản lý toàn bộ các điểm WiFi từ một giao diện, giám sát realtime 24/7, cảnh báo sự cố tự động." },
      { title: "WiFi 6 hiệu năng cao", icon: <Radio size={22} className="text-primary" />, description: "Công nghệ WiFi 6 (802.11ax) với OFDMA, MU-MIMO. Phục vụ 120-150 thiết bị đồng thời, băng thông 500Mbps - 1Gbps." },
      { title: "An toàn thông tin", icon: <Shield size={22} className="text-primary" />, description: "Xác thực người dùng, lưu trữ log theo quy định pháp luật, chặn nội dung độc hại, quản lý băng thông và QoS." },
      { title: "Dịch vụ công trực tuyến", icon: <FileText size={22} className="text-primary" />, description: "Điểm truy cập nộp hồ sơ hành chính trực tuyến, tra cứu thông tin, thanh toán không tiền mặt, sử dụng ứng dụng chính phủ số." },
      { title: "Khảo sát & tương tác", icon: <MessageSquare size={22} className="text-primary" />, description: "Khảo sát ý kiến nhân dân, lấy phản hồi chính sách, đánh giá mức độ hài lòng, thu nhận kiến nghị qua cổng WiFi." },
      { title: "Báo cáo & phân tích", icon: <BarChart3 size={22} className="text-primary" />, description: "Dashboard realtime: số lượng truy cập, thời gian sử dụng, demographics. Export dữ liệu phục vụ công tác điều hành." },
      { title: "Hạ tầng trọn gói", icon: <Server size={22} className="text-primary" />, description: "Gói dịch vụ bao gồm Router Enterprise, 2 AP WiFi 6, POE, cáp mạng, đường truyền cáp quang 1Gbps và toàn bộ vật tư lắp đặt." },
      { title: "Hỗ trợ kỹ thuật 24/7", icon: <Globe size={22} className="text-primary" />, description: "Đội ngũ NOC giám sát liên tục, cam kết SLA 4 giờ onsite, hotline 24/7, bảo trì và bảo hành thiết bị toàn thời gian." },
    ]}
    benefits={[
      "Tuyên truyền chủ trương, chính sách nhanh chóng và đồng bộ trên diện rộng",
      "Thúc đẩy chính quyền số và dịch vụ công trực tuyến tại cơ sở",
      "Giảm chi phí tổ chức họp dân, in ấn tài liệu truyền thống",
      "Phù hợp mô hình chính quyền địa phương 2 cấp, quản lý tập trung",
      "Thu hẹp khoảng cách số giữa các khu vực, nâng cao đời sống số",
      "Gói trọn gói 14,990,000 VNĐ/điểm/năm — không phát sinh chi phí ẩn",
      "Tăng tính minh bạch và tương tác hai chiều giữa chính quyền và người dân",
      "Nền tảng mở rộng cho đô thị thông minh, truyền thông số trong tương lai",
    ]}
    ctaText="Liên hệ tư vấn"
  >
    <PricingSection />
  </SolutionLayout>
);

export default SmartWifiPublic;
