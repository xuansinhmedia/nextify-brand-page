import { MessageSquare } from "lucide-react";
import SolutionLayout from "./SolutionLayout";

const CRMAutomation = () => (
  <SolutionLayout
    title="CRM Tự Động"
    subtitle="Giải pháp"
    icon={<MessageSquare size={28} className="text-primary-foreground" />}
    description="Hệ thống CRM thông minh tự động chăm sóc khách hàng qua nhiều kênh — từ lúc khách đến lần đầu cho đến khi trở thành khách hàng trung thành."
    features={[
      {
        title: "Tin nhắn chào mừng tự động",
        description: "Gửi lời chào và ưu đãi đặc biệt ngay khi khách lần đầu đến cửa hàng và đăng nhập WiFi.",
      },
      {
        title: "Nhắc nhở quay lại",
        description: "Tự động gửi tin nhắn mời khách quay lại sau một khoảng thời gian không ghé thăm, kèm ưu đãi hấp dẫn.",
      },
      {
        title: "Chúc mừng sinh nhật",
        description: "Gửi lời chúc và voucher sinh nhật tự động, tạo ấn tượng và sự gắn kết với khách hàng.",
      },
      {
        title: "Đa kênh gửi tin",
        description: "Hỗ trợ gửi tin qua SMS, Email, Zalo OA và Facebook Messenger — tiếp cận khách ở mọi nơi.",
      },
      {
        title: "Kịch bản tùy chỉnh",
        description: "Tạo các kịch bản chăm sóc linh hoạt theo hành vi khách hàng: lần ghé, tần suất, chi tiêu.",
      },
      {
        title: "Lịch sử tương tác",
        description: "Theo dõi toàn bộ lịch sử gửi tin, mở tin, nhấp link và phản hồi của từng khách hàng.",
      },
    ]}
    benefits={[
      "Chăm sóc khách hàng 24/7 không cần nhân sự",
      "Tăng tỷ lệ khách quay lại lên đến 30%",
      "Giảm chi phí nhân sự chăm sóc khách hàng",
      "Cá nhân hóa thông điệp theo từng đối tượng",
      "Tích hợp đa kênh trong một hệ thống",
      "Đo lường hiệu quả từng chiến dịch real-time",
    ]}
  />
);

export default CRMAutomation;
