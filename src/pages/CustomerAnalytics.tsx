import { TrendingUp } from "lucide-react";
import SolutionLayout from "./SolutionLayout";

const CustomerAnalytics = () => (
  <SolutionLayout
    title="Phân Tích Khách Hàng"
    subtitle="Giải pháp"
    icon={<TrendingUp size={28} className="text-primary-foreground" />}
    description="Hiểu rõ khách hàng của bạn qua dữ liệu chi tiết. Phân tích hành vi, thói quen và xu hướng để đưa ra quyết định kinh doanh chính xác."
    features={[
      {
        title: "Dashboard trực quan",
        description: "Bảng điều khiển hiển thị số liệu quan trọng: lượt khách, tỷ lệ quay lại, thời gian trung bình tại cửa hàng.",
      },
      {
        title: "Phân nhóm tự động",
        description: "Tự động phân loại khách thành các nhóm: khách mới, khách quay lại, khách thân thiết và khách có nguy cơ rời bỏ.",
      },
      {
        title: "Heatmap thời gian",
        description: "Xem biểu đồ nhiệt theo giờ và ngày trong tuần để biết khung giờ đông khách nhất.",
      },
      {
        title: "Phân tích xu hướng",
        description: "Theo dõi xu hướng tăng/giảm lượt khách, doanh thu và hiệu quả chiến dịch theo tuần, tháng, quý.",
      },
      {
        title: "Báo cáo chiến dịch",
        description: "Đo lường ROI chi tiết cho từng chiến dịch marketing: tỷ lệ mở, click, chuyển đổi và doanh thu mang lại.",
      },
      {
        title: "Xuất báo cáo",
        description: "Export báo cáo dạng PDF hoặc Excel, gửi tự động qua email theo lịch hàng tuần hoặc hàng tháng.",
      },
    ]}
    benefits={[
      "Ra quyết định kinh doanh dựa trên dữ liệu thực",
      "Nhận diện khách hàng có giá trị cao",
      "Phát hiện sớm xu hướng giảm khách",
      "Tối ưu chiến dịch marketing hiệu quả hơn",
      "So sánh hiệu suất giữa các chi nhánh",
      "Dự báo doanh thu và lượng khách trong tương lai",
    ]}
  />
);

export default CustomerAnalytics;
