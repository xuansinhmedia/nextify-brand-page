const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">N</span>
              </div>
              <span className="text-xl font-bold text-background">Nextify</span>
            </div>
            <p className="text-background/60 text-sm leading-relaxed">
              Nền tảng chăm sóc khách hàng dành riêng cho doanh nghiệp địa điểm.
            </p>
          </div>

          {[
            {
              title: "Giải pháp",
              links: ["WiFi Marketing", "CRM tự động", "Phân tích khách hàng", "Loyalty Program"],
            },
            {
              title: "Công ty",
              links: ["Về chúng tôi", "Blog", "Tuyển dụng", "Liên hệ"],
            },
            {
              title: "Hỗ trợ",
              links: ["Tài liệu", "FAQ", "Chính sách bảo mật", "Điều khoản"],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-background font-semibold text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-background/50 text-sm hover:text-background/80 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-background/10 pt-8 text-center">
          <p className="text-background/40 text-sm">© 2025 Nextify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
