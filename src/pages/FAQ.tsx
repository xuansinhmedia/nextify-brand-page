import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    category: "Tổng quan",
    items: [
      {
        q: "Nextify là gì?",
        a: "Nextify là nền tảng chăm sóc khách hàng toàn diện dành cho doanh nghiệp địa điểm, kết hợp WiFi Marketing, CRM tự động, phân tích khách hàng và chương trình Loyalty trong một giải pháp duy nhất.",
      },
      {
        q: "Nextify phù hợp với loại hình doanh nghiệp nào?",
        a: "Nextify phù hợp với mọi doanh nghiệp có địa điểm vật lý: nhà hàng, quán cà phê, khách sạn, spa, phòng gym, trung tâm thương mại, chuỗi bán lẻ, coworking space và nhiều hơn nữa.",
      },
      {
        q: "Tôi có cần kiến thức kỹ thuật để sử dụng Nextify không?",
        a: "Không. Nextify được thiết kế với giao diện thân thiện, dễ sử dụng. Đội ngũ hỗ trợ sẽ giúp bạn cài đặt và hướng dẫn sử dụng từ A đến Z.",
      },
    ],
  },
  {
    category: "Tính năng & Sản phẩm",
    items: [
      {
        q: "WiFi Marketing hoạt động như thế nào?",
        a: "Khi khách hàng kết nối WiFi tại địa điểm của bạn, họ sẽ được chuyển đến trang đăng nhập tuỳ chỉnh (Captive Portal). Tại đây họ có thể đăng nhập bằng Facebook, Zalo, số điện thoại hoặc email — giúp bạn tự động thu thập thông tin khách hàng.",
      },
      {
        q: "CRM tự động có những tính năng gì?",
        a: "CRM tự động bao gồm: phân nhóm khách hàng thông minh, gửi tin nhắn/email tự động theo hành vi, quản lý pipeline bán hàng, và theo dõi lịch sử tương tác chi tiết.",
      },
      {
        q: "Loyalty Program có những hình thức nào?",
        a: "Nextify hỗ trợ đa dạng hình thức: tích điểm đổi quà, phân hạng thành viên (Bronze/Silver/Gold/Platinum), chương trình giới thiệu bạn bè, và gamification để tăng tương tác.",
      },
    ],
  },
  {
    category: "Giá cả & Thanh toán",
    items: [
      {
        q: "Chi phí sử dụng Nextify là bao nhiêu?",
        a: "Nextify có nhiều gói dịch vụ phù hợp với từng quy mô doanh nghiệp. Vui lòng liên hệ để nhận báo giá chi tiết phù hợp với nhu cầu của bạn.",
      },
      {
        q: "Có được dùng thử miễn phí không?",
        a: "Có. Nextify cung cấp 14 ngày dùng thử miễn phí với đầy đủ tính năng, không cần thẻ tín dụng.",
      },
      {
        q: "Hình thức thanh toán như thế nào?",
        a: "Chúng tôi hỗ trợ thanh toán qua chuyển khoản ngân hàng, thẻ tín dụng/ghi nợ, và các ví điện tử phổ biến. Thanh toán theo tháng hoặc theo năm (tiết kiệm 20%).",
      },
    ],
  },
  {
    category: "Hỗ trợ kỹ thuật",
    items: [
      {
        q: "Thời gian triển khai mất bao lâu?",
        a: "Thông thường chỉ cần 1-3 ngày làm việc để hoàn tất cài đặt và đào tạo. Với các dự án lớn hoặc tuỳ chỉnh phức tạp, thời gian có thể từ 1-2 tuần.",
      },
      {
        q: "Nextify có tích hợp với các hệ thống khác không?",
        a: "Có. Nextify hỗ trợ tích hợp với các nền tảng phổ biến như Facebook, Zalo, Google Analytics, các hệ thống POS, và cung cấp API mở để kết nối với bất kỳ hệ thống nào.",
      },
      {
        q: "Dữ liệu khách hàng có được bảo mật không?",
        a: "Tuyệt đối. Nextify tuân thủ các tiêu chuẩn bảo mật quốc tế, mã hoá dữ liệu end-to-end, và lưu trữ trên hạ tầng cloud đạt chuẩn ISO 27001.",
      },
    ],
  },
];

const FAQ = () => {
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
            Câu hỏi thường gặp
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tìm câu trả lời nhanh cho những thắc mắc phổ biến về Nextify
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          {faqs.map((group) => {
            const { ref, isVisible } = useScrollAnimation();
            return (
              <div
                key={group.category}
                ref={ref}
                className={`mb-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  {group.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {group.items.map((item, idx) => (
                    <AccordionItem
                      key={idx}
                      value={`${group.category}-${idx}`}
                      className="border border-border/50 rounded-xl px-5 bg-card"
                    >
                      <AccordionTrigger className="text-left text-foreground hover:no-underline">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
