import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const sections = [
  {
    title: "1. Điều khoản chung",
    content: `Bằng việc sử dụng dịch vụ của Nextify, bạn đồng ý tuân thủ các điều khoản này. Nếu không đồng ý, vui lòng ngừng sử dụng dịch vụ.

Nextify có quyền thay đổi điều khoản bất kỳ lúc nào. Các thay đổi sẽ được thông báo qua email hoặc trên website trước ít nhất 30 ngày.`,
  },
  {
    title: "2. Tài khoản người dùng",
    content: `• Bạn phải cung cấp thông tin chính xác khi đăng ký
• Bạn chịu trách nhiệm bảo mật thông tin đăng nhập
• Mỗi tài khoản chỉ được sử dụng bởi một cá nhân/tổ chức
• Nextify có quyền khoá tài khoản vi phạm điều khoản`,
  },
  {
    title: "3. Quyền sở hữu trí tuệ",
    content: `• Toàn bộ phần mềm, thiết kế, thương hiệu Nextify thuộc sở hữu của công ty
• Dữ liệu bạn tạo ra trên nền tảng thuộc sở hữu của bạn
• Bạn không được sao chép, phân phối hoặc tạo sản phẩm phái sinh từ phần mềm Nextify`,
  },
  {
    title: "4. Sử dụng dịch vụ",
    content: `Bạn cam kết KHÔNG sử dụng dịch vụ để:
• Gửi spam hoặc thông tin quấy rối
• Vi phạm pháp luật Việt Nam và quốc tế
• Thu thập thông tin trái phép
• Làm gián đoạn hoạt động của hệ thống
• Mạo danh tổ chức hoặc cá nhân khác`,
  },
  {
    title: "5. Thanh toán & Hoàn tiền",
    content: `• Phí dịch vụ được thanh toán trước theo chu kỳ đã chọn
• Giá có thể thay đổi với thông báo trước 30 ngày
• Hoàn tiền theo tỷ lệ cho thời gian chưa sử dụng khi huỷ gói năm
• Gói tháng không hỗ trợ hoàn tiền sau khi đã bắt đầu chu kỳ mới`,
  },
  {
    title: "6. Giới hạn trách nhiệm",
    content: `• Nextify cung cấp dịch vụ "nguyên trạng" (as-is)
• Chúng tôi không chịu trách nhiệm cho thiệt hại gián tiếp
• Trách nhiệm tối đa không vượt quá số tiền bạn đã thanh toán trong 12 tháng gần nhất
• Nextify không chịu trách nhiệm khi gián đoạn do nguyên nhân bất khả kháng`,
  },
  {
    title: "7. Chấm dứt dịch vụ",
    content: `• Bạn có thể huỷ tài khoản bất kỳ lúc nào
• Nextify có thể chấm dứt dịch vụ nếu bạn vi phạm điều khoản
• Dữ liệu sẽ được lưu giữ 30 ngày sau khi chấm dứt để bạn xuất dữ liệu
• Sau 30 ngày, dữ liệu sẽ bị xoá vĩnh viễn`,
  },
  {
    title: "8. Luật áp dụng",
    content: `Điều khoản này được điều chỉnh theo pháp luật Việt Nam. Mọi tranh chấp sẽ được giải quyết tại toà án có thẩm quyền tại TP. Hồ Chí Minh.`,
  },
];

const Terms = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-28 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div
          ref={heroRef}
          className={`container mx-auto px-4 text-center transition-all duration-700 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Điều khoản sử dụng
          </h1>
          <p className="text-muted-foreground">Cập nhật lần cuối: Tháng 4, 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl space-y-10">
          {sections.map((s) => {
            const { ref, isVisible } = useScrollAnimation();
            return (
              <div
                key={s.title}
                ref={ref}
                className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <h2 className="text-xl font-semibold text-foreground mb-3">{s.title}</h2>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{s.content}</p>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
