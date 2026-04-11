import { Star } from "lucide-react";
import SolutionLayout from "./SolutionLayout";

const LoyaltyProgram = () => (
  <SolutionLayout
    title="Loyalty Program"
    subtitle="Giải pháp"
    icon={<Star size={28} className="text-primary-foreground" />}
    description="Chương trình khách hàng thân thiết giúp giữ chân và tăng tần suất quay lại. Tích điểm, đổi quà và ưu đãi VIP hoàn toàn tự động."
    features={[
      {
        title: "Tích điểm tự động",
        description: "Khách hàng tự động được tích điểm mỗi lần ghé thăm hoặc chi tiêu, không cần thẻ cứng hay thao tác thủ công.",
      },
      {
        title: "Hạng thành viên",
        description: "Thiết lập các cấp bậc thành viên (Silver, Gold, Platinum) với quyền lợi tăng dần để khuyến khích khách quay lại.",
      },
      {
        title: "Đổi điểm linh hoạt",
        description: "Khách hàng đổi điểm lấy voucher, giảm giá hoặc quà tặng trực tiếp qua app hoặc tin nhắn.",
      },
      {
        title: "Ưu đãi cá nhân hóa",
        description: "Tạo ưu đãi riêng cho từng nhóm khách dựa trên lịch sử mua hàng, tần suất ghé thăm và sở thích.",
      },
      {
        title: "Referral Program",
        description: "Khách hàng giới thiệu bạn bè sẽ được thưởng điểm — lan tỏa thương hiệu bằng chính khách hàng hiện tại.",
      },
      {
        title: "Gamification",
        description: "Thêm yếu tố trò chơi như vòng quay may mắn, thử thách hàng tuần để tăng sự hứng thú và tương tác.",
      },
    ]}
    benefits={[
      "Tăng tần suất quay lại lên đến 40%",
      "Tăng giá trị đơn hàng trung bình",
      "Xây dựng cộng đồng khách hàng trung thành",
      "Giảm chi phí thu hút khách mới",
      "Tạo lợi thế cạnh tranh bền vững",
      "Thu thập insight sâu về hành vi mua sắm",
    ]}
  />
);

export default LoyaltyProgram;
