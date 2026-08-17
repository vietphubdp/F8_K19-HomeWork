export const categories = [
  'Tất cả ngành nghề',
  'Công nghệ Thông tin',
  'Kinh doanh / Bán hàng',
  'Marketing / PR / Quảng cáo',
  'Hành chính / Nhân sự',
  'Tài chính / Kế toán / Ngân hàng',
  'Thiết kế / Mỹ thuật',
  'Dịch vụ khách hàng',
];

export const locations = [
  'Tất cả địa điểm',
  'Hà Nội',
  'Thành phố Hồ Chí Minh',
  'Đà Nẵng',
  'Bình Dương',
  'Đồng Nai',
  'Cần Thơ',
];

export const mockCompanies = [
  {
    id: 'comp-001',
    company_name: 'CÔNG TY CỔ PHẦN CÔNG NGHỆ TOPCV VIỆT NAM',
    short_name: 'TOPCV VIETNAM',
    logo_url: 'https://cdn-new.topcv.vn/posts/test-logo-topcv.png',
    company_size: '500-1000 nhân viên',
    category: 'Công nghệ Thông tin',
    address: 'Tầng 3, Tòa FS GoldSeason, 47 Nguyễn Tuân, Thanh Xuân, Hà Nội',
    website: 'https://www.topcv.vn',
    open_jobs_count: 12,
    badge: 'TOP EMPLOYER',
    description_html: `<div><h3>Về TopCV Việt Nam</h3><p>TopCV là công ty công nghệ hàng đầu trong lĩnh vực HR Tech tại Việt Nam, cung cấp giải pháp tuyển dụng và kết nối cơ hội việc làm cho hàng triệu ứng viên.</p><h4>Môi trường làm việc</h4><ul><li>Môi trường trẻ trung, năng động, khuyến khích sáng tạo.</li><li>Chế độ đãi ngộ hấp dẫn, thưởng performance theo quý.</li><li>Chương trình đào tạo và phát triển lộ trình thăng tiến rõ ràng.</li></ul></div>`
  },
  {
    id: 'comp-002',
    company_name: 'CÔNG TY TNHH GIẢI PHÁP PHẦN MỀM GLOBAL LOGISTICS',
    short_name: 'GL SOLUTIONS',
    logo_url: 'https://cdn-new.topcv.vn/posts/default-logo.png',
    company_size: '100-499 nhân viên',
    category: 'Sales Xuất nhập khẩu/Logistics',
    address: 'Số 120 Đường Cộng Hòa, Phường 4, Quận Tân Bình, TP. HCM',
    website: 'https://globallogistics.io',
    open_jobs_count: 5,
    badge: 'VERIFIED',
    description_html: `<div><h3>Giới thiệu về Global Logistics Solutions</h3><p>Chúng tôi chuyên cung cấp các giải pháp công nghệ chuyển đổi số cho chuỗi cung ứng và vận tải đa phương thức quốc tế.</p></div>`
  },
  {
    id: 'comp-003',
    company_name: 'NGÂN HÀNG THƯƠNG MẠI CỔ PHẦN TIÊN PHONG (TPBANK)',
    short_name: 'TPBANK',
    logo_url: 'https://cdn-new.topcv.vn/posts/test-logo-topcv.png',
    company_size: '1000+ nhân viên',
    category: 'Tài chính / Ngân hàng',
    address: 'Tòa nhà TPBank, 57 Lý Thường Kiệt, Hoàn Kiếm, Hà Nội',
    website: 'https://tpb.vn',
    open_jobs_count: 24,
    badge: 'TOP EMPLOYER',
    description_html: `<div><h3>Về TPBank</h3><p>TPBank là một trong những ngân hàng tiên phong về công nghệ số tại Việt Nam.</p></div>`
  },
  {
    id: 'comp-004',
    company_name: 'TẬP ĐOÀN VINGROUP - CÔNG TY CP',
    short_name: 'VINGROUP',
    logo_url: 'https://cdn-new.topcv.vn/posts/default-logo.png',
    company_size: '10000+ nhân viên',
    category: 'Đa ngành',
    address: 'Số 7 Đường Bằng Lăng 1, KĐT Vinhomes Riverside, Long Biên, Hà Nội',
    website: 'https://vingroup.net',
    open_jobs_count: 50,
    badge: 'TOP EMPLOYER',
    description_html: `<div><h3>Về Vingroup</h3><p>Tập đoàn kinh tế tư nhân đa ngành hàng đầu Việt Nam.</p></div>`
  }
];

export const mockJobs = [
  {
    id: 'job-001',
    title: 'Senior Frontend Developer (ReactJS / Next.js)',
    company: mockCompanies[0],
    category: 'Công nghệ Thông tin',
    experience_level: '3-5 năm',
    quantity: 3,
    gender: 'Không yêu cầu',
    job_type: 'Toàn thời gian',
    location: 'Hà Nội',
    address_detail: 'Tầng 3, Tòa FS GoldSeason, 47 Nguyễn Tuân, Thanh Xuân, Hà Nội',
    salary: '25 - 40 triệu',
    salary_range: { min: 25, max: 40, currency: 'VND' },
    deadline: '30/09/2026',
    is_hot: true,
    is_urgent: true,
    description_html: `
      <div>
        <h4 style="color:#00b14f; margin-bottom: 8px;">Mô tả công việc</h4>
        <ul>
          <li>Phát triển các tính năng UI/UX mới cho nền tảng Tuyển dụng TopCV bằng ReactJS, Next.js và MUI.</li>
          <li>Tối ưu hóa hiệu năng ứng dụng (PageSpeed, Web Vitals) và nâng cao trải nghiệm người dùng.</li>
          <li>Xây dựng và bảo trì Design System, React Components chuẩn hóa cho dự án.</li>
          <li>Phối hợp chặt chẽ với đội ngũ Product Manager, UI/UX Designer và Backend Engineer.</li>
        </ul>
      </div>
    `,
    requirements_html: `
      <div>
        <h4 style="color:#00b14f; margin-bottom: 8px;">Yêu cầu ứng viên</h4>
        <ul>
          <li>Có tối thiểu 3 năm kinh nghiệm làm việc với ReactJS, Next.js, TypeScript, Material UI (MUI).</li>
          <li>Thành thạo State Management (Redux Toolkit, Zustand, React Query), RESTful API, GraphQL.</li>
          <li>Có tư duy tối ưu SEO Web, Responsive Design và Server-Side Rendering (SSR).</li>
          <li>Đam mê công nghệ, chủ động trong công việc và có tinh thần trách nhiệm cao.</li>
        </ul>
      </div>
    `,
    benefits_html: `
      <div>
        <h4 style="color:#00b14f; margin-bottom: 8px;">Quyền lợi</h4>
        <ul>
          <li>Mức lương hấp dẫn up to 40.000.000 VNĐ + Thưởng hiệu suất dự án theo quý.</li>
          <li>Được đóng BHXH, BHYT, BHTN đầy đủ theo quy định Luật lao động.</li>
          <li>Gói chăm sóc sức khỏe định kỳ hàng năm và bảo hiểm sức khỏe cao cấp.</li>
          <li>Du lịch hàng năm, Team building quý, sinh nhật hàng tháng.</li>
          <li>Lộ trình thăng tiến rõ ràng (Technical Lead / Solution Architect).</li>
        </ul>
      </div>
    `
  },
  {
    id: 'job-002',
    title: 'Trưởng Nhóm Sales Logistics / Freight Forwarding',
    company: mockCompanies[1],
    category: 'Kinh doanh / Bán hàng',
    experience_level: '2-3 năm',
    quantity: 2,
    gender: 'Không yêu cầu',
    job_type: 'Toàn thời gian',
    location: 'Thành phố Hồ Chí Minh',
    address_detail: 'Số 120 Đường Cộng Hòa, Phường 4, Tân Bình, TP.HCM',
    salary: '15 - 30 triệu',
    salary_range: { min: 15, max: 30, currency: 'VND' },
    deadline: '15/09/2026',
    is_hot: false,
    is_urgent: true,
    description_html: `
      <div>
        <h4 style="color:#00b14f; margin-bottom: 8px;">Mô tả công việc</h4>
        <ul>
          <li>Tìm kiếm, tiếp cận và tư vấn khách hàng doanh nghiệp có nhu cầu xuất nhập khẩu freight forwarding.</li>
          <li>Quản lý và dẫn dắt đội ngũ Sales 3-5 thành viên hoàn thành chỉ tiêu doanh số.</li>
        </ul>
      </div>
    `,
    requirements_html: `
      <div>
        <h4 style="color:#00b14f; margin-bottom: 8px;">Yêu cầu ứng viên</h4>
        <ul>
          <li>Tốt nghiệp ĐH chuyên ngành Logistics, Kinh tế đối ngoại, Ngoại thương.</li>
          <li>Có từ 2 năm kinh nghiệm Sales Logistics trở lên.</li>
        </ul>
      </div>
    `,
    benefits_html: `
      <div>
        <h4 style="color:#00b14f; margin-bottom: 8px;">Quyền lợi</h4>
        <ul>
          <li>Lương cứng 15-20 triệu + % hoa hồng doanh số cực cao.</li>
          <li>Đầy đủ chế độ bảo hiểm và phúc lợi công ty.</li>
        </ul>
      </div>
    `
  },
  {
    id: 'job-003',
    title: 'Chuyên Viên Digital Marketing (Facebook / Google Ads)',
    company: mockCompanies[2],
    category: 'Marketing / PR / Quảng cáo',
    experience_level: '1-2 năm',
    quantity: 5,
    gender: 'Nam / Nữ',
    job_type: 'Toàn thời gian',
    location: 'Hà Nội',
    address_detail: 'Tòa nhà TPBank, 57 Lý Thường Kiệt, Hoàn Kiếm, Hà Nội',
    salary: '12 - 20 triệu',
    salary_range: { min: 12, max: 20, currency: 'VND' },
    deadline: '25/09/2026',
    is_hot: true,
    is_urgent: false,
    description_html: `<div><p>Lập kế hoạch và triển khai các chiến dịch quảng cáo ngân sách lớn.</p></div>`,
    requirements_html: `<div><p>Tối thiểu 1 năm chạy Google Ads & Meta Ads.</p></div>`,
    benefits_html: `<div><p>Thưởng KPI theo tháng và chế độ đãi ngộ ngân hàng.</p></div>`
  },
  {
    id: 'job-004',
    title: 'UI/UX Product Designer (Mobile & Web App)',
    company: mockCompanies[0],
    category: 'Thiết kế / Mỹ thuật',
    experience_level: '2-4 năm',
    quantity: 2,
    gender: 'Không yêu cầu',
    job_type: 'Toàn thời gian',
    location: 'Hà Nội',
    address_detail: '47 Nguyễn Tuân, Thanh Xuân, Hà Nội',
    salary: '18 - 30 triệu',
    salary_range: { min: 18, max: 30, currency: 'VND' },
    deadline: '10/10/2026',
    is_hot: true,
    is_urgent: false,
    description_html: `<div><p>Thiết kế giao diện ứng dụng tuyển dụng trên iOS/Android và Web platform.</p></div>`,
    requirements_html: `<div><p>Thành thạo Figma, Design System, Wireframing, Prototyping.</p></div>`,
    benefits_html: `<div><p>Thưởng quý, du lịch 2 lần/năm, môi trường thoải mái sáng tạo.</p></div>`
  },
  {
    id: 'job-005',
    title: 'Chuyên Viên Chăm Sóc Khách Hàng (Customer Service)',
    company: mockCompanies[3],
    category: 'Dịch vụ khách hàng',
    experience_level: 'Dưới 1 năm',
    quantity: 10,
    gender: 'Nữ',
    job_type: 'Toàn thời gian',
    location: 'Thành phố Hồ Chí Minh',
    address_detail: 'Tân Bình, TP. Hồ Chí Minh',
    salary: '10 - 15 triệu',
    salary_range: { min: 10, max: 15, currency: 'VND' },
    deadline: '20/09/2026',
    is_hot: false,
    is_urgent: true,
    description_html: `<div><p>Tiếp nhận cuộc gọi và hỗ trợ khách hàng giải đáp thắc mắc dịch vụ.</p></div>`,
    requirements_html: `<div><p>Giọng nói truyền cảm, có khả năng lắng nghe và giải quyết vấn đề tốt.</p></div>`,
    benefits_html: `<div><p>Được đào tạo bài bản từ đầu, lương tháng 13 đầy đủ.</p></div>`
  },
  {
    id: 'job-006',
    title: 'Backend Node.js / Python Developer (Microservices)',
    company: mockCompanies[1],
    category: 'Công nghệ Thông tin',
    experience_level: '2-4 năm',
    quantity: 4,
    gender: 'Không yêu cầu',
    job_type: 'Toàn thời gian',
    location: 'Thành phố Hồ Chí Minh',
    address_detail: 'Số 120 Đường Cộng Hòa, Tân Bình, TP.HCM',
    salary: '20 - 35 triệu',
    salary_range: { min: 20, max: 35, currency: 'VND' },
    deadline: '05/10/2026',
    is_hot: true,
    is_urgent: true,
    description_html: `<div><p>Xây dựng hệ thống Backend kiến trúc Microservices xử lý high traffic.</p></div>`,
    requirements_html: `<div><p>Thành thạo Node.js, Express/NestJS, PostgreSQL, Redis, Docker, AWS.</p></div>`,
    benefits_html: `<div><p>Môi trường làm việc hybrid linh hoạt, hỗ trợ thiết bị làm việc Macbook Pro.</p></div>`
  }
];
