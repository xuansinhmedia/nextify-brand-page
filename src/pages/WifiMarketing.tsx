import { Wifi, Layout, LogIn, Monitor, MapPin, Database, Smartphone } from "lucide-react";
import SolutionLayout from "./SolutionLayout";
import heroImg from "@/assets/solution-wifi-marketing.png";

const WifiMarketing = () => (
  <SolutionLayout
    title="WiFi Marketing"
    subtitle="Giải pháp"
    icon={<Wifi size={28} className="text-primary-foreground" />}
    heroImage={heroImg}
    description="Biến mạng WiFi thành kênh marketing mạnh mẽ. Thu thập thông tin khách hàng tự động qua trang chào WiFi được cá nhân hóa theo từng nhóm đối tượng."
    features={[
      { title: "Captive Portal tùy chỉnh", icon: <Layout size={22} className="text-primary" />, description: "Thiết kế trang chào WiFi theo thương hiệu riêng, hiển thị khuyến mãi và thu thập thông tin khách hàng khi đăng nhập." },
      { title: "Đăng nhập đa kênh", icon: <LogIn size={22} className="text-primary" />, description: "Hỗ trợ đăng nhập qua Facebook, Zalo, Google, SMS hoặc email — linh hoạt cho mọi đối tượng khách hàng." },
      { title: "Hiển thị quảng cáo", icon: <Monitor size={22} className="text-primary" />, description: "Chạy banner quảng cáo, video hoặc khảo sát ngay trên trang đăng nhập WiFi để tận dụng tối đa lượt truy cập." },
      { title: "Phân vùng theo địa điểm", icon: <MapPin size={22} className="text-primary" />, description: "Tạo các trang chào khác nhau cho từng chi nhánh hoặc khu vực trong cùng một hệ thống quản lý." },
      { title: "Thu thập dữ liệu tự động", icon: <Database size={22} className="text-primary" />, description: "Tự động lưu tên, SĐT, email, ngày sinh và lịch sử truy cập của khách hàng vào CRM." },
      { title: "Tương thích mọi thiết bị", icon: <Smartphone size={22} className="text-primary" />, description: "Giao diện responsive, hoạt động mượt mà trên mọi điện thoại, tablet và laptop." },
    ]}
    benefits={[
      "Thu thập thông tin khách hàng hoàn toàn tự động",
      "Tăng nhận diện thương hiệu qua trang chào WiFi",
      "Tiếp cận 100% khách đến cửa hàng",
      "Giảm chi phí marketing truyền thống",
      "Cá nhân hóa nội dung theo từng nhóm khách",
      "Đo lường chính xác lượng khách đến và quay lại",
    ]}
  />
);

export default WifiMarketing;
