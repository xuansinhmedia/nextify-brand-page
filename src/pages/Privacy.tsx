import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const sections = [
  {
    title: "1. Thu thập thông tin",
    content: `Chúng tôi thu thập thông tin khi bạn đăng ký tài khoản, sử dụng dịch vụ, hoặc liên hệ hỗ trợ. Thông tin bao gồm:
• Họ tên, email, số điện thoại
• Thông tin doanh nghiệp (tên, lĩnh vực, địa chỉ)
• Dữ liệu sử dụng dịch vụ và hành vi truy cập
• Thông tin thiết bị và trình duyệt`,
  },
  {
    title: "2. Sử dụng thông tin",
    content: `Thông tin thu thập được sử dụng để:
• Cung cấp và cải thiện dịch vụ
• Cá nhân hoá trải nghiệm người dùng
• Gửi thông báo quan trọng về tài khoản và dịch vụ
• Phân tích xu hướng sử dụng để phát triển sản phẩm
• Hỗ trợ khách hàng và xử lý yêu cầu`,
  },
  {
    title: "3. Bảo mật dữ liệu",
    content: `Nextify cam kết bảo vệ dữ liệu của bạn bằng các biện pháp:
• Mã hoá SSL/TLS cho mọi kết nối
• Mã hoá dữ liệu end-to-end tại rest và in-transit
• Hạ tầng cloud đạt chuẩn ISO 27001
• Kiểm tra bảo mật định kỳ bởi bên thứ ba
• Phân quyền truy cập nghiêm ngặt`,
  },
  {
    title: "4. Chia sẻ thông tin",
    content: `Chúng tôi KHÔNG bán hoặc cho thuê thông tin cá nhân của bạn. Thông tin chỉ được chia sẻ trong các trường hợp:
• Có sự đồng ý của bạn
• Yêu cầu pháp lý từ cơ quan có thẩm quyền
• Với đối tác cung cấp dịch vụ (theo hợp đồng bảo mật)
• Để bảo vệ quyền lợi hợp pháp của Nextify`,
  },
  {
    title: "5. Quyền của bạn",
    content: `Bạn có quyền:
• Truy cập và xem thông tin cá nhân đã cung cấp
• Yêu cầu chỉnh sửa hoặc cập nhật thông tin
• Yêu cầu xoá tài khoản và dữ liệu liên quan
• Từ chối nhận email marketing
• Xuất dữ liệu cá nhân theo định dạng phổ biến`,
  },
  {
    title: "6. Cookie & Tracking",
    content: `Website sử dụng cookie để:
• Duy trì phiên đăng nhập
• Ghi nhớ tuỳ chọn cá nhân
• Phân tích lưu lượng truy cập (Google Analytics)
Bạn có thể tắt cookie trong cài đặt trình duyệt, tuy nhiên một số tính năng có thể bị ảnh hưởng.`,
  },
  {
    title: "7. Liên hệ",
    content: `Nếu có câu hỏi về chính sách bảo mật, vui lòng liên hệ:
• Email: privacy@nextify.vn
• Hotline: 1900 xxxx
• Địa chỉ: Toà nhà ABC, 123 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh`,
  },
];

const Privacy = () => {
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
            Chính sách bảo mật
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

export default Privacy;
