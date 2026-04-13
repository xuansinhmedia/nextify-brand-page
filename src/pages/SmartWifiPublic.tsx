import { Wifi, Shield, Monitor, Users, Building2, Radio, BarChart3, MessageSquare, Server, Globe, Landmark, FileText } from "lucide-react";
import SolutionLayout from "./SolutionLayout";
import heroImg from "@/assets/solution-smart-wifi-public.png";

const SmartWifiPublic = () => (
  <SolutionLayout
    title="WiFi Thông Minh Hành Chính Công"
    subtitle="Giải pháp"
    icon={<Landmark size={28} className="text-primary-foreground" />}
    heroImage={heroImg}
    description="Hệ thống WiFi công cộng thông minh dành cho Nhà văn hóa thôn, tổ dân phố — kênh tuyên truyền chính sách, thúc đẩy chính quyền số và dịch vụ công trực tuyến tại cơ sở. Gói dịch vụ trọn gói bao gồm thiết bị, phần mềm, đường truyền và vận hành."
    features={[
      {
        title: "Cổng thông tin chính quyền",
        icon: <Building2 size={22} className="text-primary" />,
        description: "Captive Portal hiển thị thông báo, chủ trương, nghị quyết của Đảng và Nhà nước khi người dân đăng nhập WiFi."
      },
      {
        title: "Quản lý & giám sát tập trung",
        icon: <Monitor size={22} className="text-primary" />,
        description: "Hệ thống Cloud Management quản lý toàn bộ các điểm WiFi từ một giao diện, giám sát realtime 24/7, cảnh báo sự cố tự động."
      },
      {
        title: "WiFi 6 hiệu năng cao",
        icon: <Radio size={22} className="text-primary" />,
        description: "Công nghệ WiFi 6 (802.11ax) với OFDMA, MU-MIMO. Phục vụ 120-150 thiết bị đồng thời, băng thông 500Mbps - 1Gbps."
      },
      {
        title: "An toàn thông tin",
        icon: <Shield size={22} className="text-primary" />,
        description: "Xác thực người dùng, lưu trữ log theo quy định pháp luật, chặn nội dung độc hại, quản lý băng thông và QoS."
      },
      {
        title: "Dịch vụ công trực tuyến",
        icon: <FileText size={22} className="text-primary" />,
        description: "Điểm truy cập nộp hồ sơ hành chính trực tuyến, tra cứu thông tin, thanh toán không tiền mặt, sử dụng ứng dụng chính phủ số."
      },
      {
        title: "Khảo sát & tương tác",
        icon: <MessageSquare size={22} className="text-primary" />,
        description: "Khảo sát ý kiến nhân dân, lấy phản hồi chính sách, đánh giá mức độ hài lòng, thu nhận kiến nghị qua cổng WiFi."
      },
      {
        title: "Báo cáo & phân tích",
        icon: <BarChart3 size={22} className="text-primary" />,
        description: "Dashboard realtime: số lượng truy cập, thời gian sử dụng, demographics. Export dữ liệu phục vụ công tác điều hành."
      },
      {
        title: "Hạ tầng trọn gói",
        icon: <Server size={22} className="text-primary" />,
        description: "Gói dịch vụ bao gồm Router Enterprise, 2 AP WiFi 6, POE, cáp mạng, đường truyền cáp quang 1Gbps và toàn bộ vật tư lắp đặt."
      },
      {
        title: "Hỗ trợ kỹ thuật 24/7",
        icon: <Globe size={22} className="text-primary" />,
        description: "Đội ngũ NOC giám sát liên tục, cam kết SLA 4 giờ onsite, hotline 24/7, bảo trì và bảo hành thiết bị toàn thời gian."
      },
    ]}
    benefits={[
      "Tuyên truyền chủ trương, chính sách nhanh chóng và đồng bộ trên diện rộng",
      "Thúc đẩy chính quyền số và dịch vụ công trực tuyến tại cơ sở",
      "Giảm chi phí tổ chức họp dân, in ấn tài liệu truyền thống",
      "Phù hợp mô hình chính quyền địa phương 2 cấp, quản lý tập trung",
      "Thu hẹp khoảng cách số giữa các khu vực, nâng cao đời sống số",
      "Gói trọn gói 11 triệu VNĐ/điểm/năm — không phát sinh chi phí ẩn",
      "Tăng tính minh bạch và tương tác hai chiều giữa chính quyền và người dân",
      "Nền tảng mở rộng cho đô thị thông minh, truyền thông số trong tương lai",
    ]}
    ctaText="Liên hệ tư vấn"
  />
);

export default SmartWifiPublic;
